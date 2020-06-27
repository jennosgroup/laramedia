<?php

namespace Laramedia\Support;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Laramedia\Models\MediaAuthor;
use Illuminate\Support\Facades\Auth;

class Finder
{
    /**
     * The types whitelist.
     */
    private array $types = [
        'image', 'audio', 'video', 'document', 'media', 'none_image',
    ];

    /**
     * The visibilities whitelist.
     */
    private array $visibilities = [
        'private', 'public',
    ];

    /**
     * The ownerships whitelist.
     */
    private array $ownerships = [
        'mine', 'others',
    ];

    /**
     * The sections whitelist.
     */
    private array $sections = [
        'active', 'trash',
    ];

    /**
     * THe columns to search in.
     */
    private array $searchFields = [
        'name', 'title', 'caption', 'description', 'alt_text', 'seo_title', 'seo_description', 'seo_keywords',
    ];

    /**
     * The type of files to retrieve.
     */
    private ?string $type;

    /**
     * The visibility of files to restore.
     */
    private ?string $visibility;

    /**
     * The ownership of the files to retrieve.
     */
    private ?string $ownership;

    /**
     * The section to retrieve the files for.
     */
    private ?string $section;

    /**
     * THe search term for the files to retrieve.
     */
    private ?string $search;

    /**
     * The model to use within the queries.
     */
    private ?Media $model = null;

    /**
     * Get the model for the finder to work with.
     *
     * @return Laramedia\Models\Media
     */
    public function getModel(): Media
    {
        if (is_null($this->model)) {
            $this->model = new Media;
        }
        return $this->model;
    }

    /**
     * Get the results.
     *
     * @param  array  $columns
     *
     * @return \Illuminate\Support\Collection
     */
    public function get(array $columns = ['*'])
    {
        return $this->buildQuery()->get($columns);
    }

    /**
     * Get the paginated results.
     *
     * @param  int  $total
     *
     * @return \Illuminate\Pagination\LengthAwarePagination
     */
    public function paginate(int $total = null)
    {
        if (is_null($total)) {
            return $this->buildQuery()->paginate();
        }
        return $this->buildQuery()->paginate($total);
    }

    /**
     * Build the filter query.
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    public function buildQuery()
    {
        $query = Media::orderBy('created_at', 'DESC');

        if (in_array($this->type, $this->types)) {
            $query = $this->handleTypeQuery($query);
        }

        if (in_array($this->visibility, $this->visibilities)) {
            $query = $this->handleVisibilityQuery($query);
        }

        if (in_array($this->ownership, $this->ownerships)) {
            $query = $this->handleOwnershipQuery($query);
        }

        if (in_array($this->section, $this->sections)) {
            $query = $this->handleSectionQuery($query);
        }

        if (! is_null($this->search) && $this->search != '') {
            $query = $this->handleSearchQuery($query);
        }

        return $query;
    }

    /**
     * Set the type filter.
     *
     * @param  string  $type
     *
     * @return $this
     */
    public function type(string $type = null): self
    {
        $this->type = $type;
        return $this;
    }

    /**
     * Set the visibility fileter.
     *
     * @param  string  $visibility
     *
     * @return $this
     */
    public function visibility(string $visibility = null): self
    {
        $this->visibility = $visibility;
        return $this;
    }

    /**
     * Set the ownership filter.
     *
     * @param  string|null  $ownership
     *
     * @return $this
     */
    public function ownership(string $ownership = null): self
    {
        $this->ownership = $ownership;
        return $this;
    }

    /**
     * Set the section filter.
     *
     * @param  string  $section
     *
     * @return $this
     */
    public function section(string $section = null): self
    {
        $this->section = $section;
        return $this;
    }

    /**
     * Set the search term.
     *
     * @param  string  $search
     *
     * @return $this
     */
    public function search($search = null): self
    {
        $this->search = $search;
        return $this;
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
        if ($this->type == 'image') {
            return $this->handleImageTypeQuery($query);
        }

        if ($this->type == 'audio') {
            return $this->handleAudioTypeQuery($query);
        }

        if ($this->type == 'video') {
            return $this->handleVideoTypeQuery($query);
        }

        if ($this->type == 'document') {
            return $this->handleDocumentTypeQuery($query);
        }

        if ($this->type == 'media') {
            return $this->handleMediaTypeQuery($query);
        }

        if ($this->type == 'none_image') {
            return $this->handleNoneImageTypeQuery($query);
        }
    }

