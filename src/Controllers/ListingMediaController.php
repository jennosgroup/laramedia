<?php

namespace LaravelFilesLibrary\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\View\VIew;
use LaravelFilesLibrary\Support\LaravelFilesLibrary;

class ListingMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(Request $request): View
    {
        $options = [];

        // We will allow filtering the view options.
        if (! is_null(LaravelFilesLibrary::$filterListingsViewOptionsCallback)) {
            $options = call_user_func(LaravelFilesLibrary::$filterListingsViewOptionsCallback, $options, $files, $request);
        }

        if (is_null(LaravelFilesLibrary::$listingsViewPath)) {
            throw new Exception('A view path must be set for the files listing page to work!');
        }

        return view(LaravelFilesLibrary::$listingsViewPath, $options);
    }
}
