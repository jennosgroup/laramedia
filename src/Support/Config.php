<?php

namespace JennosGroup\Laramedia\Support;

use Illuminate\Database\Eloquent\Model;

class Config
{
    /**
     * The config file name.
     */
    protected static string $configFileName = 'laramedia';

    /**
     * The directory to store the files in.
     */
    public static function directory(): string
    {
        return config(static::$configFileName.'.directory', 'laramedia');
    }

    /**
     * The original files directory.
     */
    public static function originalFilesDirectory(): string
    {
        return config(static::$configFileName.'.original_files_directory', 'original');
    }

    /**
     * Get the image cut directories.
     */
    public static function imageCutDirectories(): array
    {
        $directories = config(static::$configFileName.'.image_cut_directories', []);;

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
        return config(static::$configFileName.'.original_image_max_width', 2000);
    }

    /**
     * Get the max height that the original image should be.
     */
    public static function originalImageMaxHeight(): ?int
    {
        return config(static::$configFileName.'.original_image_max_height', 2000);
    }

    /**
     * Get the disks.
     */
    public static function disks(): array
    {
        return config(static::$configFileName.'.disks', [
            'local' => 'Local',
            'public' => 'Public',
            's3' => 'Cloud',
        ]);
    }

    /**
     * Get the default disk.
     */
    public static function defaultDisk(): string
    {
        return config(static::$configFileName.'.default_disk', 'local');
    }

    /**
     * Get the disk visibilities.
     */
    public static function disksVisibilities(): array
    {
        return config(static::$configFileName.'.disks_visibilities', [
            'local' => ['private' => 'Private'],
            'public' => ['public' => 'Public'],
            's3' => ['private' => 'Private', 'public' => 'Public'],
        ]);
    }

    /**
     * Get the disks default visibility.
     */
    public static function disksDefaultVisibility(): array
    {
        return config(static::$configFileName.'.disks_default_visibility', [
            'local' => 'private',
            'public' => 'public',
            's3' => 'public',
        ]);
    }

    /**
     * Get the ownerships.
     */
    public static function ownerships(): array
    {
        return config(static::$configFileName.'.ownerships', [
            'mine' => 'Mine',
            'others' => 'Others',
        ]);
    }

    /**
     * Get the sections.
     */
    public static function sections(): array
    {
        return config(static::$configFileName.'.sections', [
            'active' => 'Active',
            'trash' => 'Trash',
        ]);
    }

    /**
     * Get the type filters.
     */
    public static function typeFilters(): array
    {
        return config(static::$configFileName.'.type_filters', [
            'image' => ['image/*'],
            'document' => ['pdf'],
            'none_image' => ['^image/*'],
        ]);
    }

    /**
     * Whether files should be automatically uploaded.
     */
    public static function autoUpload(): bool
    {
        return config(static::$configFileName.'.auto_upload', true);
    }

    /**
     * Whether to allow multiple uploads.
     */
    public static function allowMultipleUploads(): bool
    {
        return config(static::$configFileName.'.allow_multiple_uploads', true);
    }

    /**
     * Get the minimum file size allowed.
     */
    public static function minFileSize(): ?int
    {
        return config(static::$configFileName.'.min_file_size', null);
    }

    /**
     * Get the maximum file size allowed.
     */
    public static function maxFileSize(): ?int
    {
        return config(static::$configFileName.'.max_file_size', null);
    }

    /**
     * Get the minimum number of files allowed.
     */
    public static function minNumberOfFiles(): ?int
    {
        return config(static::$configFileName.'.min_number_of_files', null);
    }

    /**
     * Get the maximum number of files allowed.
     */
    public static function maxNumberOfFiles(): ?int
    {
        return config(static::$configFileName.'.max_number_of_files', null);
    }

    /**
     * Get the allowed file types.
     */
    public static function allowedFileTypes(): array
    {
        return config(static::$configFileName.'.allowed_file_types', [
            'image/*', 'pdf',
        ]);
    }

    /**
     * Get the meta information for each upload.
     */
    public static function meta(): array
    {
        return config(static::$configFileName.'.meta', []);
    }

    /**
     * Get the meta fields for each upload.
     */
    public static function metaFields(): array
    {
        return config(static::$configFileName.'.meta_fields', []);
    }

    /**
     * Get the file input name.
     */
    public static function fileInputName(): string
    {
        return config(static::$configFileName.'.file_input_name', 'file');
    }

    /**
     * Get the note for the uploader.
     */
    public static function note(): ?string
    {
        return config(static::$configFileName.'.note', null);
    }

    /**
     * Check if the trash is enabled.
     */
    public static function trashIsEnabled(): bool
    {
        return config(static::$configFileName.'.enable_trash', true);
    }

    /**
     * Check if the trash is diabled.
     */
    public static function trashIsDisabled(): bool
    {
        return ! static::trashIsEnabled();
    }  

    /**
     * Get the pagination total.
     */
    public static function paginationTotal(): int
    {
        return config(static::$configFileName.'.pagination_total', 45);
    }

    /**
     * The route middlewares.
     */
    public static function routeMiddlewares(): array
    {
        return config(static::$configFileName.'.route_middlewares', ['web']);
    }

    /**
     * The route prefix.
     */
    public static function routePrefix(): string
    {
        return config(static::$configFileName.'.route_prefix', 'laramedia');
    }

    /**
     * The route name.
     */
    public static function routeAs(): string
    {
        return config(static::$configFileName.'.route_as', 'lfl');
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

        $config = config(static::$configFileName.'.policies', []);

        return array_merge($defaults, $config);
    }

    /**
     * The prefix for all our tables.
     */
    public static function tablePrefix(): string
    {
        return config(static::$configFileName.'.table_prefix', 'lfl_');
    }

    /**
     * The names for all our tables.
     */
    public static function tableNames(): array
    {
        return config(static::$configFileName.'.table_names', [
            'media' => 'Media',
        ]);
    }

    /**
     * Get the listings view path.
     */
    public static function listingsViewPath(): ?string
    {
        return config(static::$configFileName.'.listings_view_path', 'listings');
    }
}
