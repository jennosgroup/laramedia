<div id="laramedia-listings-wrapper">
	{{-- Listings Header --}}
	<div id="laramedia-listings-header">
		<button id="laramedia-listings-trigger-dropzone" class="laramedia-btn laramedia-btn-secondary">
			Add Files
		</button>
	</div>

	<div id="laramedia-listings-body">

		{{-- Show file upload progress --}}
		@include('laramedia::partials.listings-upload-progress')

		{{-- Show file upload errors --}}
		@include('laramedia::partials.listings-upload-errors')

		{{-- Files Dropzone --}}
		@include('laramedia::partials.listings-upload-dropzone')

		{{-- Filters --}}
		@include('laramedia::partials.listings-filters')

		{{-- Display uploaded files --}}
		@include('laramedia::partials.listings-files')

		{{-- Template --}}
		@include('laramedia::templates.file-editor')
		@include('laramedia::templates.files-listing-error')
		@include('laramedia::templates.files-listing-image')
		@include('laramedia::templates.files-listing-none-image')
	</div>
</div>