    /**
     * Handle the image type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleImageTypeQuery($query)
    {
        $types = Config::typeFilters()['image'] ?? [];

        return $this->handleTypeLikeQuery($query, $types);
    }

    /**
     * Handle the audio type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleAudioTypeQuery($query)
    {
        $types = Config::typeFilters()['audio'] ?? [];

        return $this->handleTypeLikeQuery($query, $types);
    }

    /**
     * Handle the video type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleVideoTypeQuery($query)
    {
        $types = Config::typeFilters()['video'] ?? [];

        return $this->handleTypeLikeQuery($query, $types);
    }

    /**
     * Handle document type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleDocumentTypeQuery($query)
    {
        $types = Config::typeFilters()['document'] ?? [];

        return $this->handleTypeLikeQuery($query, $types);
    }

    /**
     * Handle the media type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleMediaTypeQuery($query)
    {
        $types = Config::typeFilters()['media'] ?? [];

        return $this->handleTypeLikeQuery($query, $types);
    }

    /**
     * Handle the none image type query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleNoneImageTypeQuery($query)
    {
        $types = Config::typeFilters()['image'] ?? [];

        return $this->handleTypeNotLikeQuery($query, $types);
    }

    /**
     * Handle the type like query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  array  $types
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function handleTypeLikeQuery($query, $types)
    {
        return $query->where(function ($query) use ($types) {
            foreach ($types as $index => $value) {

                // Strip the asterisk off wild card values
                if ($this->isMimeWildcard($value)) {
                    $value = str_replace('*', '', $value);
                }

                if ($index == 0) {
                    $query->where('mimetype', 'like', '%'.$value.'%');
                } else {
                    $query->orWhere('mimetype', 'like', '%'.$value.'%');
                }
            }
        });
    }

    /**
     * Handle the type not like query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  array  $types
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function handleTypeNotLikeQuery($query, $types)
    {
        return $query->where(function ($query) use ($types) {
            foreach ($types as $index => $value) {

                // Strip the asterisk off wild card values
                if ($this->isMimeWildcard($value)) {
                    $value = str_replace('*', '', $value);
                }

                if ($index == 0) {
                    $query->where('mimetype', 'not like', '%'.$value.'%');
                } else {
                    $query->orWhere('mimetype', 'not like', '%'.$value.'%');
                }
            }
        });
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
        if (Config::hideVisibility()) {
            $this->visibility = Config::defaultVisibility();
        }

        return $query->where('visibility', $this->visibility);
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
        if ($this->ownership == 'mine') {
            return $this->handleMineOwnershipQuery($query);
        }
        return $this->handleOthersOwnershipQuery($query);
    }

    /**
     * Handle the mine ownership query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleMineOwnershipQuery($query)
    {
        $userIdColumn = Config::userIdColumn();
        $userId = Auth::user()->{$userIdColumn};
        $authorTable = (new MediaAuthor)->getTable();

        return $query->where(function ($query) use ($userId, $authorTable) {
            $query->where('administrator_id', $userId)
                ->orWhereIn('id', function ($query) use ($userId, $authorTable) {
                    $query->from($authorTable)->select('media_id')
                        ->where('author_id', $userId);
                });
        });
    }

    /**
     * Handle the others ownership query.
     *
     * @param  Illuminate\Database\Eloquent\Builder  $query
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    protected function handleOthersOwnershipQuery($query)
    {
        $userIdColumn = Config::userIdColumn();
        $userId = Auth::user()->{$userIdColumn};
        $authorTable = (new MediaAuthor)->getTable();

        return $query->where(function ($query) use ($userId, $authorTable) {
            $query->where('administrator_id', '!=', $userId)
                ->WhereNotIn('id', function ($query) use ($userId, $authorTable) {
                    $query->from($authorTable)->select('media_id')
                        ->where('author_id', $userId);
                });
        });
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
        if (Config::trashIsDisabled()) {
            $this->section = 'active';
        }

        if ($this->section != 'trash') {
            return $query;
        }

        return $query->onlyTrashed();
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
        return $query->where(function ($query) {
            foreach ($this->searchFields as $index => $column) {
                if ($index == 0) {
                    $query->where(htmlspecialchars($column), 'like', '%'.$this->search.'%');
                } else {
                    $query->orWhere(htmlspecialchars($column), 'like', '%'.$this->search.'%');
                }
            }
        });
    }

    /**
     * Check if the string is a full mimetype definition.
     *
     * @param  string  $value
     *
     * @return bool
     */
    protected function isFullMime($value): bool
    {
        $result = preg_split('/\//', $value, null, PREG_SPLIT_NO_EMPTY);
        $total = count($result);

        if ($total == 2 && $result[1] != '*') {
            return true;
        }

        return false;
    }

    /**
     * Check if the string is a mime wild card.
     *
     * @param  string  $value
     *
     * @return bool
     */
    protected function isMimeWildcard($value): bool
    {
        $result = preg_split('/\//', $value, null, PREG_SPLIT_NO_EMPTY);
        $total = count($result);

        if ($total == 2 && $result[1] == '*') {
            return true;
        }

        return false;
    }

    /**
     * Check if the value given is an extension.
     *
     * @param  string  $value
     *
     * @return bool
     */
    protected function isExtension($value): bool
    {
        if (empty($value)) {
            return false;
        }

        $result = preg_split('/\//', $value, null, PREG_SPLIT_NO_EMPTY);

        return count($result) === 1;
    }
}
