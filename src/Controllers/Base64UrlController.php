<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Models\Media;

class Base64UrlController extends Controller
{
    /**
     * Get the base64 url of a file.
     */
    public function __invoke(Request $request, Media $media): JsonResponse
    {
        $this->optionallyAuthorize('view', $media);
        
        return response()->json(
            ['url' => $media->getBase64Url($request->input('cut'))]
        );
    }
}
