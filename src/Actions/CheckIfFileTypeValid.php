<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Laramedia;

class CheckIfFileTypeValid
{
    /**
     * Check if the file is not too small.
     */
    public static function execute(UploadedFile $file): bool
    {
        if (! static::validateMimeType($file) || ! static::validateExtension($file)) {
            return false;
        }

        return true;
    }

    /**
     * Validate the mime type.
     */
    private static function validateMimeType(UploadedFile $file): bool
    {
        if (empty(Laramedia::allowedMimeTypes())) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'mimetypes:'.implode(',', Laramedia::allowedMimeTypes())];

        return Validator::make($input, $rules)->passes();
    }

    /**
     * Validate extension.
     */
    private static function validateExtension(UploadedFile $file): bool
    {
        if (empty(Laramedia::allowedExtensions())) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'mimes:'.implode(',', Laramedia::allowedExtensions())];

        return Validator::make($input, $rules)->passes();
    }
}
