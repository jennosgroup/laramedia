<?php

namespace LaravelFilesLibrary\Support;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Support\Config;
use LaravelFilesLibrary\Support\LaravelFilesLibrary;

class Finder
{
    /**
     * The request instance.
     */
    protected Request $request;

    /**
     * Create an instance of the class.
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Get the results.
     */
    public function get(): Collection
    {
        return $this->buildQuery()->get();
    }

    /**
     * Get the paginated results.
     */
    public function paginate(int $total = null): LengthAwarePaginator
    {
        if (is_null($total)) {
            $total = Config::paginationTotal();
        }

        return $this->buildQuery()->paginate($total);
    }

    /**
     * Get the request instance.
     */
    public function getRequest(): Request
    {
        return $this->request;
    }

    /**
     * Get the type value submitted with the request.
     */
    public function getTypeFromRequest(): ?string
    {
        return $this->getRequest()->input('type');
    }

    /**
     * Get the disk value submitted with the request.
     */
    public function getDiskFromRequest(): ?string
    {
        return $this->getRequest()->input('disk');
    }

    /**
     * Get the visibility value submitted with the request.
     */
    public function getVisibilityFromRequest(): ?string
    {
        return $this->getRequest()->input('visibility');
    }

    /**
     * Get the ownership value submitted with the request.
     */
    public function getOwnershipFromRequest(): ?string
    {
        return $this->getRequest()->input('ownership');
    }

    /**
     * Get the section value submitted with the request.
     */
    public function getSectionFromRequest(): ?string
    {
        return $this->getRequest()->input('section');
    }

    /**
     * Get the search value submitted with the request.
     */
    public function getSearchFromRequest(): ?string
    {
        return $this->getRequest()->input('search');
    }

    /**
     * Get the type filter.
     */
    public function getType(): ?string
    {
        $type = $this->getTypeFromRequest();

        if (! array_key_exists($type, Config::typeFilters())) {
            return null;
        }

        return $type;
    }

    /**
     * Get the disk filter.
     */
    public function getDisk(): ?string
    {
        $disk = $this->getDiskFromRequest();

        if (! array_key_exists($disk, Config::disks())) {
            return null;
        }

        return $disk;
    }

    /**
     * Get the visibility filter.
     */
    public function getVisibility(): ?string
    {
        $visibility = $this->getVisibilityFromRequest();

        if (! array_key_exists($visibility, Config::disksVisibilities())) {
            return null;
        }

        return $visibility;
    }

    /**
     * Get the ownership filter.
     */
    public function getOwnership(): ?string
    {
        $ownership = $this->getOwnershipFromRequest();

        if (! array_key_exists($ownership, Config::ownerships())) {
            return null;
        }

        return $ownership;
    }

    /**
     * Get the section filter.
     */
    public function getSection(): string
    {
        $section = $this->getSectionFromRequest();

        if (array_key_exists($section, Config::sections())) {
            return $section;
        }

        return 'active';
    }

    /**
     * Get the search term.
     */
    public function getSearch(): ?string
    {
        return $this->getSearchFromRequest();
    }

    /**
     * Get the search fields.
     */
    public function getSearchFields(): array
    {
        return ['title', 'name', 'alt_text', 'caption', 'description'];
    }

