<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use LaravelFilesLibrary\Models\Media;

class ViewMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(Request $request, Media $media)
    {
        return Storage::disk($media->getDisk())
            ->response($media->getRelativePath($request->input('cut')));
    }
}
