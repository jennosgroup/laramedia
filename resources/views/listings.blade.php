<div id="laramedia-listings-wrapper">
	{{-- Listings Header --}}
	<div id="laramedia-listings-header">
		<button id="laramedia-files-trigger-dropzone" class="laramedia-btn laramedia-btn-secondary">
			Add Files
		</button>
	</div>

	<div id="laramedia-listings-body">

		{{-- Show file upload progress --}}
		@include('laramedia::partials.files-upload-progress')

		{{-- Show file upload errors --}}
		@include('laramedia::partials.files-upload-errors')

		{{-- Files Dropzone --}}
		@include('laramedia::partials.files-upload-dropzone')

		{{-- Filters --}}
		@include('laramedia::partials.listings-filters')

		{{-- Display uploaded files --}}
		@include('laramedia::partials.files')
	</div>
</div>
