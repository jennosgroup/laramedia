<?php

namespace Laramedia\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as RoutingController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends RoutingController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
