<?php

namespace Laramedia\Controllers;

use Laramedia\Support\Config;

class OptionsMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        $policy = Config::policy();

        if (! is_null($policy['options'])) {
            $this->authorize($policy['options'], $media);
        }

        return Config::uploadOptions();
    }
}
