<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\Request;
use LaravelFilesLibrary\Events\FileUpdated;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Resources\MediaResource;
use LaravelFilesLibrary\Support\Config;

class UpdateMediaController extends Controller
{
    /**
     * Update the resource.
     */
    public function __invoke(Request $request, Media $media): MediaResource
    {
        $oldDisk = $media->disk;
        $newDisk = $attributes['disk'] ?? null;
        $oldVisibility = $media->visibility;
        $newVisibility = $attributes['visibility'] ?? null;

        $media->fill($request->all());

        $changes = $media->getChanges();

        $media->save();

        if (! empty($newDisk) && $newDisk != $oldDisk) {
            $media->moveFileToNewDisk($newDisk, $oldDisk);
        }

        if (! empty($newVisibility) && $newVisibility != $oldVisibility) {
            $media->changeFileVisibility($newVisibility);
        }

        event(new FileUpdated($media, $changes));

        return new MediaResource($media);
    }
}
