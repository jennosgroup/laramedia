<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Events\FileDestroyed;
use JennosGroup\Laramedia\Models\Media;

class DestroyMediaController extends Controller
{
    /**
     * Destroy resource.
     */
    public function __invoke(Media $media): JsonResponse
    {
        $this->optionallyAuthorize('destroy', $media);

        $media->removeFiles();

        $deleted = $media->forceDelete();

        event(new FileDestroyed($media));

        return response()->json(['destroyed' => $deleted]);
    }
}
