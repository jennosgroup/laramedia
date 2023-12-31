<?php

use Illuminate\Support\Facades\Route;
use JennosGroup\Laramedia\Controllers\Base64UrlController;
use JennosGroup\Laramedia\Controllers\DestroyMediaController;
use JennosGroup\Laramedia\Controllers\DownloadMediaController;
use JennosGroup\Laramedia\Controllers\FilesMediaController;
use JennosGroup\Laramedia\Controllers\ListingMediaController;
use JennosGroup\Laramedia\Controllers\OptionsMediaController;
use JennosGroup\Laramedia\Controllers\RestoreMediaController;
use JennosGroup\Laramedia\Controllers\StoreMediaController;
use JennosGroup\Laramedia\Controllers\TrashMediaController;
use JennosGroup\Laramedia\Controllers\UpdateMediaController;
use JennosGroup\Laramedia\Controllers\ViewMediaController;
use JennosGroup\Laramedia\Support\Config;
use JennosGroup\Laramedia\Support\Laramedia;

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
