<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Storage Disk
    |--------------------------------------------------------------------------
    |
    | The storage disk that the uploads should be added to. The public disk is
    | intended for uploads that can be seen by the anyone, while the private
    | disk is intended for uploads that should not be accessible by anyone.
    |
    | The value of these keys must be one of the disks defined in your laravel
    | config/filesystems.php file.
    |
    */

    'disk' => [
        'public' => 'public',
        'private' => 'local',
    ],

    /*
    |--------------------------------------------------------------------------
    | File Upload Directory
    |--------------------------------------------------------------------------
    |
    | The name of the directory that will contain the uploads. This directory will
    | be relative to the storage disk.
    |
    */

    'directory' => 'laramedia',

    /*
    |--------------------------------------------------------------------------
    | Auto Upload
    |--------------------------------------------------------------------------
    |
    | Whether to auto upload the files when they are selected.
    |
    */

    'auto_upload' => true,

    /*
    |--------------------------------------------------------------------------
    | File Maximum Size
    |--------------------------------------------------------------------------
    |
    | The maximum file size in kilobytes, that is allowed for an upload.
    | Defaults to 128 MB. This
    |
    */

    'max_size' => 128000,

    /*
    |--------------------------------------------------------------------------
    | Maximum Number of Files
    |--------------------------------------------------------------------------
    |
    | The maximum number of files allowed per allowed. Set to null to allow
    | an unlimited amount.
    |
    */

    'max_number_of_files' => null,

    /*
    |--------------------------------------------------------------------------
    | File Type Whitelist
    |--------------------------------------------------------------------------
    |
    | The file mimetypes and extensions that are allowed for uploads. You can
    | specify the full mimetype, the mimetype wildcard or the extension.
    |
    */

    'allowed_file_types' => [
        'image/*', 'audio/*', 'video/*', 'pdf',
    ],

    /*
    |--------------------------------------------------------------------------
    | Image Cuts
    |--------------------------------------------------------------------------
    |
    | The different type of cuts to slice images into when they are uploaded.
    |
    | The cut for the image will be stored in a folder which is named after the
    | type of cut. The name of the cut will also be used to retrieve the cut
    | image when generating the file path.
    |
    | All images will have an 'originals' cut by default that cannot be
    | over-ridden. The image will be stored there in it's original form and all
    | image file path will default to this unless a cut is specified.
    |
    | A 'thumbnail', 'small', 'medium' and 'large' cut will be set and cannot
    | be removed. However, you are allowed to customize the width and height of
    } these cuts to your liking.
    |
    | When both the width and height are defined, the image will be cut using a
    | 'best fit' algorithm to prevent pixelation of images. If one of the width
    | or height value is set to null, the image will be proportioned using the
    | original aspect ratio, using the explicity defined side as the base.
    | If both width and height is set to null, that cut will be ignored.
    |
    */

    'image_cuts' => [
        'thumbnail' => ['width' => 100, 'height' => 100],
        'small' => ['width' => 300, 'height' => null],
        'medium' => ['width' => 640, 'height' => null],
        'large' => ['width' => 1024, 'height' => null],
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Image Cut To
    |--------------------------------------------------------------------------
    |
    | The cut to default to if another cut doesn't exist. This is useful if you
    | previously defined a cut that has since been changed.
    |
    | i.e 'large' => 'largest' will route all calls to large to fetch from cuts
    | that are now in the largest category.
    |
    */

    'image_cuts_default_to' => [

    ],

    /*
    |--------------------------------------------------------------------------
    | Table Name Prefix
    |--------------------------------------------------------------------------
    |
    | The prefix for the table names.
    |
    */

    'table_name_prefix' => 'laramedia_',

    /*
    |--------------------------------------------------------------------------
    | Table Names
    |--------------------------------------------------------------------------
    |
    | The names for the package tables.
    |
    */

    'table_names' => [
        'media' => 'media',
        'author' => 'authors',
    ],

    /*
    |--------------------------------------------------------------------------
    | User Id Column
    |--------------------------------------------------------------------------
    |
    | The name of the user model id column.
    |
    */

    'user_id_column' => 'id',

    /*
    |--------------------------------------------------------------------------
    | User Id Column Type
    |--------------------------------------------------------------------------
    |
    | The column type for the user model id.
    |
    */

    'user_id_column_type' => 'unsignedBigInteger',

    /*
    |--------------------------------------------------------------------------
    | Use Routes
    |--------------------------------------------------------------------------
    |
    | Whether to register the package routes.
    |
    */

    'use_routes' => true,

    /*
    |--------------------------------------------------------------------------
    | The middlewares to use on the routes
    |--------------------------------------------------------------------------
    |
    | The route middlewares.
    |
    */

    'middlewares' => [
        'web', 'auth',
    ],

    /*
    |--------------------------------------------------------------------------
    | Route Prefix
    |--------------------------------------------------------------------------
    |
    | The route prefix
    |
    */

    'route_prefix' => 'admin',

    /*
    |--------------------------------------------------------------------------
    | Policy
    |--------------------------------------------------------------------------
    |
    | The policies to use before carrying out certain action. Anything that's
    | defaulted to null will be ignored and the policy will pass..
    |
    | 'active_section' allows you to view the active files.
    | 'trash_section' allows you to view the trach files.
    | 'create' allows you to upload file(s).
    | 'view' allows you to view a file.
    | 'download' allows you to download a file.
    | 'update' allows you to update a file.
    | 'trash' allows you to trash a file.
    | 'restore' allows you to restore a trashed file.
    | 'delete' allows you to delete a file.
    | 'files' allows you to view the media files.
    | 'options' allows you to get the config options.
    | 'trash_bulk' allows you to bulk trash items.
    | 'restore_bulk' allows you to bulk restore trashed items.
    | 'delete_bulk' allows you to permanently bulk delete items.
    */

    'policy' => [
        'model' => Laramedia\Models\Media::class,
        'active_section' => null,
        'trash_section' => null,
        'create' => null,
        'view' => null,
        'download' => null,
        'update' => null,
        'trash' => null,
        'restore' => null,
        'delete' => null,
        'files' => null,
        'options' => null,
        'trash_bulk' => null,
        'restore_bulk' => null,
        'delete_bulk' => null,
    ],

    /*
    |--------------------------------------------------------------------------
    | Active Bulk Options
    |--------------------------------------------------------------------------
    |
    | Whether to show the active view bulk options.
    |
    */

    'show_active_bulk_options' => true,

   /*
    |--------------------------------------------------------------------------
    | Trash Bulk Options
    |--------------------------------------------------------------------------
    |
    | Whether to show the trash view bulk options.
    |
    */

    'show_trash_bulk_options' => true,

    /*
    |--------------------------------------------------------------------------
    | Show Type Filter
    |--------------------------------------------------------------------------
    |
    | Whether to show the type filter select options.
    |
    */

    'show_type_filter' => true,

    /*
    |--------------------------------------------------------------------------
    | Show Visibility Filter
    |--------------------------------------------------------------------------
    |
    | Whether to show the visibility filter select options.
    |
    */

    'show_visibility_filter' => true,

    /*
    |--------------------------------------------------------------------------
    | Show Ownership Filter
    |--------------------------------------------------------------------------
    |
    | Whether to show the ownership filter select options.
    |
    */

    'show_ownership_filter' => true,

    /*
    |--------------------------------------------------------------------------
    | Active Icon
    |--------------------------------------------------------------------------
    |
    | Whether to show the active icon. This does not disable the view.
    |
    */

    'show_active_icon' => true,

    /*
    |--------------------------------------------------------------------------
    | Trash Icon
    |--------------------------------------------------------------------------
    |
    | Whether to show the trash icon. This does not disable the trash view.
    |
    */

    'show_trash_icon' => true,

    /*
    |--------------------------------------------------------------------------
    | Show Search Filter
    |--------------------------------------------------------------------------
    |
    | Whether to show the search filter select options.
    |
    */

    'show_search_filter' => true,

    /*
    |--------------------------------------------------------------------------
    | Disable Trash
    |--------------------------------------------------------------------------
    |
    | Whether to disable the trash feature.
    |
    */

    'disable_trash' => false,

    /*
    |--------------------------------------------------------------------------
    | Default Visibility
    |--------------------------------------------------------------------------
    |
    | The default visibility of a file upload.
    |
    */

    'default_visibility' => 'private',

    /*
    |--------------------------------------------------------------------------
    | Hide Visibility
    |--------------------------------------------------------------------------
    |
    | Whether to hide the visibility selection throughout the package.
    |
    */

    'hide_visibility' => false,

    /*
    |--------------------------------------------------------------------------
    | Type Filters
    |--------------------------------------------------------------------------
    |
    | The media types to chose from when that category is selected. Do not change
    | the 'type_filters' keys.
    |
    | Specify either the mime or the extension i.e 'image/*' or 'png'
    | or a combination of both. If you want to specify mime wildcard, ensure
    | to append '/*' to the type.
    |
    */

    'type_filters' => [
        'image' => [
            'image/*',
        ],
        'video' => [
            'video/*',
        ],
        'audio' => [
            'audio/*',
        ],
        'document' => [
            'pdf',
        ],
        'media' => [
            'audio/*', 'video/*',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Type Filters Allowed
    |--------------------------------------------------------------------------
    |
    | The type filters that will show up for the user to filter their search.
    |
    | Accepted 'image', 'audio', 'video', 'document', 'media', 'none_image'.
    |
    */

    'type_filters_allowed' => [
        'image', 'audio', 'video', 'document', 'media', 'none_image',
    ],

];
