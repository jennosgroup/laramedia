<?php

namespace LaravelFilesLibrary\Actions;

use Illuminate\Http\UploadedFile;
use LaravelFilesLibrary\Support\Config;
use Illuminate\Support\Facades\Validator;

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

        $rules = [Config::fileInputName() => 'max:'.Config::maxFileSize()];
        $input = [Config::fileInputName() => $file];

        return Validator::make($input, $rules)->passes();
	}
}
