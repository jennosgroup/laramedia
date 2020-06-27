<?php

use Laramedia\Support\Config;
use Illuminate\Support\Facades\Route;

Route::prefix(Config::routePrefix())
    ->middleware(Config::middlewares())
    ->namespace('Laramedia\Controllers')->group(function () {
        Route::get('media/files', 'FilesMediaController')->name('laramedia.files');
        Route::get('media/options', 'OptionsMediaController')->name('laramedia.options');
        Route::post('media/store', 'StoreMediaController')->name('laramedia.store');
        Route::get('media/{media}', 'ShowMediaController')->name('laramedia.show');
        Route::get('media/{media}/download', 'DownloadMediaController')->name('laramedia.download');
        Route::patch('media/{media}', 'UpdateMediaController')->name('laramedia.update');
        Route::delete('media/{media}/trash', 'TrashMediaController')->name('laramedia.trash');

        if (Config::trashIsEnabled()) {
            Route::patch('media/trash/{trashmedia}', 'RestoreMediaController')->name('laramedia.restore');
            Route::delete('media/trash/{trashmedia}', 'DestroyMediaController')->name('laramedia.destroy');
        }
    });
