<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Events\FileDestroyed;
use JennosGroup\Laramedia\Events\FileTrashed;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Support\Config;

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
