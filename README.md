# Laramedia

### About

Laramedia is a media library package for Laravel that allows you to upload and manage files through a graphical interface.

### Installation

Install with composer - `composer require jennosgroup/laramedia`.

### Setup

Run the `php artisan migrate` command after installing the package.

Publish the package assets with artisan command `php artisan vendor:publish --tag=laramedia-assets`

In the head section of your html file, include the following, which should be higher in the head section of your html file than any of the other scripts that the package will require you to manually declare:

`<meta name="laramedia_routes" content="{{ Laramedia::templateRoutes() }}">`

Include the following script in your html file:

`<script src="{{ asset('vendor/laramedia/js/files-selector.js') }}" defer></script>`

Include the following just before the closing body element of your html file.

`@include('laramedia::templates')`

On the page that you wish to display the listing of all the files, include the following script in your html file.

`<script src="{{ asset('vendor/laramedia/js/files-listings.js') }}" defer></script>`

## Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Jenry Ollivierre via [info@jennosgroup.com](mailto:info@jennosgroup.com). All security vulnerabilities will be promptly addressed.

## License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
