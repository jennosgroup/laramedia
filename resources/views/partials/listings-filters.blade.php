<div class="laramedia-filters-container">
	<div class="laramedia-listings-filters-left">
		@include('laramedia::partials.disk-filter')
		@include('laramedia::partials.visibility-filter')
		@include('laramedia::partials.type-filter')
		@include('laramedia::partials.ownership-filter')
	</div>

	<div class="laramedia-listings-filters-right">
		@include('laramedia::partials.search-filter')

		{{-- Active Section --}}
		<div id="laramedia-filter-active-section-container" class="laramedia-filter-container laramedia-filter-section-container laramedia-current-section" laramedia-section="active">
			@include('laramedia::icons.active-section')
		</div>

		{{-- Trash Section --}}
		<div id="laramedia-filter-trash-section-container" class="laramedia-filter-container laramedia-filter-section-container" laramedia-section="trash">
			@include('laramedia::icons.trash-section')
		</div>
	</div>
</div>
