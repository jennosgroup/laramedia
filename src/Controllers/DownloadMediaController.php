<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use JennosGroup\Laramedia\Models\Media;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadMediaController extends Controller
{
    /**
     * Download a resource.
     */
    public function __invoke(Request $request, Media $media): StreamedResponse
    {
        $this->optionallyAuthorize('download', $media);

        return Storage::disk($media->getDisk())
            ->download(
                $media->getRelativePath($request->input('cut')), $media->getName()
            );
    }
}
