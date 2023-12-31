<?php

namespace JennosGroup\Laramedia\Support;

use Illuminate\Http\UploadedFile;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;

class ResizeFile
{
    /**
     * Resize the file.
     */
    public function execute(UploadedFile $file, array $data): Image
    {
        $image = (new ImageManager())->make($file);
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if ($this->hasWidthOnly($data)) {
            return $this->resizeToWidthOnly($image, $width);
        }

        if ($this->hasHeightOnly($data)) {
            return $this->resizeToHeightOnly($image, $height);
        }

        if ($this->hasWidthAndHeightOnly($data)) {
            return $this->resizeToWidthAndHeight($image, $width, $height);
        }

        if ($this->hasWidthAndMaxWidthOnly($data)) {
            return $this->resizeToWidthOrMaxWidth($image, $width, $maxWidth);
        }

        if ($this->hasHeightAndMaxHeightOnly($data)) {
            return $this->resizeToHeightOrMaxHeight($image, $height, $maxHeight);
        }

        if ($this->hasWidthAndMaxHeightOnly($data)) {
            return $this->resizeToWidthConstrainingToMaxHeight($image, $width, $maxHeight);
        }

        if ($this->hasHeightAndMaxWidthOnly($data)) {
            return $this->resizeToHeightConstrainingToMaxWidth($image, $height, $maxWidth);
        }

        if ($this->hasWidthAndHeightAndMaxWidthOnly($data)) {
            return $this->resizeToWidthAndHeightConstrainingToMaxWidth($image, $width, $height, $maxWidth);
        }

        if ($this->hasWidthAndHeightAndMaxHeightOnly($data)) {
            return $this->resizeToWidthAndHeightConstrainingToMaxHeight($image, $width, $height, $maxHeight);
        }

        if ($this->hasWidthAndHeightAndMaxWidthAndMaxHeight($data)) {
            return $this->resizeToWidthAndHeightConstrainingToMaxWidthAndMaxHeight($image, $width, $height, $maxWidth, $maxHeight);
        }

        if ($this->hasMaxWidthOnly($data)) {
            return $this->resizeToMaxWidthOnly($image, $maxWidth);
        }

        if ($this->hasMaxHeightOnly($data)) {
            return $this->resizeToMaxHeightOnly($image, $maxHeight);
        }

        if ($this->hasMaxWidthAndMaxHeightOnly($data)) {
            return $this->resizeToMaxWidthAndMaxHeightOnly($image, $maxWidth, $maxHeight);
        }

        return $image;
    }

