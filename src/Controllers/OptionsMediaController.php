<?php

namespace LaravelFilesLibrary\Controllers;

use Illuminate\Http\JsonResponse;
use LaravelFilesLibrary\Models\Media;
use LaravelFilesLibrary\Support\Config;

class OptionsMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(): JsonResponse
    {
        return response()->json(Config::browserOptions());
    }
}
