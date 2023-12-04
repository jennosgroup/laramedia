<?php

namespace LaravelFilesLibrary\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Number;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;
use LaravelFilesLibrary\Support\Config;

class Media extends Model
{
    /**
     * The mass assignable attributes.
     */
    protected $fillable = [
        'name', 'original_name', 'title', 'alt_text', 'caption', 'description', 'mimetype',
        'file_type', 'file_extension', 'file_size', 'file_width', 'file_height', 'upload_path',
        'disk', 'visibility', 'options',
    ];

    /**
     * The attributes that should be hidden for arrays.
     */
    protected $hidden = [
        'id',
    ];

    /**
     * The attributes that should be casted.
     */
    protected $casts = [
        'options' => 'array',
    ];

    /**
     * The model's boot method.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($media) {
            $media->uuid = Uuid::uuid4()->toString();
        });
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'uuid';
    }

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
     * Get the name.
     * 
     * @return string|null
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Get the original name.
     * 
     * @return string|null
     */
    public function getOriginalName(): string
    {
        return $this->original_name;
    }

    /**
     * Get the title.
     * 
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * Get the alt text.
     * 
     * @return string|null
     */
    public function getAltText(): ?string
    {
        return $this->alt_text;
    }

    /**
     * Get the caption.
     * 
     * @return string|null
     */
    public function getCaption(): ?string
    {
        return $this->caption;
    }

    /**
     * Get the description.
     * 
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Get the mimetype.
     * 
     * @return string
     */
    public function getMimeType(): string
    {
        return $this->mimetype;
    }

    /**
     * Get the file main type.
     * 
     * @return string
     */
    public function getType(): string
    {
        return $this->file_type;
    }

    /**
     * An alias for getType()
     *
     * @return string
     */
    public function getCategory(): string
    {
        return $this->getType();
    }

    /**
     * Get the file extension.
     *
     * @return string
     */
    public function getExtension(): string
    {
        return $this->file_extension;
    }    

    /**
     * Get the file size in bytes.
     *
     * @return int
     */
    public function getSize(): int
    {
        return $this->file_size;
    }

    /**
     * Get the image sizes.
     *
     * @return array
     */
    public function getImageSizes(): array
    {
        if ($this->getCategory() != 'image') {
            return [];
        }

        return ['width' => $this->file_width, 'height' => $this->file_height];
    }

    /**
     * Get the image height.
     *
     * @return int|null
     */
    public function getImageHeight(): ?int
    {
        return ($this->getCategory() == 'image') ? $this->file_height : null;
    }

    /**
     * Get the image width.
     *
     * @return int|null
     */
    public function getImageWidth(): ?int
    {
        return ($this->getCategory() == 'image') ? $this->file_width : null;
    }

    /**
     * Get the file disk.
     *
     * @return string
     */
    public function getDisk(): string
    {
        return $this->disk;
    }

    /**
     * Get the file visibility.
     *
     * @return string
     */
    public function getVisibility(): string
    {
        return $this->visibility;
    }

    /**
     * Get the upload path.
     * 
     * @return string
     */
    public function getUploadPath(): string
    {
        return $this->upload_path;
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
        return Storage::disk($this->getDisk())->exists($this->getRelativePath($cut));
    }

    /**
     * Check if the file is an image.
     *
     * @return bool
     */
    public function isImage(): bool
    {
        return $this->getType() === 'image';
    }

    /**
     * Check if the file type is not an image.
     *
     * @return bool
     */
    public function isNotImage(): bool
    {
        return ! $this->isImage();
    }

    /**
     * Get the disk path.
     *
     * NOTE:: Unreliable for cloud storages.
     *
     * @return string
     */
    public function getDiskPath(): ?string
    {
        return Storage::disk($this->getDisk())
            ->getDriver()
            ->getAdapter()
            ->getPathPrefix();
    }