    /**
     * Check if only the width was given.
     */
    protected function hasWidthOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && is_null($height) && is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if only the height was given.
     */
    protected function hasHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($height) && is_null($width) && is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if only the width and height was given.
     */
    protected function hasWidthAndHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && ! is_null($height) && is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a width and max width only given.
     */
    protected function hasWidthAndMaxWidthOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && is_null($height) && ! is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a height and max height only given.
     */
    protected function hasHeightAndMaxHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (is_null($width) && ! is_null($height) && is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a width and max height only given.
     */
    protected function hasWidthAndMaxHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && is_null($height) && is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a height and max width only given.
     */
    protected function hasHeightAndMaxWidthOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (is_null($width) && ! is_null($height) && ! is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a width, height and max width only given.
     */
    protected function hasWidthAndHeightAndMaxWidthOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && ! is_null($height) && ! is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a width, height and max height only given.
     */
    protected function hasWidthAndHeightAndMaxHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && ! is_null($height) && is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a width, height, max width and max height only given.
     */
    protected function hasWidthAndHeightAndMaxWidthAndMaxHeight(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (! is_null($width) && ! is_null($height) && ! is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a max width only given.
     */
    protected function hasMaxWidthOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (is_null($width) && is_null($height) && ! is_null($maxWidth) && is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a max height only given.
     */
    protected function hasMaxHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (is_null($width) && is_null($height) && is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Check if a max width and max height only given.
     */
    protected function hasMaxWidthAndMaxHeightOnly(array $data): bool
    {
        $width = $data['width'] ?? null;
        $height = $data['height'] ?? null;
        $maxWidth = $data['max_width'] ?? null;
        $maxHeight = $data['max_height'] ?? null;

        if (is_null($width) && is_null($height) && ! is_null($maxWidth) && ! is_null($maxHeight)) {
            return true;
        }

        return false;
    }

    /**
     * Resize the image when only a width is given.
     */
    protected function resizeToWidthOnly(Image $image, int $width): Image
    {
        return $image->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when only a height is given.
     */
    protected function resizeToHeightOnly(Image $image, int $height): Image
    {
        return $image->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when a width and height is given.
     */
    protected function resizeToWidthAndHeight(Image $image, int $width, int $height): Image
    {
        return $image->fit($width, $height);
    }

    /**
     * Resize the image when a width and max width is given.
     */
    protected function resizeToWidthOrMaxWidth(Image $image, int $width, int $maxWidth): Image
    {
        if ($width > $maxWidth) {
            $width = $maxWidth;
        }

        return $image->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when a height and max height is given.
     */
    protected function resizeToHeightOrMaxHeight(Image $image, int $height, int $maxHeight): Image
    {
        if ($height > $maxheight) {
            $height = $maxheight;
        }

        return $image->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when a width and max height is given.
     */
    protected function resizeToWidthConstrainingToMaxHeight(Image $image, int $width, int $maxHeight): Image
    {
        $ratio = $this->getAspectRatio($image->width(), $image->height());

        if ($width / $ratio > $maxHeight) {
            $width = $maxHeight * $ratio;
        }

        return $image->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when a height and max width is given.
     */
    protected function resizeToHeightConstrainingToMaxWidth(Image $image, int $height, int $maxWidth): Image
    {
        $ratio = $this->getAspectRatio($image->width(), $image->height());

        if ($height * $ratio > $maxWidth) {
            $height = $maxWidth / $ratio;
        }

        return $image->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when a width, height and maxwidth is given.
     */
    protected function resizeToWidthAndHeightConstrainingToMaxWidth(Image $image, int $width, int $height, int $maxWidth): Image
    {
        $ratio = $this->getAspectRatio($width, $height);

        if ($width > $maxWidth) {
            $width = $maxWidth;
            $height = $maxWidth / $ratio;
        }

        return $image->fit($width, $height);
    }

    /**
     * Resize the image when a width, height and max height is given.
     */
    protected function resizeToWidthAndHeightConstrainingToMaxHeight(Image $image, int $width, int $height, int $maxHeight): Image
    {
        $ratio = $this->getAspectRatio($width, $height);

        if ($height > $maxHeight) {
            $height = $maxHeight;
            $width = $maxHeight * $ratio;
        }

        return $image->fit($width, $height);
    }

    /**
     * Resize the image when a width and max height is given.
     */
    protected function resizeToWidthAndHeightConstrainingToMaxWidthAndMaxHeight(Image $image, int $width, int $height, int $maxWidth, int $maxHeight): Image
    {
        $ratio = $this->getAspectRatio($width, $height);

        if ($width > $maxWidth) {
            $width = $maxWidth;
        }

        if ($height > $maxHeight) {
            $height = $maxHeight;
        }

        if ($width / $ratio > $height) {
            $width = $height * $ratio;
        }

        if ($height * $ratio > $width) {
            $height = $height / $ratio;
        }

        return $image->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when we have a max width only.
     */
    protected function resizeToMaxWidthOnly(Image $image, int $maxWidth): Image
    {
        $width = $image->width();

        if ($width > $maxWidth) {
            $width = $maxWidth;
        }

        return $image->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when we have a max height only.
     */
    protected function resizeToMaxHeightOnly(Image $image, int $maxHeight): Image
    {
        $height = $image->height();

        if ($height > $maxHeight) {
            $height = $maxHeight;
        }

        return $image->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Resize the image when we have a max width and max height defined.
     */
    protected function resizeToMaxWidthAndMaxHeightOnly(Image $image, int $maxWidth, int $maxHeight): Image
    {
        $width = $image->width();
        $height = $image->height();

        $ratio = $this->getAspectRatio($width, $height);

        if ($width > $maxWidth) {
            $width = $maxWidth;
        }

        if ($height > $maxHeight) {
            $height = $maxHeight;
        }

        if ($width / $ratio > $height) {
            $width = $height * $ratio;
        }

        if ($height * $ratio > $width) {
            $height = $height / $ratio;
        }

        return $image->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
    }

    /**
     * Get the aspect ratio.
     */
    protected function getAspectRatio(int $width, int $height): float
    {
        return $width / $height;
    }
}
