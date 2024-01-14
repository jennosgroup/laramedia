let mix = require('laravel-mix');

mix.js('resources/js/files-listings.js', 'public/js');

mix.js('resources/js/files-selector.js', 'public/js');

mix.css('resources/css/laramedia.css', 'public/css');

mix.copy('public/js/files-listings.js', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/js');
mix.copy('public/js/files-selector.js', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/js');
mix.copy('public/css/laramedia.css', '../../laravel-apps/bequia-fast-ferries/public/vendor/laramedia/css');
