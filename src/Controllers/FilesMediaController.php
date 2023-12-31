<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Resources\MediaResource;
use JennosGroup\Laramedia\Support\Finder;

class FilesMediaController extends Controller
{
    /**
     * Get a listing of the resource.
     */
    public function __invoke(Request $request): AnonymousResourceCollection
    {
        $this->optionallyAuthorize('files');

        $finder = new Finder($request);

        return MediaResource::collection($finder->paginate()->all());
    }
}
