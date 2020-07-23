<?php

namespace Laramedia\Actions;

use Laramedia\Support\Config;
use Laramedia\Support\Finder;
use Illuminate\Support\Facades\Request;

class MediaResultsPaginatedAction
{
    /**
     * Get the media results paginated.
     *
     * @param  int  $paginate
     * @return bool
     */
    public function execute(int $paginate = 30)
    {
        return (new Finder)->type(Request::input('type'))
            ->visibility(Request::input('visibility'))
            ->ownership(Request::input('ownership'))
            ->section(Request::input('section'))
            ->search(Request::input('search'))
            ->paginate($paginate);
    }
}