    /**
     * Get the readable dimensions.
     *
     * @return string|null
     */
    public function humanDimensions(): ?string
    {
        if ($this->getCategory() != 'image') {
            return null;
        }

        $width = Number::format($this->getImageWidth();
        $height = Number::format($this->getImageHeight();

        return $width.' px by '.$height. 'px';
    }

    /**
     * Format the file size to human readable version.
     *
     * @return string
     */
    public function humanFilesize(): string
    {
        return Number::toFileSize($this->getSize(), precision: 2);
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

        if ($directory = Config::directory()) {
            $path = $directory.'/';
        }

        if (! is_null($cut)) {
            $path = $path.$cut.'/';
        }

        return $path.$this->getUploadPath().'/'.$this->name;
    }

    /**
     * Get the file public url.
     *
     * @param  string  $cut
     *
     * @return string|null
     */
    public function getPublicUrl(string $cut = null): ?string
    {
        if ($this->getVisibility() == 'private') {
            return null;
        }

        return Storage::disk($this->getDisk())->url($this->getRelativePath($cut));
    }

    /**
     * Get the base 64 image url.
     *
     * @param  string  $cut
     *
     * @return string
     */
    public function getBase64Url(string $cut = null): string
    {
        $contents = Storage::disk($this->getDisk())->get($this->getRelativePath($cut));
        $contents = base64_encode($contents);

        return "data:".$this->mimetype.";base64,".$contents;
    }

    /**
     * Change the file's visibility
     *
     * @param  string  $newVisibility
     *
     * @return void
     */
    public function changeFileVisibility(string $newVisibility): bool
    {
        if ($this->getType() == 'image') {
            return $this->changeImageFileVisibility($newVisibility);
        }

        return $this->changeNoneImageFileVisibility($newVisibility);
    }

    /**
     * Change the file's visibility
     *
     * @param  string  $newVisibility
     *
     * @return bool
     */
    public function changeNoneImageFileVisibility(string $newVisibility): bool
    {
        Storage::disk($this->getDisk())->setVisibility(
            $this->getRelativePath(), $newVisibility
        );

        return true;
    }

    /**
     * Change the image visibility
     *
     * @param  string  $newVisibility
     *
     * @return void
     */
    public function changeImageFileVisibility(string $newVisibility): bool
    {
        $cuts = array_keys(Config::imageCutDirectories());

        foreach ($cuts as $cut) {
            Storage::disk($this->getDisk())->setVisibility(
                $this->getRelativePath($cut), $newVisibility
            );
        }

        return true;
    }

    /**
     * Move the file to a new disk.
     *
     * @param  string  $newDisk
     *
     * @return bool
     */
    public function moveFileToNewDisk(string $newDisk): bool
    {
        if ($this->getType() == 'image') {
            return $this->moveImageFileToNewDisk($newDisk);
        }
        return $this->moveNoneImageFileToNewDisk($newDisk);
    }

    /**
     * Move the none image file to a new disk.
     *
     * @param  string  $newDisk
     *
     * @return bool
     */
    public function moveNoneImageFileToNewDisk(string $newDisk): bool
    {
        $oldDisk = $this->getDisk();
        $file = Storage::disk($oldDisk)->get($this->getRelativePath());

        Storage::disk($newDisk)->put(
            $this->getRelativePath(), $file, $this->getVisibility()
        );

        Storage::disk($oldDisk)->delete($this->getRelativePath());

        return true;
    }

    /**
     * Move the image file to a new disk.
     *
     * @param  string  $newDisk
     *
     * @return bool
     */
    public function moveImageFileToNewDisk(string $newDisk): bool
    {
        $oldDisk = $this->getDisk();
        $cuts = array_keys(Config::imageCutDirectories());

        foreach ($cuts as $cut) {
            $file = Storage::disk($oldDisk)->get($this->getRelativePath($cut));

            Storage::disk($newDisk)->put(
                $this->getRelativePath($cut), $file, $this->getVisibility()
            );

            Storage::disk($oldDisk)->delete($this->getRelativePath($cut));
        }

        return true;
    }

    /**
     * Remove the files from storage.
     *
     * @return bool
     */
    public function removeFiles(): bool
    {
        if ($this->getType() == 'image') {
            return $this->removeImageFiles();
        }
        return $this->removeNoneImageFile();
    }

    /**
     * Delete the none image file associated with the model.
     *
     * @return bool
     */
    public function removeNoneImageFile(): void
    {
        Storage::disk($this->getDisk())->delete($this->getRelativePath());
        return true;
    }

    /**
     * Delete the image files associated with the model.
     *
     * @return bool
     */
    public function removeImageFiles(): bool
    {
        $cuts = array_keys(Config::imageCutDirectories());

        foreach ($cuts as $cut) {
            Storage::disk($this->getDisk())->delete($this->getRelativePath($cut));
        }

        return true;
    }
}
