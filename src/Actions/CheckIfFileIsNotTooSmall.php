<?php

namespace LaravelFilesLibrary\Actions;

use Illuminate\Http\UploadedFile;
use LaravelFilesLibrary\Support\Config;
use Illuminate\Support\Facades\Validator;

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

        $rules = [Config::fileInputName() => 'min:'.Config::minFileSize()];
        $input = [Config::fileInputName() => $file];

        return Validator::make($input, $rules)->passes();
	}
}
