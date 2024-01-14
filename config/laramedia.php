<?php

return [

    /**
     * The directory to store the files in.
     */
    'directory' => 'laramedia',

    /**
     * The name of the original directory.
     */
    'original_files_directory' => 'original',

    /**
     * The image cut directories.
     *
     * Don't use the 'original_files_directory' name as it will be added automatically.
     */
    'image_cut_directories' => [
        // 'thumbnail' => ['width' => 100, 'height' => 100],
    ],

    /**
     * The original image max width.
     */
    'original_image_max_width' => 2000,

    /**
     * The original image max height.
     */
    'original_image_max_height' => 2000,

    /**
     * The storage disks for the package to use.
     */
    'disks' => [
        'local' => 'Local',
        'public' => 'Public',
        // 's3' => 'Cloud',
    ],

    /**
     * The default disk.
     */
    'default_disk' => 'local',

    /**
     * The storage disk visibilities for the package to use.
     */
    'disks_visibilities' => [
        'local' => ['private' => 'Private'],
        'public' => ['public' => 'Public'],
        // 's3' => ['private' => 'Private', 'public' => 'Public'],
    ],

    /**
     * Get the disk default visibilities.
     */
    'disks_default_visibility' => [
        'local' => 'private',
        'public' => 'public',
        // 's3' => 'public',
    ],

    /**
     * The ownerships. Only change the values.
     */
    'ownerships' => [
        'mine' => 'Mine',
        'others' => 'Others',
    ],

    /**
     * The sections. Only change the values.
     */
    'sections' => [
        'active' => 'Active',
        'trash' => 'Trash',
    ],

    /**
     * The type filters.
     * 
     * You should only state filetypes mentioned in allowed_file_types,
     * except for not like types.
     */
    'type_filters' => [
        'image' => ['image/*'],
        'document' => ['pdf'],
    ],

    /**
     * The allowed file types.
     *
     * If nothing defined, all types will be allowed.
     */
    'allowed_file_types' => [
        'image/*', 'pdf',
    ],

    /**
     * If multiple file uploads should be allowed.
     */
    'allow_multiple_uploads' => true,

    /**
     * The minimum size in kilobytes that a file should be.
     */
    'min_file_size' => null,

    /**
     * The maximum size in kilobytes that a file should be.
     */
    'max_file_size' => null,

    /**
     * The minimum number of files allowed.
     */
    'min_number_of_files' => null,

    /**
     * The maximum number of files allowed.
     */
    'max_number_of_files' => null,

    /**
     * The file input name.
     */
    'file_input_name' => 'file',

    /**
     * The pagination total for the files listings page.
     */
    'pagination_total' => 45,

    /**
     * The route middlewares.
     */
    'route_middlewares' => ['web'],

    /**
     * The route prefix.
     */
    'route_prefix' => 'laramedia',

    /**
     * The route base name.
     */
    'route_as' => 'laramedia.',

    /**
     * The policies mapping.
     */
    'policies' => [
        'model' => JennosGroup\Laramedia\Models\Media::class,
        'active_listings' => null,
        'trash_listings' => null,
        'files' => null,
        'options' => null,
        'store' => null,
        'view' => null,
        'download' => null,
        'update' => null,
        'trash' => null,
        'restore' => null,
        'destroy' => null,
    ],

    /**
     * The prefix for the tables.
     */
    'table_prefix' => 'laramedia_',

    /**
     * The table names.
     */
    'table_names' => [
        'media' => 'media',
    ],

    /**
     * The view path for the listings page.
     */
    'listings_view_path' => 'listings',

];
