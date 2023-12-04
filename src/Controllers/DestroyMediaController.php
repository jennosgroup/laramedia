<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\JsonResponse;
use LaravelFilesLibrary\Events\FileDestroyed;
use LaravelFilesLibrary\Models\Media;

class DestroyMediaController extends Controller
{
    /**
     * Destroy resource.
     */
    public function __invoke(Media $media): JsonResponse
    {
        $media->removeFiles();

        $deleted = $media->forceDelete();

        event(new FileDestroyed($media));

        return response()->json(['destroyed' => $deleted]);
    }
}
