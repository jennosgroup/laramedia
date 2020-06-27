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
