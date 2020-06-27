<?php

namespace Laramedia\Actions;

use Laramedia\Models\Media;
use Laramedia\Events\FileUpdated;

class UpdateMediaAction
{
    /**
     * Execute the action of updating the media in storage.
     *
     * @param  Laramedia\Models\Media  $media
     * @param  array  $attributes
     *
     * @return Laramedia\Models\Media
     */
    public function execute(Media $media, array $attributes): Media
    {
        $changes = [];
        $originals = $media->getAttributes();

        $newVisibility = $attributes['visibility'] ?? null;

        if ($newVisibility != $media->visibility) {
            $media->moveToOtherVisibilityDisk();
        }

        $media->update($attributes);

        $media->refresh();

        foreach ($attributes as $key => $value) {
            if ($media->getAttribute($key) !== $originals[$key]) {
                $changes[$key] = $media->getAttribute($key);
            }
        }

        event(new FileUpdated($media, $changes));

        return $media;
    }
}
