# Laramedia

### About

Laramedia is a media library package for Laravel that allows you to upload and manage files through a graphical interface.

### Installation

Install with composer - `composer require jennosgroup/laramedia`.

### Setup

Run the `php artisan migrate` command after installing the package.

Publish the package configuration file with artisan command `php artisan vendor:publish --tag=laramedia-config`.

Publish the package assets with artisan command `php artisan vendor:publish --tag=laramedia-assets`.

In the head section of your global html file, include the following lines of code:

`<meta name="laramedia_routes" content="{{ Laramedia::templateRoutes() }}">`

`<link rel="stylesheet" href="{{ asset('vendor/laramedia/css/laramedia.css') }}">`

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

`<script src="{{ asset('vendor/laramedia/js/files-selector.js') }}" defer></script>`

For the font awesome stylesheet, you can change the version to your heart's desire.

Include the following just before the closing body element of your html file.

`@include('laramedia::templates')`

Ensure that 'window.axios' is defined with the axios object as the package javascript files depend on it. You also have to ensure that the default app.js file is included in your html document to get the axios object.

### Setup Files Listings Page

In the package configuration file, set the `listings_view_path` value as the path for your listings page view.

```php
/**
 * The view path for the listings page.
 */
'listings_view_path' => 'admin.files-listings',
````

Then include `@include('laramedia::listings')` in the listings view and watch all the magic unfold.

Ensure that the following script is in the html for your listings page:

`<script src="{{ asset('vendor/laramedia/js/files-listings.js') }}" defer></script>`

### Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Jenry Ollivierre via [info@jennosgroup.com](mailto:info@jennosgroup.com). All security vulnerabilities will be promptly addressed.

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
