<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\JsonResponse;
use LaravelFilesLibrary\Events\FileRestored;
use LaravelFilesLibrary\Models\Media;

class RestoreMediaController extends Controller
{
    /**
     * Restore the resource.
     */
    public function __invoke(Media $media): JsonResponse
    {
        $restore = $media->restore();

        $media->refresh();

        event(new FileRestored($media));

        return response()->json(['restored' => $restore]);
    }
}
