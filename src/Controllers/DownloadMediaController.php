<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use LaravelFilesLibrary\Models\Media;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(Request $request, Media $media): StreamedResponse
    {
        return Storage::disk($media->getDisk())
            ->download(
                $media->getRelativePath($request->input('cut')), $media->getName()
            );
    }
}
