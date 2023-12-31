<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use JennosGroup\Laramedia\Events\FileUpdated;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Resources\MediaResource;

class UpdateMediaController extends Controller
{
    /**
     * Update the resource.
     */
    public function __invoke(Request $request, Media $media): MediaResource
    {
        $this->optionallyAuthorize('update', $media);

        $attributes = $request->only([
            'title', 'alt_text', 'caption', 'description', 'disk', 'visibility',
        ]);

        $oldDisk = $media->disk;
        $newDisk = $attributes['disk'] ?? null;
        $oldVisibility = $media->visibility;
        $newVisibility = $attributes['visibility'] ?? null;

        $media->fill($attributes)->save();

        if (! empty($newDisk) && $newDisk != $oldDisk) {
            $media->moveFileToNewDisk($newDisk, $oldDisk);
        }

        if (! empty($newVisibility) && $newVisibility != $oldVisibility) {
            $media->changeFileVisibility($newVisibility);
        }

        event(new FileUpdated($media, $media->getChanges()));

        return new MediaResource($media);
    }
}
