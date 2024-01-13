<div id="laramedia-listings-wrapper">
	{{-- Listings Header --}}
	<div id="laramedia-listings-header">
		<button id="laramedia-files-trigger-dropzone" class="laramedia-btn laramedia-btn-secondary">
			Add Files
		</button>
	</div>

	<div id="laramedia-listings-body">

		{{-- Files Upload --}}
		@include('laramedia::partials.files-upload')

		{{-- Filters --}}
		@include('laramedia::partials.listings-filters')

		{{-- Display uploaded files --}}
		@include('laramedia::partials.files')
	</div>
</div>
