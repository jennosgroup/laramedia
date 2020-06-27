<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Laramedia\Actions\DestroyMediaAction;

class DestroyMediaController extends Controller
{
    /**
     * Destroy resource.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function __invoke(Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['delete'])) {
            $this->authorize($policy['delete'], $media);
        }

        return (new DestroyMediaAction)->execute($media);
    }
}
