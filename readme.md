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

Type Filter
Visibility Filter
Ownership Filter
Active Section
Trash Section
Search

Hover
Save Button
Trash Button
Restore Button
Destroy Button
File Editor

public or private upload
