<?php

namespace LaravelFilesLibrary\Support;

class LaravelFilesLibrary
{
	/**
	 * The directory to store the files in.
	 */
	public static string $directory = 'laravel-files-library';

	/**
	 * The name of the original directory.
	 */
	public static string $originalFilesDirectory = 'original';

	/**
	 * The image cut directories.
	 * Do not use the originalFilesDirectory name as any of the cut.
	 * It will be added automatically
	 */
	public static array $imageCutDirectories = [
		'thumbnail' => ['width' => 100, 'height' => 100],
	];

	/**
	 * The original image max width.
	 */
    public static ?int $originalImageMaxWidth = 2000;

    /**
     * The original image max height.
     */
    public static ?int $originalImageMaxHeight = 2000;

    /**
     * The type filters.
     */
    public static array $typeFilters = [];

	/**
	 * The storage disks for the package to use.
	 */
	public static array $disks = [];

	/**
	 * The default disk.
	 */
    public static ?string $defaultDisk = null;

	/**
	 * The storage disk visibilities for the package to use.
	 */
	public static array $disksVisibilities = [];

	/**
	 * Get the disk default visibilities.
	 */
    public static array $disksDefaultVisibility = [];

    /**
     * The ownerships.
     */
    public static array $ownerships = [
    	'mine' => 'Mine',
    	'others' => 'Others',
    ];

    /**
     * The pagination total for the files listings page.
     */
    public static int $paginationTotal = 90;

    /**
     * If files should be auto uploaded.
     */
    public static bool $autoUpload = true;

    /**
     * If multiple file uploads should be allowed.
     */
    public static bool $allowMultipleUploads = true;

    /**
     * The minimum size in kilobytes that a file should be.
     */
    public static ?int $minFileSize = null;

    /**
     * The maximum size in kilobytes that a file should be.
     */
    public static ?int $maxFileSize = null;

    /**
     * The minimum number of files allowed.
     */
    public static ?int $minNumberOfFiles = null;

    /**
     * The maximum number of files allowed.
     */
    public static ?int $maxNumberOfFiles = null;

    /**
     * The allowed file types.
     */
    public static array $allowedFileTypes = [];

    /**
     * The file meta for each upload.
     */
    public static array $meta = [];

    /**
     * The meta fields for each upload.
     */
    public static array $metaFields = [];

    /**
     * The file input name.
     */
    public static string $fileInputName = 'file';

    /**
     * The note to display on the uploader.
     */
    public static ?string $note = null;

    /**
     * The route middlewares.
     */
    public static array $routeMiddlewares = ['web'];

    /**
     * The route prefix.
     */
    public static string $routePrefix = 'files';

    /**
     * The route base name.
     */
    public static string $routeAs = 'lfl.';

	/**
	 * The prefix for the tables.
	 */
	public static string $tablePrefix = 'lfl_';

	/**
	 * The table names.
	 */
	public static array $tableNames = [
		'media' => 'media',
	];

	/**
	 * The app dot notation view path for the listings page.
	 */
	public static ?string $listingsViewPath = null;

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
}
