<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Config;

class CheckIfFileIsNotTooBig
{
    /**
     * Check if the file is not too big.
     */
    public static function execute(UploadedFile $file): bool
    {
        if (is_null(Config::maxFileSize())) {
            return true;
        }

        $input = [Config::fileInputName() => $file];
        $rules = [Config::fileInputName() => 'max:'.Config::maxFileSize()];

        return Validator::make($input, $rules)->passes();
    }
}
