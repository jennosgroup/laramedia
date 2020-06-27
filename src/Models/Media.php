<?php

namespace Laramedia\Models;

use Illuminate\Http\File;
use Laramedia\Support\Config;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\SoftDeletes;

class Media extends Model
{
    use SoftDeletes;

    /**
     * The model cache.
     *
     * @var array
     */
    private array $cache = [];

    /**
     * The file instance.
     *
     * @var \Illuminate\Http\File
     */
    private ?File $file = null;

    /**
     * The mass assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'original_name',
        'name',
        'title',
        'alt_text',
        'caption',
        'description',
        'copyright',
        'mimetype',
        'upload_path',
        'visibility',
        'seo_title',
        'seo_keywords',
        'seo_description',
        'administrator_id',
        'authors',
        'group',
    ];

    /**
     * Get the model table name.
     *
     * @return string
     */
    public function getTable()
    {
        return Config::tableName('media');
    }

    /**
     * Get the file main mime.
     *
     * I.E application/pdf == application.
     *
     * @return string
     */
    public function getCategory(): string
    {
        if ($this->existsInCache('category')) {
            return $this->getFromCache('category');
        }

        $mimetype = explode('/', $this->mimetype);

        $this->setInCache('category', $mimetype[0]);

        return $mimetype[0];
    }

    /**
     * Get the file extension.
     *
     * @return string
     */
    public function getExtension(): string
    {
        if ($this->existsInCache('extension')) {
            return $this->getFromCache('extension');
        }

        $mimetype = explode('/', $this->mimetype);

        $this->setInCache('extension', $mimetype[1]);

        return $mimetype[1];
    }

    /**
     * Get the image sizes.
     *
     * @return array
     */
    public function getImageSizes(): array
    {
        if ($this->existsInCache('sizes')) {
            return $this->getFromCache('sizes');
        }

        $sizes = getimagesize($this->getPath());

        $sizes = ['width' => $sizes[0], 'height' => $sizes[1]];

        $this->setInCache('sizes', $sizes);

        return $sizes;
    }

    /**
     * Get the image height.
     *
     * @return int
     */
    public function getImageHeight(): int
    {
        return $this->getImageSizes()['height'];
    }

    /**
     * Get the image width.
     *
     * @return int
     */
    public function getImageWidth(): int
    {
        return $this->getImageSizes()['width'];
    }

    /**
     * Get the readable dimensions.
     *
     * @return string
     */
    public function getReadableDimensions()
    {
        return number_format($this->getImageWidth()) . 'px by ' . number_format($this->getImageHeight()) . 'px';
    }

    /**
     * Get the file size in bytes.
     *
     * @return int
     */
    public function getSize()
    {
        return $this->getFile()->getSize();
    }

    /**
     * Format the file size.
     *
     * @param  int  size  Size in bytes
     *
     * @return string
     */
    public function getReadableFilesize(): string
    {
        $size = $this->getSize();

        $bytes = 1024;
        $kilobytes = $bytes * 1024;
        $megabytes = $kilobytes * 1024;
        $gigabytes = $megabytes * 1024;
        $terabytes = $gigabytes * 1024;

        if ($size <= $bytes) {
            return $size . ' B';
        }

        if ($size > $bytes && $size <= $kilobytes) {
            return round($size / $bytes, 2) . ' KB';
        }

        if ($size > $kilobytes && $size <= $megabytes) {
            return round($size / $kilobytes, 2) . ' MB';
        }

        if ($size > $megabytes && $size <= $gigabytes) {
            return round($size / $megabytes, 2) . ' GB';
        }

        if ($size > $gigabytes) {
            return round($size / $gigabytes, 2) . ' TB';
        }
    }

    /**
     * Get the file public url.
     *
     * @param  string  $cut
     *
     * @return string|void
     */
    public function getPublicUrl(string $cut = null): ?string
    {
        if ($this->visibility == 'private') {
            return null;
        }

        $disk = Storage::disk($this->getDisk());

        if ($this->getCategory() == 'image') {
            return $disk->url($this->getRelativePath($cut));
        }

        return $disk->url($this->getRelativePath());
    }

    /**
     * Get the base 64 image url.
     *
     * @param  string  $cut
     *
     * @return string
     */
    public function getBase64Url(string $cut = null)
    {
        $contents = Storage::disk($this->getDisk())->get($this->getRelativePath($cut));
        $contents = base64_encode($contents);

        return "data:" . $this->mimetype . ";base64," . $contents;
    }

    /**
     * Get the file visibility.
     *
     * @return string
     */
    public function getVisibility()
    {
        return $this->visibility;
    }

    /**
     * Get the path that's relative to the disk.
     *
     * @param  string  $cut
     *
     * @return string
     */
    public function getRelativePath(string $cut = null): string
    {
        $path = '';
        $cuts = Config::imageCuts();
        $defaultToCuts = Config::imageCutsDefaultTo();

        if (! is_null($cut) && $cut != 'originals' && ! array_key_exists($cut, $cuts)) {
            $cut = $defaultToCuts[$cut] ?? null;
        }

        if ($directory = Config::directory()) {
            $path = $directory . '/';
        }

        if (is_null($cut)) {
            $path = $path . 'originals/';
        } else {
            $path = $path . $cut . '/';
        }

        return $path . $this->upload_path . '/' . $this->name;
    }

