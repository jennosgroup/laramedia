<?php

namespace Laramedia\Actions;

use Laramedia\Models\Media;
use Laramedia\Events\FileRestored;

class RestoreMediaAction
{
    /**
     * Restore the media.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function execute(Media $media): bool
    {
        $restore = $media->restore();

        $media->refresh();

        event(new FileRestored($media));

        return $restore;
    }
}
