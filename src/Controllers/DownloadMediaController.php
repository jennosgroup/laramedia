<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;

class DownloadMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['download'])) {
            $this->authorize($policy['download'], $media);
        }

        return response()->download($media->getPath(), $media->title);
    }
}
