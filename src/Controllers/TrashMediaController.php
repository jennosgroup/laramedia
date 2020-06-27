<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Laramedia\Resources\MediaResource;
use Laramedia\Actions\TrashMediaAction;

class TrashMediaController extends Controller
{
    /**
     * Trash the resource.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function __invoke(Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['trash'])) {
            $this->authorize($policy['trash'], $media);
        }

        return (new TrashMediaAction)->execute($media);
    }
}
