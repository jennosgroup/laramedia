<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Laramedia;

class CheckIfFileIsNotTooSmall
{
    /**
     * Check if the file is not too small.
     */
    public static function execute(UploadedFile $file): bool
    {
        if (is_null(Laramedia::minFileSize())) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'min:'.Laramedia::minFileSize()];

        return Validator::make($input, $rules)->passes();
    }
}
