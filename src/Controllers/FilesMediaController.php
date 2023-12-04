<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Resources\MediaResource;
use LaravelFilesLibrary\Support\Finder;

class FilesMediaController extends Controller
{
    /**
     * Get a listing of the resource.
     */
    public function __invoke(Request $request): AnonymousResourceCollection
    {
        $finder = new Finder($request);

        return MediaResource::collection($finder->paginate()->all());
    }
}
