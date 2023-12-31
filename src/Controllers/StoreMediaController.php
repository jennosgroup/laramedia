<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Events\FileCreated;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Resources\MediaResource;
use JennosGroup\Laramedia\Support\Config;
use JennosGroup\Laramedia\Support\Uploader;

class StoreMediaController extends Controller
{
    /**
     * Store the new resource in storage.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $response = (new Uploader($request))->handle();

        $media = $response['file'] ?? null;

        if (is_null($media)) {
            return response()->json($response);
        }

        event(new FileCreated($media));

        $response['file'] = new MediaResource($media);

        return response()->json($response);
    }
}
