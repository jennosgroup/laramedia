<?php

namespace Laramedia\Support;

use Laramedia\Models\Media;
use Illuminate\Support\Facades\Auth;

class Config
{
    /**
     * The config filename.
     *
     * @var string
     */
    private static string $filename = 'laramedia';

    /**
     * The storage disks.
     *
     * @return array
     */
    public static function disks(): array
    {
        return config(self::$filename.'.disk', [
            'public' => 'public',
            'private' => 'local',
        ]);
    }

    /**
     * The name of the public disk.
     *
     * @return string
     */
    public static function publicDisk(): string
    {
        return static::disks()['public'] ?? 'public';
    }

    /**
     * The name of the private disk.
     *
     * @return string
     */
    public static function privateDisk(): string
    {
        return static::disks()['private'] ?? 'local';
    }

    /**
     * The directory to store the files in.
     *
     * @return string
     */
    public static function directory(): string
    {
        return config(self::$filename.'.directory', 'laramedia');
    }

    /**
     * Check whether to have the files auto uploaded when they are selected.
     *
     * @return bool
     */
    public static function autoUpload(): bool
    {
        return config(static::$filename.'.auto_upload', true);
    }

    /**
     * Get the max file size allowed in kilobytes.
     *
     * @return int
     */
    public static function maxSize(): int
    {
        return config(self::$filename.'.max_size', 128000);
    }

    /**
     * The maximum number of files allowed per upload.
     *
     * @return int|null
     */
    public static function maxNumberOfFiles(): ?int
    {
        return config(static::$filename.'.max_number_of_files', null);
    }

    /**
     * Get the allowed file types.
     *
     * @return array
     */
    public static function allowedFileTypes()
    {
        return config(self::$filename.'.allowed_file_types', [
            'image/*', 'audio/*', 'video/*', 'pdf',
        ]);
    }

    /**
     * Get the allowed file types to use in the browser. Extensions should have the
     * the dot '.' before the extension.
     *
     * @return array
     */
    public static function browserAllowedFileTypes(): array
    {
        return array_map(function ($value) {

            // Return mimetypes as is
            if (preg_match('/\//', $value)) {
                return $value;
            }

            // Add '.' before extension
            return '.'.$value;
        }, static::allowedFileTypes());
    }

    /**
     * Get the allowed mimes.
     *
     * @return array
     */
    public static function allowedMimes()
    {
        return array_filter(static::allowedFileTypes(), function ($value) {
            if (preg_match('/\//', $value)) {
                return true;
            }
        });
    }

    /**
     * Get the allowed extensions.
     *
     * @return array
     */
    public static function allowedExtensions()
    {
        return array_filter(static::allowedFileTypes(), function ($value) {
            if (! preg_match('/\//', $value)) {
                return true;
            }
        });
    }

    /**
     * The different cuts for the images.
     *
     * @return array
     */
    public static function imageCuts(): array
    {
        return config(self::$filename.'.image_cuts', [
            'thumbnail' => ['width' => 100, 'height' => 100],
            'small' => ['width' => 300, 'height' => null],
            'medium' => ['width' => 640, 'height' => null],
            'large' => ['width' => 1024, 'height' => null],
        ]);
    }

    /**
     * Get the image cuts default to options.
     *
     * @return array
     */
    public static function imageCutsDefaultTo(): array
    {
        return config(self::$filename.'.image_cuts_default_to', []);
    }

    /**
     * The prefix for the tables.
     *
     * @return string
     */
    public static function tablePrefix(): ?string
    {
        return config(self::$filename.'.table_name_prefix', 'laramedia_');
    }

    /**
     * Get the table names.
     *
     * @return array
     */
    public static function tableNames(): array
    {
        return config(self::$filename.'.table_names', [
            'media' => 'media',
            'author' => 'authors',
        ]);
    }

    /**
     * Get the table name.
     *
     * @param  string  $key
     *
     * @return string|null
     */
    public static function tableName(string $key): ?string
    {
        $tables = self::tableNames();

        return $tables[$key] ? self::tablePrefix().$tables[$key] : null;
    }

    /**
     * The user id column.
     *
     * @return string
     */
    public static function userIdColumn(): string
    {
        return config(self::$filename.'.user_id_column', 'id');
    }

    /**
     * The user id column type.
     *
     * @return string
     */
    public static function userIdColumnType(): string
    {
        return config(self::$filename.'.user_id_column_type', 'unsignedBigInteger');
    }

    /**
     * Check whether we should use the package routes.
     *
     * @return bool
     */
    public static function useRoutes(): bool
    {
        return config(self::$filename.'.use_routes', true);
    }

    /**
     * Get the middlewares.
     *
     * @return array
     */
    public static function middlewares()
    {
        return config(static::$filename.'.middlewares', ['web', 'auth']);
    }

