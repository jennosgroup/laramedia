<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Config;

class CheckIfFileIsNotTooSmall
{
    /**
     * Check if the file is not too small.
     */
    public static function execute(UploadedFile $file): bool
    {
        if (is_null(Config::minFileSize())) {
            return true;
        }

        $input = [Config::fileInputName() => $file];
        $rules = [Config::fileInputName() => 'min:'.Config::minFileSize()];

        return Validator::make($input, $rules)->passes();
    }
}
