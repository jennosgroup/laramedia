<?php

namespace JennosGroup\Laramedia\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use JennosGroup\Laramedia\Support\Laramedia;

class CheckIfFileIsNotTooBig
{
    /**
     * Check if the file is not too big.
     */
    public static function execute(UploadedFile $file): bool
    {
        $maxSize = Laramedia::maxFileSize();
        
        if (is_null($maxSize)) {
            return true;
        }

        $input = [Laramedia::fileInputName() => $file];
        $rules = [Laramedia::fileInputName() => 'max:'.$maxSize];

        return Validator::make($input, $rules)->passes();
    }
}
