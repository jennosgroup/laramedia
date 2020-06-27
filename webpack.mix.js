const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/laramedia.js', 'public/js')
    .sass('resources/sass/laramedia.scss', 'public/css')
    .copy('resources/js/media-crud.js', 'public/js')
    .copy('resources/js/media-loader.js', 'public/js')
    .copy('resources/js/media-selector.js', 'public/js')
    .copy('resources/js/media-uploader.js', 'public/js')
    .copy('resources/js/components', 'public/js/components');
