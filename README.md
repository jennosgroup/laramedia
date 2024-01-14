# Laramedia

### About

Laramedia is a media library package for Laravel that allows you to upload and manage files through a graphical interface.

### Installation

Install with composer - `composer require jennosgroup/laramedia`.

### Setup

Run the `php artisan migrate` command after installing the package.

Publish the package configuration file with artisan command `php artisan vendor:publish --tag=laramedia-config`.

Publish the package assets with artisan command `php artisan vendor:publish --tag=laramedia-assets`.

In the head section of your html file, include the following, which should be higher in the head section of your html file than any of the other scripts that the package will require you to manually declare:

`<meta name="laramedia_routes" content="{{ Laramedia::templateRoutes() }}">`

Include the following package stylesheet in your html file:

`<link rel="stylesheet" href="{{ asset('vendor/laramedia/css/laramedia.css') }}">`

Our package makes use of font awesome as well. We'd love for you to be so kind and include in your html files. You're free to change the version of font awesome.

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

Include the following script in your html file:

`<script src="{{ asset('vendor/laramedia/js/files-selector.js') }}" defer></script>`

Include the following just before the closing body element of your html file.

`@include('laramedia::templates')`

### Setup Files Listings Page

In the package configuration file, set the `listings_view_path` value as the path for your listings page view.

```php
/**
 * The view path for the listings page.
 */
'listings_view_path' => 'admin.files-listings',
````

Then include `@include(laramedia::listings)` in the listings view and watch all the magic unfold.

Ensure that the following script is in the html for your listings page:

`<script src="{{ asset('vendor/laramedia/js/files-listings.js') }}" defer></script>`

### Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Jenry Ollivierre via [info@jennosgroup.com](mailto:info@jennosgroup.com). All security vulnerabilities will be promptly addressed.

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
