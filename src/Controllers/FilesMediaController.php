<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Illuminate\Http\Request;
use Laramedia\Support\Config;
use Laramedia\Resources\MediaResource;
use Laramedia\Actions\MediaResultsPaginatedAction;

class FilesMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $policy = Config::policy();

        if (! is_null($policy['files'])) {
            $this->authorize($policy['files'], Media::class);
        }

        return MediaResource::collection(
            (new MediaResultsPaginatedAction)->execute()
        );
    }
}