    /**
     * Get the route prefix.
     *
     * @return string
     */
    public static function routePrefix()
    {
        return config(static::$filename.'.route_prefix', 'admin');
    }

    /**
     * The policies.
     *
     * @return array
     */
    public static function policy()
    {
        $defaults = [
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
        ];

        $config = config(self::$filename.'.policy', []);

        return array_merge($defaults, $config);
    }

    /**
     * Check if the user can execute a policy.
     *
     * @param  string  $value
     * @param  Laramedia\Models\Model|null  $model
     *
     * @return bool
     */
    public static function can($value, $model = null)
    {
        $policies = static::policy();

        if (is_null($model)) {
            $model = $policies['model'] ?? null;
        }

        if (! array_key_exists($value, $policies) || is_null($policies[$value])) {
            return true;
        }

        return Auth::user()->can($policies[$value], $model);
    }

    /**
     * Whether to show the active bulk options.
     *
     * @return bool
     */
    public static function showActiveBulkOptions(): bool
    {
        return config(static::$filename.'.show_active_bulk_options', true);
    }

    /**
     * Whether to show the trash bulk options.
     *
     * @return bool
     */
    public static function showTrashBulkOptions(): bool
    {
        return config(static::$filename.'.show_trash_bulk_options', true);
    }

    /**
     * Whether to show the type filter.
     *
     * @return bool
     */
    public static function showTypeFilter(): bool
    {
        return config(static::$filename.'.show_type_filter', true);
    }

    /**
     * Whether to show the visibility filter.
     *
     * @return bool
     */
    public static function showVisibilityFilter(): bool
    {
        return config(static::$filename.'.show_visibility_filter', true);
    }

    /**
     * Whether to show the ownership filter.
     *
     * @return bool
     */
    public static function showOwnershipFilter(): bool
    {
        return config(static::$filename.'.show_ownership_filter', true);
    }

    /**
     * Check whether to show the active icon.
     *
     * @return bool
     */
    public static function showActiveIcon(): bool
    {
        return config(static::$filename.'.show_active_icon', true);
    }

    /**
     * Check whether to show the trash icon.
     *
     * @return bool
     */
    public static function showTrashIcon(): bool
    {
        return config(static::$filename.'.show_trash_icon', true);
    }

    /**
     * Whether to show the search filter.
     *
     * @return bool
     */
    public static function showSearchFilter(): bool
    {
        return config(static::$filename.'.show_search_filter', true);
    }

    /**
     * Check if the trash is enabled.
     *
     * @return bool
     */
    public static function trashIsEnabled(): bool
    {
        return static::trashIsDisabled() === false;
    }

    /**
     * Check if the trash is enabled.
     *
     * @return bool
     */
    public static function trashIsDisabled(): bool
    {
        return config(static::$filename.'.disable_trash', false);
    }

    /**
     * The default visibility to use.
     *
     * @return string
     */
    public static function defaultVisibility(): string
    {
        return config(static::$filename.'.default_visibility', 'private');
    }

    /**
     * Whether to hide visibility.
     *
     * @return bool
     */
    public static function hideVisibility(): bool
    {
        return config(static::$filename.'.hide_visibility', false);
    }

    /**
     * Whether to show  visibility.
     *
     * @return bool
     */
    public static function showVisibility(): bool
    {
        return static::hideVisibility() === false;
    }

    /**
     * Get the type filters.
     *
     * @return array
     */
    public static function typeFilters()
    {
        return config(static::$filename.'.type_filters', [
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
        ]);
    }

    /**
     * Get the type filters allowed.
     *
     * @return array
     */
    public static function typeFiltersAllowed(): array
    {
        return config(static::$filename.'.type_filters_allowed', [
            'image', 'audio', 'video', 'document', 'media', 'none_image',
        ]);
    }

    /**
     * Get the type filters select options.
     *
     * @return array
     */
    public static function typeFiltersAllowedOptions(): array
    {
        $results = [];

        foreach (static::typeFiltersAllowed() as $key => $value) {
            $results[$value] = ucwords(str_replace(['-', '_'], ' ', $value));
        }

        return $results;
    }

    /**
     * Get the options for the upload in the browser.
     *
     * @return string
     */
    public static function uploadOptions(): array
    {
        return [
            'autoProceed' => static::autoUpload(),
            'restrictions' => [
                'maxFileSize' => static::maxSize() * 1024,
                'maxNumberOfFiles' => static::maxNumberOfFiles(),
                'allowedFileTypes' => static::browserAllowedFileTypes(),
            ],
            'default_visibility' => static::defaultVisibility(),
            'hide_visibility' => static::hideVisibility(),
        ];
    }
}
