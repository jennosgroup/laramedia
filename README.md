# Laramedia

## Table of Contents

1. [About](#about)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Setup Files Listing Page](#setup-files-listings-page)
5. [Using The Files Selector](#using-the-files-selector)
6. [File Properties](#file-properties)
7. [Security Vulnerabilities](#security-vulnerabilities)
8. [License](#license)

### About

Laramedia is a media library package for Laravel that allows you to upload and manage files through a graphical interface.

### Installation

Install with composer - `composer require jennosgroup/laramedia`.

### Setup

Run the `php artisan migrate` command after installing the package.

Publish the package configuration file with artisan command `php artisan vendor:publish --tag=laramedia-config`.

Publish the package assets with artisan command `php artisan vendor:publish --tag=laramedia-assets`.

In the head section of your html file, include the following block of code before your stylesheets and scripts declaration:

`<meta name="laramedia_routes" content="{{ Laramedia::templateRoutes() }}">`

Include the package css file, along with font awesome, as the package relies on it.

`<link rel="stylesheet" href="{{ asset('vendor/laramedia/css/laramedia.css') }}">`

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`

Include the package js file. This must be declared after the default `app.js` laravel file, as the package js files relies on the `window.axios` object, which is declared in the default `app.js` laravel file.

`<script src="{{ asset('vendor/laramedia/js/files-selector.js') }}" defer></script>`


Include the following just before the closing body element of your html file.

`@include('laramedia::templates')`

### Setup Files Listings Page

The files listings page is the page where you can see all the files that have been uploaded. From this page, you can edit basic file information, search for them, upload new files and remove unwanted files.

In the package configuration file, set the `listings_view_path` value as the path for your listings page view. It's default value is `listings`. This means that the `resources/views/listings.blade.php` file will be your files listings page.

```php
/**
 * The view path for the listings page.
 */
'listings_view_path' => 'listings',
````

Within the page, include the files-listings.js file.

`<script src="{{ asset('vendor/laramedia/js/files-listings.js') }}" defer></script>`

Then add this line of code within the body of the page - `@include('laramedia::listings')`.

Now, watch all the magic unfold.

### Using The Files Selector

Add an event handler to the html element that you want to use to toggle/activate the files selector.

```html
<button id="file-selector">Upload Image</button>
```

Then, a simple bit of javascript code to get it activated.

```js
document.getElementById('file-selector').addEventListener('click', function () {
    var selector = new window.laramedia.selector();
    selector.start();   
});
````

From the files selector, you are able to upload new files. Click the upload icon located in the top right corner of the window.

To select files, click on the files you want to select then when finish, click the complete icon on the bottom right of the window. This will fire off two action:

`file_selected` and `files_selected`, which you can tap into with javascript to get the files.

```js
document.getElementById('file-selector').addEventListener('click', function () {
    var selector = new window.laramedia.selector();
    selector.start();

    selector.events.on('file_selected', function (file) {
        console.log(file);
    });

    selector.events.on('files_selected', function (files) {
        console.log(files);
    });
});
```

From there, it's up to your imagination to do whatever you please with the file.

### File Properties

- alt_text
- author_id
- base64url_route 
- caption
- created_at
- deleted_at
- description
- destroy_route
- disk
- display_url 
- download_route
- file_extension
- file_height
- file_size
- file_type
- file_width
- human_created_at
- human_dimensions
- human_filesize
- is_image
- is_not_image
- local_path
- mimetype
- name
- options
- original_name
- original_public_url
- preview_route
- public_url
- restore_route
- title
- trash_route
- update_route
- updated_at
- upload_path
- user_can_destroy
- user_can_download
- user_can_preview
- user_can_restore
- user_can_trash
- user_can_update
- user_can_view
- uuid
- view_route
- visibility

### Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Jenry Ollivierre via [info@jennosgroup.com](mailto:info@jennosgroup.com). All security vulnerabilities will be promptly addressed.

### License

This package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
