<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;

class ShowMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['view'])) {
            $this->authorize($policy['view'], $media);
        }

        return response()->file($media->getPath());
    }
}
