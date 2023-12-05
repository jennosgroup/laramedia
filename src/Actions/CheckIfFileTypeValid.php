<?php

namespace LaravelFilesLibrary\Actions;

use Illuminate\Http\UploadedFile;
use LaravelFilesLibrary\Support\Config;
use Illuminate\Support\Facades\Validator;

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

        $rules = [Config::fileInputName() => 'mimetypes:'.implode(',', Config::allowedMimeTypes())];
        $input = [Config::fileInputName() => $file];

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

        $rules = [
        	Config::fileInputName() => 'mimes:'.implode(',', Config::allowedExtensions())
        ];

        $input = [Config::fileInputName() => $file];

        return Validator::make($input, $rules)->passes();
	}
}
