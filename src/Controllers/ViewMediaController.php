<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use JennosGroup\Laramedia\Models\Media;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ViewMediaController extends Controller
{
    /**
     * View a specific resource.
     */
    public function __invoke(Request $request, Media $media): StreamedResponse
    {
        $this->optionallyAuthorize('view', $media);
        
        return Storage::disk($media->getDisk())
            ->response($media->getRelativePath($request->input('cut')));
    }
}
