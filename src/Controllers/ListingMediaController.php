<?php

namespace JennosGroup\Laramedia\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\View\VIew;
use JennosGroup\Laramedia\Support\Laramedia;

class ListingMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke(Request $request): View
    {
        $options = [];

        // We will allow filtering the view options.
        if (! is_null(Laramedia::$filterListingsViewOptionsCallback)) {
            $options = call_user_func(Laramedia::$filterListingsViewOptionsCallback, $options, $request);
        }

        if (is_null(Laramedia::$listingsViewPath)) {
            throw new Exception('A view path must be set for the files listing page to work!');
        }

        return view(Laramedia::$listingsViewPath, $options);
    }
}
