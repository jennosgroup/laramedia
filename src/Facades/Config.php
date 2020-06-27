<?php

namespace Laramedia\Facades;

use Illuminate\Support\Facades\Facade;
use Laramedia\Support\Config as LaramediaConfig;

class Config extends Facade
{
    protected static function getFacadeAccessor()
    {
        return LaramediaConfig::class;
    }
}
