<?php

namespace JennosGroup\Laramedia\Support;

use illuminate\Database\Eloquent\Model;
use illuminate\Support\Facades\Auth;

class Laramedia extends Config
{
    /**
     * The filter for the listings view options callback.
     */
    public static $filterListingsViewOptionsCallback = null;

    /**
     * The callback filter for the listings view options. Params passed to the callback
     * are:
     * 1) view options
     * 2) files resource list
     * 3) request instance
     *
     * This callback should return the view options.
     */
    public static function filterListingsViewOptionsUsing(callable $callback): void
    {
        static::$filterListingsViewOptionsCallback = $callback;
    }

    /**
     * Get a specific disk visibilities.
     */
    public static function diskVisibilities(string $disk): array
    {
        return static::$disksVisibilities()[$disk] ?? [];
    }

    /**
     * Get the disk visibilities list.
     */
    public static function diskVisibilitiesList(): array
    {
        $list = [];

        foreach (static::disksVisibilities() as $disk => $visibilities) {
            foreach ($visibilities as $visibility) {
                $list[] = $visibility;
            }
        }

        return array_unique($list);
    }

    /**
     * Get the allowed mimetypes.
     */
    public static function allowedMimeTypes(): array
    {
        $results = [];

        foreach (static::allowedFileTypes() as $type) {
            if (! preg_match('/\//', $type)) {
                continue;
            }

            $results[] = $type;
        }

        return $results;
    }

    /**
     * Get the allowed mimetypes wildcards.
     */
    public static function allowedMimeTypesWildcards(): array
    {
        $results = [];

        foreach (static::allowedFileTypes() as $type) {
            if (! preg_match('/\//', $type)) {
                continue;
            }
            $parts = explode('/', $type);
            $results[] = $parts[0].'/*';
        }

        return $results;
    }

    /**
     * Get the allowed extensions.
     */
    public static function allowedExtensions(): array
    {
        $results = [];

        foreach (static::allowedFileTypes() as $type) {
            if (preg_match('/\//', $type)) {
                continue;
            }
            $results[] = $type;
        }

        return $results;
    }

    /**
     * Get the options route name.
     */
    public static function optionsRouteName(): string
    {
        return static::routeAs().'options';
    }

    /**
     * Get the files route name.
     */
    public static function filesRouteName(): string
    {
        return static::routeAs().'files';
    }

    /**
     * Get the listings route name.
     */
    public static function listingsRouteName(): string
    {
        return static::routeAs().'listings';
    }

    /**
     * Get the store route name.
     */
    public static function storeRouteName(): string
    {
        return static::routeAs().'store';
    }

    /**
     * Get the upload route name - alias for store route.
     */
    public static function uploadRouteName(): string
    {
        return static::storeRouteName();
    }

    /**
     * Get the view route name.
     */
    public static function viewRouteName(): string
    {
        return static::routeAs().'view';
    }

    /**
     * Get the preview route name.
     */
    public static function previewRouteName(): string
    {
        return static::viewRouteName();
    }

    /**
     * Get the download route name.
     */
    public static function downloadRouteName(): string
    {
        return static::routeAs().'download';
    }

    /**
     * Get the base64 route name.
     */
    public static function base64UrlRouteName(): string
    {
        return static::routeAs().'base64';
    }

    /**
     * Get the update route name.
     */
    public static function updateRouteName(): string
    {
        return static::routeAs().'update';
    }

    /**
     * Get the trash route name.
     */
    public static function trashRouteName(): string
    {
        return static::routeAs().'trash';
    }

    /**
     * Get the restore route name.
     */
    public static function restoreRouteName(): string
    {
        return static::routeAs().'restore';
    }

    /**
     * Get the destroy route name.
     */
    public static function destroyRouteName(): string
    {
        return static::routeAs().'destroy';
    }

    /**
     * Get the options route.
     */
    public static function optionsRoute(): string
    {
        return route(static::optionsRouteName());
    }

    /**
     * Get the files route.
     */
    public static function filesRoute(): string
    {
        return route(static::filesRouteName());
    }

    /**
     * Get the listings route.
     */
    public static function listingsRoute(): string
    {
        return route(static::listingsRouteName());
    }

    /**
     * Get the store route.
     */
    public static function storeRoute(): string
    {
        return route(static::storeRouteName());
    }

    /**
     * Get the views route.
     */
    public static function viewRoute(Model $media): string
    {
        return route(static::viewRouteName(), $media);
    }

    /**
     * Get the previews route.
     */
    public static function previewRoute(Model $media): string
    {
        return static::viewRoute($media);
    }

    /**
     * Get the download route.
     */
    public static function downloadRoute(Model $media): string
    {
        return route(static::downloadRouteName(), $media);
    }

    /**
     * Get the base64url route.
     */
    public static function base64UrlRoute(Model $media): string
    {
        return route(static::base64UrlRouteName(), $media);
    }

    /**
     * Get the update route.
     */
    public static function updateRoute(Model $media): string
    {
        return route(static::updateRouteName(), $media);
    }

    /**
     * Get the trash route.
     */
    public static function trashRoute(Model $media): string
    {
        return route(static::trashRouteName(), $media);
    }

    /**
     * Get the restore route.
     */
    public static function restoreRoute(Model $media): string
    {
        return route(static::restoreRouteName(), $media);
    }

    /**
     * Get the destroy route.
     */
    public static function destroyRoute(Model $media): string
    {
        return route(static::destroyRouteName(), $media);
    }

    /**
     * Check if the user can execute a policy.
     */
    public static function can(string $key, Model $model = null): bool
    {
        $policies = static::policies();

        if (is_null($model)) {
            $model = $policies['model'] ?? null;
        }

        if (! array_key_exists($key, $policies)) {
            return false;
        }

        $policy = $policies[$key];

        if (is_null($policy)) {
            return true;
        }

        return Auth::user()->can($policy, $model);
    }

    /**
     * Get the table name.
     */
    public static function tableName(string $alias): ?string
    {
        $prefix = static::tablePrefix();
        $tables = static::tableNames();

        return $tables[$alias] ? $prefix.$tables[$alias] : null;
    }

    /**
     * Get the options for the browser.
     */
    public static function browserOptions(): array
    {
        return [
            'disks' => static::disks(),
            'default_disk' => static::defaultDisk(),
            'disks_visibilities' => static::disksVisibilities(),
            'disks_default_visibility' => static::disksDefaultVisibility(),
            'auto_upload' => static::autoUpload(),
            'allow_multiple_uploads' => static::allowMultipleUploads(),
            'min_file_size' => static::minFileSize(),
            'max_file_size' => static::maxFileSize(),
            'min_number_of_files' => static::minNumberOfFiles(),
            'max_number_of_files' => static::maxNumberOfFiles(),
            'allowed_file_types' => static::allowedFileTypes(),
            'allowed_mimetypes' => static::allowedMimeTypes(),
            'allowed_mimetypes_wildward' => static::allowedMimeTypesWildcards(),
            'allowed_extensions' => static::allowedExtensions(),
            'meta' => static::meta(),
            'meta_fields' => static::metaFields(),
            'file_input_name' => static::fileInputName(),
            'note' => static::note(),
            'pagination_total' => static::paginationTotal(),
            'options_route_name' => static::optionsRouteName(),
        ];
    }
}
