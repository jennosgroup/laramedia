let mix = require('laravel-mix');

mix.js('resources/js/listings.js', 'public/js').setPublicPath('public');

mix.copy('public/js/listings.js', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/js');
