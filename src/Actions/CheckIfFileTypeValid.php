<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Config;

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
        if (empty(Config::allowedMimeTypes())) {
            return true;
        }

        $input = [Config::fileInputName() => $file];
        $rules = [Config::fileInputName() => 'mimetypes:'.implode(',', Config::allowedMimeTypes())];

        return Validator::make($input, $rules)->passes();
    }

    /**
     * Validate extension.
     */
    private static function validateExtension(UploadedFile $file): bool
    {
        if (empty(Config::allowedExtensions())) {
            return true;
        }

        $input = [Config::fileInputName() => $file];
        $rules = [Config::fileInputName() => 'mimes:'.implode(',', Config::allowedExtensions())];

        return Validator::make($input, $rules)->passes();
    }
}
