<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Events\FileDestroyed;
use JennosGroup\Laramedia\Events\FileTrashed;
use JennosGroup\Laramedia\Models\Media;

class TrashMediaController extends Controller
{
    /**
     * Trash the resource.
     */
    public function __invoke(Media $media): JsonResponse
    {
        $this->optionallyAuthorize('trash', $media);

        $delete = $media->delete();

        $media->refresh();

        event(new FileTrashed($media));

        return response()->json(['trashed' => $delete]);
    }
}
