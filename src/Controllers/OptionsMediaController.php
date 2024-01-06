<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Http\JsonResponse;
use JennosGroup\Laramedia\Models\Media;
use JennosGroup\Laramedia\Support\Laramedia;

class OptionsMediaController extends Controller
{
    /**
     * Get the options.
     */
    public function __invoke(): JsonResponse
    {
        $this->optionallyAuthorize('options');

        return response()->json(Laramedia::browserOptions());
    }
}
