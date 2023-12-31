<?php

namespace JennosGroup\Laramedia\Support;

use Illuminate\Database\Eloquent\Model;

class Config
{
    /**
     * The directory to store the files in.
     */
    public static function directory(): string
    {
        return Laramedia::$directory;
    }

    /**
     * The original files directory.
     */
    public static function originalFilesDirectory(): string
    {
        return Laramedia::$originalFilesDirectory;
    }

    /**
     * Get the image cut directories.
     */
    public static function imageCutDirectories(): array
    {
        $directories = Laramedia::$imageCutDirectories;

        $directories[static::originalFilesDirectory()] = [
            'max_width' => Config::originalImageMaxWidth(),
            'max_height' => Config::originalImageMaxHeight(),
        ];

        return $directories;
    }

    /**
     * Get the max width that the original image should be.
     */
    public static function originalImageMaxWidth(): ?int
    {
        return Laramedia::$originalImageMaxWidth;
    }

    /**
     * Get the max height that the original image should be.
     */
    public static function originalImageMaxHeight(): ?int
    {
        return Laramedia::$originalImageMaxHeight;
    }

    /**
     * Get the disks.
     */
    public static function disks(): array
    {
        return Laramedia::$disks;
    }

    /**
     * Get the name of the disks that are valid.
     */
    public static function validDisks(): array
    {
        return array_keys(static::getDisks());
    }

    /**
     * Get the default disk.
     */
    public static function defaultDisk(): string
    {
        return Laramedia::$defaultDisk ?? config('filesystems.default');
    }

    /**
     * Get the disk visibilities.
     */
    public static function disksVisibilities(): array
    {
        return Laramedia::$disksVisibilities;
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
     * Get the disks default visibility.
     */
    public static function disksDefaultVisibility(): array
    {
        return Laramedia::$disksDefaultVisibility;
    }

    /**
     * Get the ownerships.
     */
    public static function ownerships(): array
    {
        return Laramedia::$ownerships;
    }

    /**
     * Get the sections.
     */
    public static function sections(): array
    {
        return [
            'active' => 'Active',
            'trash' => 'Trash',
        ];
    }

    /**
     * Get the type filters.
     */
    public static function typeFilters(): array
    {
        return Laramedia::$typeFilters;
    }

    /**
     * Get the pagination total.
     */
    public static function paginationTotal(): int
    {
        return Laramedia::$paginationTotal;
    }

    /**
     * Whether files should be automatically uploaded.
     */
    public static function autoUpload(): bool
    {
        return Laramedia::$autoUpload;
    }

    /**
     * Whether to allow multiple uploads.
     */
    public static function allowMultipleUploads(): bool
    {
        return Laramedia::$allowMultipleUploads;
    }

    /**
     * Get the minimum file size allowed.
     */
    public static function minFileSize(): ?int
    {
        return Laramedia::$minFileSize;
    }

    /**
     * Get the maximum file size allowed.
     */
    public static function maxFileSize(): ?int
    {
        return Laramedia::$maxFileSize;
    }

    /**
     * Get the minimum number of files allowed.
     */
    public static function minNumberOfFiles(): ?int
    {
        return Laramedia::$minNumberOfFiles;
    }

    /**
     * Get the maximum number of files allowed.
     */
    public static function maxNumberOfFiles(): ?int
    {
        return Laramedia::$maxNumberOfFiles;
    }

    /**
     * Get the allowed file types.
     */
    public static function allowedFileTypes(): array
    {
        return Laramedia::$allowedFileTypes;
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
     * Get the meta information for each upload.
     */
    public static function meta(): array
    {
        return Laramedia::$meta;
    }

    /**
     * Get the meta fields for each upload.
     */
    public static function metaFields(): array
    {
        return Laramedia::$metaFields;
    }

    /**
     * Get the file input name.
     */
    public static function fileInputName(): string
    {
        return Laramedia::$fileInputName;
    }

    /**
     * Get the note for the uploader.
     */
    public static function note(): ?string
    {
        return Laramedia::$note;
    }

    /**
     * Check if the trash is enabled.
     */
    public static function trashIsEnabled(): bool
    {
        return Laramedia::$enableTrash;
    }

    /**
     * Check if the trash is diabled.
     */
    public static function trashIsDisabled(): bool
    {
        return ! static::trashIsEnabled();
    }

    /**
     * The route middlewares.
     */
    public static function routeMiddlewares(): array
    {
        return Laramedia::$routeMiddlewares;
    }

    /**
     * The route prefix.
     */
    public static function routePrefix(): string
    {
        return Laramedia::$routePrefix;
    }

    /**
     * The route name.
     */
    public static function routeAs(): string
    {
        return Laramedia::$routeAs;
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
     * The policies.
     */
    public static function policies(): array
    {
        $defaults = [
            'model' => Laramedia\Models\Media::class,
            'active_listings' => null,
            'trash_listings' => null,
            'files' => null,
            'options' => null,
            'store' => null,
            'preview' => null,
            'download' => null,
            'update' => null,
            'trash' => null,
            'restore' => null,
            'delete' => null,
            'trash_bulk' => null,
            'restore_bulk' => null,
            'delete_bulk' => null,
        ];

        return array_merge($defaults, Laramedia::$policies);
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
     * The prefix for all our tables.
     */
    public static function tablePrefix(): string
    {
        return Laramedia::$tablePrefix;
    }

    /**
     * The names for all our tables.
     */
    public static function tableNames(): array
    {
        return Laramedia::$tableNames;
    }

    /**
     * Get the login verification token table name.
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
            'options_route_name' => static::optionsRouteName(),
            'disks' => static::disks(),
            'default_disk' => static::defaultDisk(),
            'disks_visibilities' => static::disksVisibilities(),
            'disks_default_visibility' => static::disksDefaultVisibility(),
            'auto_upload' => static::autoUpload(),
            'allow_multiple_uploads' => static::allowMultipleUploads(),
            'allowed_file_types' => static::allowedFileTypes(),
            'allowed_mimetypes' => static::allowedMimeTypes(),
            'allowed_mimetypes_wildward' => static::allowedMimeTypesWildcards(),
            'allowed_extensions' => static::allowedExtensions(),
            'min_file_size' => static::minFileSize(),
            'max_file_size' => static::maxFileSize(),
            'min_number_of_files' => static::minNumberOfFiles(),
            'max_number_of_files' => static::maxNumberOfFiles(),
            'meta' => static::meta(),
            'meta_fields' => static::metaFields(),
            'file_input_name' => static::fileInputName(),
            'note' => static::note(),
            'pagination_total' => static::paginationTotal(),
        ];
    }
}
