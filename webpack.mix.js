let mix = require('laravel-mix');

mix.js('resources/js/listings.js', 'public/js').setPublicPath('public');

mix.css('resources/css/laramedia.css', 'public/css');

mix.copy('public/js/listings.js', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/js');

mix.copy('public/css/laramedia.css', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/css');
