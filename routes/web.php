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
use JennosGroup\Laramedia\Support\Laramedia;

Route::middleware(Laramedia::routeMiddlewares())
    ->prefix(Laramedia::routePrefix())
    ->group(function () {
        Route::get('options', OptionsMediaController::class)->name(
            Laramedia::optionsRouteName()
        );

        Route::get('files', FilesMediaController::class)->name(
            Laramedia::filesRouteName()
        );

        Route::get('listings', ListingMediaController::class)->name(
            Laramedia::listingsRouteName()
        );

        Route::post('store', StoreMediaController::class)->name(
            Laramedia::storeRouteName()
        );

      	Route::get('{media}', ViewMediaController::class)->name(
            Laramedia::viewRouteName()
        );

        Route::get('{media}/download', DownloadMediaController::class)->name(
            Laramedia::downloadRouteName()
        );

        Route::get('{media}/base64url', Base64UrlController::class)->name(
            Laramedia::base64UrlRouteName()
        );

        Route::patch('{media}', UpdateMediaController::class)->name(
            Laramedia::updateRouteName()
        );

        Route::delete('{media}/trash', TrashMediaController::class)->name(
            Laramedia::trashRouteName()
        );

        Route::patch('{media}/restore', RestoreMediaController::class)->name(
            Laramedia::restoreRouteName()
        );

        Route::delete('{media}/destroy', DestroyMediaController::class)->name(
            Laramedia::destroyRouteName()
        );
    });
