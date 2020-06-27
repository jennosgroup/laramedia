<?php

namespace Laramedia\Actions;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Laramedia\Events\FileTrashed;

class TrashMediaAction
{
    /**
     * Trash the media.
     *
     * @param  Laramedia\Models\Media  $media
     *
     * @return bool
     */
    public function execute(Media $media): bool
    {
        if (Config::trashIsDisabled()) {
            return (new DestroyMediaAction)->execute($media);
        }

        $delete = $media->delete();

        $media->refresh();

        event(new FileTrashed($media));

        return $delete;
    }
}
