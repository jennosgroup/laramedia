<?php

namespace JennosGroup\Laramedia\Providers;

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
        $this->loadRoutesFrom(__DIR__. '/../../routes/web.php');

        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'laramedia');

        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');

        $this->publishes([
            __DIR__.'/../../config/laramedia.php' => config_path('laramedia.php'),
        ], 'laramedia-config');

        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/laramedia'),
        ], 'laramedia-assets');

        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/laramedia'),
        ], 'laramedia-views');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }
}
