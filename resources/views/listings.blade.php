<div id="laramedia-listings-wrapper">
	<button id="laramedia-listings-upload-files" class="laramedia-trigger-dropzone laramedia-btn laramedia-btn-secondary">
		Upload Files
	</button>

	<div id="laramedia-listings-body">

		{{-- Files Upload --}}
		@include('laramedia::partials.files-upload')

		{{-- Filters --}}
		@include('laramedia::partials.listings-filters')

		{{-- Display uploaded files --}}
		@include('laramedia::partials.files')
	</div>
</div>
