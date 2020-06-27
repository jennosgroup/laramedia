<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Illuminate\Http\Request;
use Laramedia\Support\Config;
use Laramedia\Support\Uploader;
use Laramedia\Actions\StoreMediaAction;

class StoreMediaController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $policy = Config::policy();

        if (! is_null($policy['create'])) {
            $this->authorize($policy['create'], Media::class);
        }

        return response()->json(
            (new StoreMediaAction)->execute($request)
        );
    }
}
