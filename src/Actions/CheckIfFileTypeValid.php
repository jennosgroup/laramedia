<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use JennosGroup\Laramedia\Support\Laramedia;

class CheckIfFileTypeValid
{
    /**
     * Check if the file is not too small.
     */
    public static function execute(UploadedFile $file): bool
    {
        if (static::validateMimeType($file)) {
            return true;
        }

        if (static::validateExtension($file)) {
            return true;
        }

        return false;
    }

    /**
     * Validate the mime type.
     */
    private static function validateMimeType(UploadedFile $file): bool
    {
        $mimetypes = Laramedia::allowedMimeTypes();
 
        if (empty($mimetypes)) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'mimetypes:'.implode(',', $mimetypes)];

        return Validator::make($input, $rules)->passes();
    }

    /**
     * Validate extension.
     */
    private static function validateExtension(UploadedFile $file): bool
    {
        $extensions = Laramedia::allowedExtensions();

        if (empty($extensions)) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'mimes:'.implode(',', $extensions)];

        return Validator::make($input, $rules)->passes();
    }
}
