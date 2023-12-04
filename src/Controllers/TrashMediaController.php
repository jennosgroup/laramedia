<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\JsonResponse;
use LaravelFilesLibrary\Events\FileTrashed;
use LaravelFilesLibrary\Events\FileDestroyed;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Support\Config;

class TrashMediaController extends Controller
{
    /**
     * Trash the resource.
     */
    public function __invoke(Media $media): JsonResponse
    {
        $delete = $media->delete();

        $media->refresh();

        event(new FileTrashed($media));

        return response()->json(['trashed' => $delete]);
    }
}
