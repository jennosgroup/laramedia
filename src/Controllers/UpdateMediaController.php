<?php

namespace Laramedia\Controllers;

use Laramedia\Models\Media;
use Illuminate\Http\Request;
use Laramedia\Support\Config;
use Laramedia\Resources\MediaResource;
use Laramedia\Actions\UpdateMediaAction;

class UpdateMediaController extends Controller
{
    /**
     * Update the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Laramedia\Models\Media  $media
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Media $media)
    {
        $policy = Config::policy();

        if (! is_null($policy['update'])) {
            $this->authorize($policy['update'], $media);
        }

        $media = (new UpdateMediaAction)->execute($media, $request->except([
            'id', 'original_name', 'name',
        ]));

        return new MediaResource($media);
    }
}
