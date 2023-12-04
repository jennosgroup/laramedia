<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use LaravelFilesLibrary\Events\FileCreated;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Resources\MediaResource;
use LaravelFilesLibrary\Support\Config;
use LaravelFilesLibrary\Support\Uploader;

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
