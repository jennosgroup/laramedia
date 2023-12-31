<?php

namespace JennosGroup\Laramedia\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Number;
use Illuminate\Support\Facades\Storage;
use JennosGroup\Laramedia\Support\Laramedia;
use Ramsey\Uuid\Uuid;

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
     */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($media) {
            $media->uuid = Uuid::uuid4()->toString();
        });
    }

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    /**
     * Get the model table name.
     */
    public function getTable(): string
    {
        return Laramedia::tableName('media');
    }

    /**
     * Get the name.
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Get the original name.
     */
    public function getOriginalName(): string
    {
        return $this->original_name;
    }

    /**
     * Get the title.
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Get the alt text.
     */
    public function getAltText(): string
    {
        return $this->alt_text;
    }

    /**
     * Get the caption.
     */
    public function getCaption(): string
    {
        return $this->caption;
    }

    /**
     * Get the description.
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Get the mimetype.
     */
    public function getMimeType(): string
    {
        return $this->mimetype;
    }

    /**
     * Get the file main type.
     */
    public function getType(): string
    {
        return $this->file_type;
    }

    /**
     * An alias for getType()
     */
    public function getCategory(): string
    {
        return $this->getType();
    }

    /**
     * Get the file extension.
     */
    public function getExtension(): string
    {
        return $this->file_extension;
    }

    /**
     * Get the file size in bytes.
     */
    public function getSize(): int
    {
        return $this->file_size;
    }

    /**
     * Get the image sizes.
     */
    public function getImageSizes(): array
    {
        if ($this->getType() != 'image') {
            return [];
        }

        return ['width' => $this->file_width, 'height' => $this->file_height];
    }

    /**
     * Get the image height.
     */
    public function getImageHeight(): ?int
    {
        return ($this->getType() == 'image') ? $this->file_height : null;
    }

    /**
     * Get the image width.
     */
    public function getImageWidth(): ?int
    {
        return ($this->getType() == 'image') ? $this->file_width : null;
    }

    /**
     * Get the file disk.
     */
    public function getDisk(): string
    {
        return $this->disk;
    }

    /**
     * Get the file visibility.
     */
    public function getVisibility(): string
    {
        return $this->visibility;
    }

    /**
     * Get the upload path.
     */
    public function getUploadPath(): string
    {
        return $this->upload_path;
    }

    /**
     * Check if the file exists.
     */
    public function fileExists(string $cut = null): bool
    {
        return Storage::disk($this->getDisk())->exists($this->getRelativePath($cut));
    }

    /**
     * Check if the file is an image.
     */
    public function isImage(): bool
    {
        return $this->getType() === 'image';
    }

    /**
     * Check if the file type is not an image.
     */
    public function isNotImage(): bool
    {
        return ! $this->isImage();
    }

    /**
     * Get the disk path.
     *
     * NOTE:: Unreliable for cloud storages.
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
     */
    public function humanDimensions(): ?string
    {
        if ($this->getCategory() != 'image') {
            return null;
        }

        $width = Number::format($this->getImageWidth());
        $height = Number::format($this->getImageHeight());

        return $width.' x '.$height. ' pixels';
    }

    /**
     * Format the file size to human readable version.
     */
    public function humanFilesize(): string
    {
        return Number::filesize($this->getSize(), precision: 2);
    }

    /**
     * Get the path that's relative to the disk.
     */
    public function getRelativePath(string $cut = null): string
    {
        return $this->getRelativePathDirectory($cut).'/'.$this->getName();
    }

    /**
     * Get the directory path that's relative to the disk.
     */
    public function getRelativePathDirectory(string $cut = null): string
    {
        $path = '';

        if ($directory = Laramedia::directory()) {
            $path .= $directory.'/';
        }

        if (is_null($cut)) {
            $path .= Laramedia::originalFilesDirectory().'/';
        } else {
            $path .= $cut.'/';
        }

        return $path.$this->getUploadPath();
    }

    /**
     * Get the full path.
     */
    public function getFullPath(string $cut = null): string
    {
        return storage_path().'/'.$this->getRelativePath($cut);
    }

    /**
     * Get the file public url.
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
     */
    public function getBase64Url(string $cut = null): string
    {
        $contents = Storage::disk($this->getDisk())->get($this->getRelativePath($cut));
        $contents = base64_encode($contents);

        return "data:".$this->getMimeType().";base64,".$contents;
    }

    /**
     * Get the image display url. This will be the base64url if the image
     * visibility is set to private.
     */
    public function getImageDisplayUrl(string $cut = null): string
    {
        if ($this->getVisibility() == 'public') {
            return $this->getPublicUrl($cut);
        }

        return $this->getBase64Url($cut);
    }

    /**
     * Change the file's visibility
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
     */
    public function changeImageFileVisibility(string $newVisibility): bool
    {
        $cuts = array_keys(Laramedia::imageCutDirectories());

        foreach ($cuts as $cut) {
            if (! $this->fileExists($cut)) {
                continue;
            }

            Storage::disk($this->getDisk())->setVisibility(
                $this->getRelativePath($cut), $newVisibility
            );
        }

        return true;
    }

    /**
     * Move the file to a new disk.
     */
    public function moveFileToNewDisk(string $newDisk, string $oldDisk = null): bool
    {
        if ($this->getType() == 'image') {
            return $this->moveImageFileToNewDisk($newDisk, $oldDisk);
        }
        return $this->moveNoneImageFileToNewDisk($newDisk, $oldDisk);
    }

    /**
     * Move the none image file to a new disk.
     */
    public function moveNoneImageFileToNewDisk(string $newDisk, string $oldDisk = null): bool
    {
        if (is_null($oldDisk)) {
            $oldDisk = $this->getDisk();
        }

        $file = Storage::disk($oldDisk)->get($this->getRelativePath());

        if (! Storage::disk($newDisk)->exists($this->getRelativePathDirectory())) {
            Storage::disk($newDisk)->makeDirectory($this->getRelativePathDirectory(), 0775, true, true);
        }

        Storage::disk($newDisk)->put(
            $this->getRelativePath(), $file, $this->getVisibility()
        );

        Storage::disk($oldDisk)->delete($this->getRelativePath());

        return true;
    }

    /**
     * Move the image file to a new disk.
     */
    public function moveImageFileToNewDisk(string $newDisk, string $oldDisk = null): bool
    {
        if (is_null($oldDisk)) {
            $oldDisk = $this->getDisk();
        }

        $cuts = array_keys(Laramedia::imageCutDirectories());

        foreach ($cuts as $cut) {
            if (! Storage::disk($newDisk)->exists($this->getRelativePathDirectory($cut))) {
                Storage::disk($newDisk)->makeDirectory($this->getRelativePathDirectory($cut), 0775, true, true);
            }

            $file = Storage::disk($oldDisk)->get($this->getRelativePath($cut));

            if (empty($file)) {
                continue;
            }

            Storage::disk($newDisk)->put(
                $this->getRelativePath($cut), $file, $this->getVisibility()
            );

            Storage::disk($oldDisk)->delete($this->getRelativePath($cut));
        }

        return true;
    }

    /**
     * Remove the files from storage.
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
     */
    public function removeNoneImageFile(): bool
    {
        Storage::disk($this->getDisk())->delete($this->getRelativePath());
        return true;
    }

    /**
     * Delete the image files associated with the model.
     */
    public function removeImageFiles(): bool
    {
        $cuts = array_keys(Laramedia::imageCutDirectories());

        foreach ($cuts as $cut) {
            if (! $this->fileExists($cut)) {
                continue;
            }

            Storage::disk($this->getDisk())->delete($this->getRelativePath($cut));
        }

        return true;
    }
}
