<?php

use Illuminate\Support\Facades\Route;
use LaravelFilesLibrary\Controllers\Base64UrlController;
use LaravelFilesLibrary\Controllers\DestroyMediaController;
use LaravelFilesLibrary\Controllers\DownloadMediaController;
use LaravelFilesLibrary\Controllers\FilesMediaController;
use LaravelFilesLibrary\Controllers\ListingMediaController;
use LaravelFilesLibrary\Controllers\OptionsMediaController;
use LaravelFilesLibrary\Controllers\RestoreMediaController;
use LaravelFilesLibrary\Controllers\StoreMediaController;
use LaravelFilesLibrary\Controllers\TrashMediaController;
use LaravelFilesLibrary\Controllers\UpdateMediaController;
use LaravelFilesLibrary\Controllers\ViewMediaController;
use LaravelFilesLibrary\Support\Config;
use LaravelFilesLibrary\Support\LaravelFilesLibrary;

Route::middleware(Config::routeMiddlewares())
    ->prefix(Config::routePrefix())
    ->group(function () {
        Route::get('options', OptionsMediaController::class)->name(
            Config::optionsRouteName()
        );

        Route::get('files', FilesMediaController::class)->name(
            Config::filesRouteName()
        );

        Route::get('listings', ListingMediaController::class)->name(
            Config::listingsRouteName()
        );

        Route::post('store', StoreMediaController::class)->name(
            Config::storeRouteName()
        );

      	Route::get('{media}', ViewMediaController::class)->name(
            Config::viewRouteName()
        );

        Route::get('{media}/download', DownloadMediaController::class)->name(
            Config::downloadRouteName()
        );

        Route::get('{media}/base64url', Base64UrlController::class)->name(
            Config::base64UrlRouteName()
        );

        Route::patch('{media}', UpdateMediaController::class)->name(
            Config::updateRouteName()
        );

        Route::delete('{media}/trash', TrashMediaController::class)->name(
            Config::trashRouteName()
        );

        Route::patch('{media}/restore', RestoreMediaController::class)->name(
            Config::restoreRouteName()
        );

        Route::delete('{media}/destroy', DestroyMediaController::class)->name(
            Config::destroyRouteName()
        );
    });
