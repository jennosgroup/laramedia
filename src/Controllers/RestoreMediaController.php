<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Laramedia\Actions\RestoreMediaAction;

class RestoreMediaController extends Controller
{
    /**
     * Restore the resource.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function __invoke(Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['restore'])) {
            $this->authorize($policy['restore'], $media);
        }

        return (new RestoreMediaAction)->execute($media);
    }
}
