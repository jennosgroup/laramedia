<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Support\Laramedia;

class OptionsMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(): JsonResponse
    {
        $this->optionallyAuthorize('options');

        return response()->json(Laramedia::browserOptions());
    }
}