    /**
     * Build the filter query.
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function buildQuery()
    {
        $query = Media::orderBy('created_at', 'DESC');

        $query = $this->handleTypeQuery($query);

        $query = $this->handleDiskQuery($query);

        $query = $this->handleVisibilityQuery($query);

        $query = $this->handleOwnershipQuery($query);

        $query = $this->handleSectionQuery($query);

        $query = $this->handleSearchQuery($query);

        return $query;
    }

    /**
     * Handle the type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleTypeQuery($query)
    {
        $types = [];

        $validTypes = Config::typeFilters()[$this->getType()] ?? [];

        // Put not like types to the front of the queue
        foreach ($validTypes as $value) {
            if ($this->isLikeType($value)) {
                $types[] = $value;
            } else {
                array_unshift($types, $value);
            }
        }

        if (empty($types)) {
            return $query;
        }

        return $query->where(function ($query) use ($types) {
            foreach ($types as $index => $value) {

                $isLikeType = $this->isLikeType($value);

                // Remove the '^' from not like type values
                // Remove the asterick off wild card values
                $value = str_replace(['^', '*'], '', $value);

                if ($index == 0 && $isLikeType) {
                    $query->where('mimetype', 'like', '%'.$value.'%');
                } elseif ($index > 0 && $isLikeType) {
                    $query->orWhere('mimetype', 'like', '%'.$value.'%');
                } else {
                    $query->where('mimetype', 'not like', '%'.$value.'%');
                }
            }

            return $query;
        });
    }

    /**
     * Handle the disk query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleDiskQuery($query)
    {
        if (is_null($this->getDisk())) {
            return $query;
        }

        return $query->where('disk', $this->getDisk());
    }

    /**
     * Handle the visibility query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleVisibilityQuery($query)
    {
        if (is_null($this->getVisibility())) {
            return $query;
        }

        return $query->where('visibility', $this->getVisibility());
    }

    /**
     * Handle the ownership query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleOwnershipQuery($query)
    {
        if (is_null($this->getOwnership())) {
            return $query;
        }

        // If no user login, we don't need to go further
        if (! Auth::check()) {
            return $query;
        }

        $userId = Auth::user()->{Auth::user()->getKeyName()};

        if ($this->getOwnership() == 'others') {
            return $query->where('author_id', '!=', $userId);
        }

        if ($this->getOwnership() == 'mine') {
            return $query->where('author_id', $userId);
        }

        return $query;
    }

    /**
     * Handle the section query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleSectionQuery($query)
    {
        if ($this->getSection() == 'trash') {
            return $query->onlyTrashed();
        }

        return $query;
    }

    /**
     * Handle the search query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleSearchQuery($query)
    {
        if (is_null($this->getSearch())) {
            return $query;
        }

        if ($this->getSearch() == '') {
            return $query;
        }

        return $query->where(function ($query) {
            foreach ($this->getSearchFields() as $index => $column) {
                if ($index == 0) {
                    $query->where(htmlspecialchars($column), 'like', '%'.$this->getSearch().'%');
                } else {
                    $query->orWhere(htmlspecialchars($column), 'like', '%'.$this->getSearch().'%');
                }
            }
        });
    }

    /**
     * Check if the string is a full mimetype definition.
     */
    protected function isFullMime(string $value): bool
    {
        $result = preg_split('/\//', $value, 0, PREG_SPLIT_NO_EMPTY);

        return count($result) == 2 && $result[1] != '*';
    }

    /**
     * Check if the string is a mime wild card.
     */
    protected function isMimeWildcard(string $value): bool
    {
        $result = preg_split('/\//', $value, 0, PREG_SPLIT_NO_EMPTY);

        return count($result) == 2 && $result[1] == '*';
    }

    /**
     * Check if the value given is an extension.
     */
    protected function isExtension(string $value): bool
    {
        $result = preg_split('/\//', $value, 0, PREG_SPLIT_NO_EMPTY);

        return count($result) === 1;
    }

    /**
     * Check if the type given is a 'like' type.
     */
    protected function isLikeType(string $type): bool
    {
        preg_match('/^\^{1}/', $type, $matches);
        return empty($matches);
    }

    /**
     * Check if the type given is a 'not like' type.
     */
    protected function isNotLikeType(string $type): bool
    {
        return $this->isLikeType($type) === false;
    }

    /**
     * Get the finder data.
     */
    protected function getData(): array
    {
        return [
            'type' => $this->getType(),
            'disk' => $this->getDisk(),
            'visibility' => $this->getVisibility(),
            'ownership' => $this->getOwnership(),
            'section' => $this->getSection(),
            'search' => $this->getSearch(),
        ];
    }
}
