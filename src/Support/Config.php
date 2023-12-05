<?php

namespace LaravelFilesLibrary\Support;

class Config
{
	/**
	 * The directory to store the files in.
	 */
	public static function directory(): string
	{
		return LaravelFilesLibrary::$directory;
	}

    /**
     * The original files directory.
     */
    public static function originalFilesDirectory(): string
    {
        return LaravelFilesLibrary::$originalFilesDirectory;
    }

    /**
     * Get the image cut directories.
     */
    public static function imageCutDirectories(): array
    {
        $directories = LaravelFilesLibrary::$imageCutDirectories;
        
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
        return LaravelFilesLibrary::$originalImageMaxWidth;
    }

    /**
     * Get the max height that the original image should be.
     */
    public static function originalImageMaxHeight(): ?int
    {
        return LaravelFilesLibrary::$originalImageMaxHeight;
    }

    /**
     * Get the disks.
     */
    public static function disks(): array
    {
        return LaravelFilesLibrary::$disks;
    }

    /**
     * Get the name of the disks that are valid.
     */
    public static function getValidDisks(): array
    {
        return array_keys(static::getDisks());
    }

    /**
     * Get the default disk.
     */
    public static function defaultDisk(): string
    {
        return LaravelFilesLibrary::$defaultDisk;
    }

    /**
     * Get the disk visibilities.
     */
    public static function disksVisibilities(): array
    {
        return LaravelFilesLibrary::$disksVisibilities;
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
    public function disksDefaultVisibility(): array
    {
        return LaravelFilesLibrary::$disksDefaultVisibility;
    }

    /**
     * Get the ownerships.
     */
    public static function ownerships(): array
    {
        return LaravelFilesLibrary::$ownerships;
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
        return LaravelFilesLibrary::$typeFilters;
    }

    /**
     * Get the pagination total.
     */
    public static function paginationTotal(): int
    {
        return LaravelFilesLibrary::$paginationTotal;
    }

    /**
     * Whether files should be automatically uploaded.
     */
    public static function autoUpload(): bool
    {
        return LaravelFilesLibrary::$autoUpload;
    }

    /**
     * Whether to allow multiple uploads.
     */
    public static function allowMultipleUploads(): bool
    {
        return LaravelFilesLibrary::$allowMultipleUploads;
    }

    /**
     * Get the minimum file size allowed.
     */
    public static function minFileSize(): ?int
    {
        return LaravelFilesLibrary::$minFileSize;
    }

    /**
     * Get the maximum file size allowed.
     */
    public static function maxFileSize(): ?int
    {
        return LaravelFilesLibrary::$maxFileSize;
    }

    /**
     * Get the minimum number of files allowed.
     */
    public static function minNumberOfFiles(): ?int
    {
        return LaravelFilesLibrary::$minNumberOfFiles;
    }

    /**
     * Get the maximum number of files allowed.
     */
    public static function maxNumberOfFiles(): ?int
    {
        return LaravelFilesLibrary::$maxNumberOfFiles;
    }

    /**
     * Get the allowed file types.
     */
    public static function allowedFileTypes(): array
    {
        return LaravelFilesLibrary::$allowedFileTypes;
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
        return LaravelFilesLibrary::$meta;
    }

    /**
     * Get the meta fields for each upload.
     */
    public static function metaFields(): array
    {
        return LaravelFilesLibrary::$metaFields;
    }

    /**
     * Get the file input name.
     */
    public static function fileInputName(): string
    {
        return LaravelFilesLibrary::$fileInputName;
    }

    /**
     * Get the note for the uploader.
     */
    public static function note(): ?string
    {
        return LaravelFilesLibrary::$note;
    }

    /**
     * The route middlewares.
     */
    public static function routeMiddlewares(): array
    {
        return LaravelFilesLibrary::$routeMiddlewares;
    }

    /**
     * The route prefix.
     */
    public static function routePrefix(): string
    {
        return LaravelFilesLibrary::$routePrefix;
    }

    /**
     * The route name.
     */
    public static function routeAs(): string
    {
        return LaravelFilesLibrary::$routeAs;
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
     * Get the view route name.
     */
    public static function viewRouteName(): string
    {
        return static::routeAs().'view';
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
     * The prefix for all our tables.
     */
    public static function tablePrefix(): string
    {
        return LaravelFilesLibrary::$tablePrefix;
    }

    /**
     * The names for all our tables.
     */
    public static function tableNames(): array
    {
        return LaravelFilesLibrary::$tableNames;
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
        return [];
    }
}
