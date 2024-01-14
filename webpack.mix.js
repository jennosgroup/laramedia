let mix = require('laravel-mix');

mix.js('resources/js/files-listings.js', 'public/js');

mix.js('resources/js/files-selector.js', 'public/js');

mix.css('resources/css/laramedia.css', 'public/css');

mix.copy('public/js/files-listings.js', '../../laravel-apps/test-project/public/vendor/laramedia/js');
mix.copy('public/js/files-selector.js', '../../laravel-apps/test-project/public/vendor/laramedia/js');
mix.copy('public/css/laramedia.css', '../../laravel-apps/test-project/public/vendor/laramedia/css');