    /**
     * Check if the file exists.
     *
     * @param  string  $cut
     *
     * @return bool
     */
    public function exists(string $cut = null): bool
    {
        return Storage::disk($this->getDisk())
            ->exists($this->getRelativePath($cut));
    }

    /**
     * Get a File instance from the file path.
     *
     * @param  string|null  $cut
     *
     * @return \Illuminate\Http\File
     */
    public function getFile(string $cut = null)
    {
        if (is_null($this->file)) {
            $this->file = $this->getNewFileInstance($cut);
        }

        if ($this->file->getPathname() != $this->getPath()) {
            $this->file = $this->getNewFileInstance($cut);
        }

        return $this->file;
    }

    /**
     * Get the file instance.
     *
     * @param  string|null  $cut
     *
     * @return \Illuminate\Http\File
     */
    public function getNewFileInstance(string $cut = null): File
    {
        return new File($this->getPath($cut));
    }

    /**
     * Get the full path for the file.
     *
     * @param  string  $cut
     *
     * @return string
     */
    public function getPath(string $cut = null): string
    {
        $diskPath = Storage::disk($this->getDisk())
            ->getDriver()
            ->getAdapter()
            ->getPathPrefix();

        return $diskPath . $this->getRelativePath($cut);
    }

    /**
     * Get the full path for the file if it had the other visibility.
     *
     * @param  string  $cut
     *
     * @return string
     */
    public function getOtherVisibilityPath(string $cut = null): string
    {
        $diskPath = Storage::disk($this->getOtherVisibilityDisk())
            ->getDriver()
            ->getAdapter()
            ->getPathPrefix();

        return $diskPath . $this->getRelativePath($cut);
    }

    /**
     * Get the file disk.
     *
     * @return string
     */
    public function getDisk(): string
    {
        $disks = Config::disks();
        return $disks[$this->visibility];
    }

    /**
     * Get the disk that's opposite to the current visibility.
     *
     * @return string
     */
    public function getOtherVisibilityDisk(): string
    {
        if ($this->visibility == 'public') {
            return Config::privateDisk();
        }
        return Config::publicDisk();
    }

    /**
     * Move the file to the other visibility disk.
     *
     * @return void
     */
    public function moveToOtherVisibilityDisk()
    {
        if ($this->getCategory() == 'image') {
            return $this->moveImagesToOtherVisibilityDisk();
        }
        return $this->moveFileToOtherVisibilityDisk();
    }



    /**
     * Move the images to the other visibility disk.
     *
     * @return void
     */
    public function moveImagesToOtherVisibilityDisk()
    {
        $cuts = array_keys(Config::imageCuts());
        $cuts[] = 'originals';

        foreach ($cuts as $cut) {
            $file = Storage::disk($this->getDisk())
                ->get($this->getRelativePath($cut));

            Storage::disk($this->getOtherVisibilityDisk())
                ->put($this->getRelativePath($cut), $file);

            Storage::disk($this->getDisk())->delete($this->getRelativePath($cut));
        }
    }

    /**
     * Move the none image file to the other visibility disk.
     *
     * @return void
     */
    public function moveFileToOtherVisibilityDisk()
    {
        $file = Storage::disk($this->getDisk())->get($this->getRelativePath());

        Storage::disk($this->getOtherVisibilityDisk())
            ->put($this->getRelativePath(), $file);

        Storage::disk($this->getDisk())->delete($this->getRelativePath());
    }

    /**
     * Remove the files.
     *
     * @return void
     */
    public function deleteMedia()
    {
        if ($this->getCategory() == 'image') {
            return $this->deleteImages();
        }
        return $this->deleteFile();
    }

    /**
     * Delete the none image file.
     *
     * @return void
     */
    public function deleteFile()
    {
        Storage::disk($this->getDisk())->delete($this->getRelativePath());
    }

    /**
     * Delete the image files.
     *
     * @return void
     */
    public function deleteImages()
    {
        $cuts = array_keys(Config::imageCuts());
        $cuts[] = 'originals';

        foreach ($cuts as $cut) {
            Storage::disk($this->getDisk())->delete($this->getRelativePath($cut));
        }
    }

    /**
     * Check whether an item exists in cache.
     *
     * @param  string  $key
     *
     * @return bool
     */
    private function existsInCache($key): bool
    {
        return isset($this->cache[$key]);
    }

    /**
     * Get a value from cache.
     *
     * @param  string  $key
     *
     * @return mixed
     */
    private function getFromCache($key)
    {
        return $this->cache[$key] ?? null;
    }

    /**
     * Set an item in cache.
     *
     * @param  string  $key
     * @param  mixed  $value
     *
     * @return void
     */
    private function setInCache($key, $value)
    {
        $this->cache[$key] = $value;
    }
}
