<?php

namespace JennosGroup\Laramedia\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use JennosGroup\Laramedia\Support\Laramedia;

class Controller extends BaseController
{
    use AuthorizesRequests;
    use ValidatesRequests;

    /**
     * Optionally authorize a request.
     */
    protected function optionallyAuthorize(string $key, Model $model = null): void
    {
        $policies = Laramedia::policies();

        if (is_null($model)) {
            $model = $policies['model'] ?? null;
        }

        if (! array_key_exists($key, $policies)) {
            return;
        }

        $policy = $policies[$key];

        if (is_null($policy)) {
            return;
        }

        $this->authorize($policy, $model);
    }
}
