<?php

namespace LaravelFilesLibrary\Providers;

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

        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'laravel-files-library');

        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');

        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/laravel-files-library'),
        ], 'laravel-files-library-assets');

        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/laravel-files-library'),
        ], 'laravel-files-library-views');
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
