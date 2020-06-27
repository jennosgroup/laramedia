<?php

namespace Laramedia\Actions;

use Laramedia\Models\Media;
use Illuminate\Http\Request;
use Laramedia\Support\Uploader;
use Laramedia\Events\FileCreated;

class StoreMediaAction
{
    /**
     * Create the media.
     *
     * @param  Illuminate\Http\Request  $request
     *
     * @return
     */
    public function execute(Request $request): array
    {
        $uploader = new Uploader($request);

        if ($request->visibility == 'public') {
            $uploader->public();
        } else {
            $uploader->private();
        }

        $upload = $uploader->handle();

        if (! is_null($upload['file'])) {
            event(new FileCreated($upload['file']));
        }

        return $upload;
    }
}
