# Laramedia

## About

Laramedia is a media manager for your laravel application.

## Installation

Install with composer command `composer require jenryollivierre/Laramedia`.

## Setup

Use the artisan publish command to publish the package config file `php artisan vendor:publish --tag=laramedia-config`. Change the configurations as necessary.

After setting up the configurations, publish the assets files with artisan command `php artisan vendor:publish --tag=laramedia-asset`.

## Getting Started

Using the `@include` blade command, include the following files globally so that they can are available on all pages for the media manager to access.

`@include('laramedia::template-single-file')`

`@include('laramedia::template-single-image')`

`@include('laramedia::template-file-editor')`

`@include('laramedia::template-file-selector')`

`@include('laramedia::template-file-uploader')`

Include the package css and js file globally as well.

`<link rel="stylesheet" href="{{ asset('vendor/laramedia/css/laramedia.css') }}">`

`<script src="{{ asset('vendor/laramedia/js/laramedia.js') }}"></script>`

Ensure that the js file is loaded to the footer of the page.

This package also relies on axios and lodash, which comes by default in new laravel installations.

In your html head section, add 3 meta tags, which are mandatory for the package to work!

`<meta name="media-files-route" content="{{ route('laramedia.files') }}">`

`<meta name="media-upload-route" content="{{ route('laramedia.store') }}">`

`<meta name="media-options-route" content="{{ route('laramedia.options') }}">`

Ensure that the CSRF Token is defined in the head section as well. `<meta name="csrf-token" content="{{ csrf_token() }}">`

Next, you need to setup a route to be the home for the media. This can be anything you desire. All of the package route names are prefixed with 'laramedia' so there isn't much chance of collision with route names. You can also change the route prefix within the package config file. After you have a route setup and a view, include the view `@include('laramedia::home')`. That's it, everything will now work like magic.

## Policies

You can set policies that controls all the actions. As per normal laravel convention, you can define your policies in the EventServiceProvider file. Use `Laramedia\Models\Media` as the model and define your own policy class. When you have defined your policy class methods, you then set the corresponding method to the policy keys in the laramedia.php config file. 

'active_section' controls who sees the active files.
'trash_section' controls who sees the trashed files.
'create' controls who can create a file uplaod.
'view' controls who can preview a file.
'download' controls who can download a file.
'update' controls who can update a file.
'trash' controls who can trash a file.
'restore' controls who can restore a file.
'delete' controls who can permanently delete a file.
'files' controls who can fetch files (view files on media home page and through searches etc)
'options' controls who can fetch the upload options.
'trash_bulk' controls who can bulk trash files.
'restore_bulk' controls who can bulk restore files.
'delete_bulk' controls who can bulk delete files.

If these are set to null, then they will pass as true.

## Features

### Bulk Options

From the media home page, you can bulk trash, restore and permanently delete items. You can set a policy in the laramedia.php config file to determine who can perform bulk actions.

When you hover over a file on the media home page, a checkbox will appear. All checked items will be actionable through the bulk action.

### Type Filter

You can search/get media based on their type.

### Visibility Filter

You can search/get media based on their visibility type.

### Ownership Filter

You can search/get media based on the ownership of the upload.

### Active Section

The default view for the media files is the active section (non-trashed files)

### Trash Section

Items in the trash can be viewed by clicking on the trash icon.

### Search

You can perform search for media files.

### Save, Trash, Restore & Delete Button

When you click on a file from the media home page, you have the ability to edit, trash, restore & delete by clicking the relevant button on the button right of the file preview.

### Public & Private Upload

Public uploads are intended to be viewed by anyone while private uploads are not visible. On the media home page, which is intended to be password protected, the private files can be previewed.
public or private upload

## Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Jenry Ollivierre via [jenry@jenryollivierre.com](mailto:jenry@jenryollivierre.com). All security vulnerabilities will be attended to promptly.

## License

The Laramedia package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
