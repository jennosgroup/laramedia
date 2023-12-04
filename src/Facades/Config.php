<?php

namespace LaravelFilesLibrary\Facades;

use Illuminate\Support\Facades\Facade;
use LaravelFilesLibrary\Support\Config as LaravelFilesLibraryConfig;

class Config extends Facade
{
    protected static function getFacadeAccessor()
    {
        return LaravelFilesLibraryConfig::class;
    }
}
