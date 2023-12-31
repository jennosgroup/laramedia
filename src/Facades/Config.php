<?php

namespace JennosGroup\Laramedia\Facades;

use Illuminate\Support\Facades\Facade;
use JennosGroup\Laramedia\Support\Config as LaramediaConfig;

class Config extends Facade
{
    protected static function getFacadeAccessor()
    {
        return LaramediaConfig::class;
    }
}
