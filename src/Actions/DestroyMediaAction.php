<?php

namespace Laramedia\Actions;

use Laramedia\Models\Media;
use Laramedia\Events\FileDestroyed;

class DestroyMediaAction
{
    /**
     * Destroy the media.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function execute(Media $media): bool
    {
        $media->deleteMedia();

        event(new FileDestroyed($media));

        return $media->forceDelete();
    }
}
