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

        // Move file to new disk incase there are fatal errors, the database is untouched.
        if (! empty($newDisk) && $newDisk != $oldDisk) {
            $media->moveFileToNewDisk($newDisk, $oldDisk);
        }

        // Change visibility incase there are fatal errors, the database is untouched.
        if (! empty($newVisibility) && $newVisibility != $oldVisibility) {
            $media->changeFileVisibility($newVisibility);
        }

        $media->fill($attributes)->save();

        event(new FileUpdated($media, $media->getChanges()));

        return new MediaResource($media);
    }
}
