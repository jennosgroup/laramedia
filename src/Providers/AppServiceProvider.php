<?php

namespace Laramedia\Providers;

use Laramedia\Models\Media;
use Laramedia\Support\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPublishings();

        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');

        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'laramedia');

        if (Config::useRoutes()) {
            $this->loadAndBindRoutes();
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Register the publishings.
     *
     * @return void
     */
    private function registerPublishings()
    {
        $this->publishes([
            __DIR__ . '/../../config/laramedia.php' => config_path('laramedia.php'),
        ], 'laramedia-config');

        $this->publishes([
            __DIR__ . '/../../public' => public_path('vendor/laramedia'),
        ], 'laramedia-assets');

        $this->publishes([
            __DIR__. '/../../resources/views' => resource_path('views/vendor/laramedia'),
        ], 'laramedia-views');
    }

    /**
     * Bind routes and load the routes.
     *
     * @return void
     */
    private function loadAndBindRoutes()
    {
        Route::bind('trashmedia', function ($value) {
            return Media::where('id', $value)->onlyTrashed()->first();
        });

        $this->loadRoutesFrom(__DIR__. '/../../routes/web.php');
    }
}
