<div id="laramedia-listings-filters-container">
	{{-- Disk --}}
	<div class="laramedia-listings-filter-container laramedia-listings-filter-select-container">
		<select id="laramedia-listings-filter-disk" class="laramedia-listings-filter-select">
			<option>Disk</option>
			@foreach (Laramedia::disks() as $disk => $name)
				<option value="{{ $disk }}">{{ $name }}</option>
			@endforeach
		</select>
	</div>

	{{-- Visibility --}}
	<div class="laramedia-listings-filter-container laramedia-listings-filter-select-container">
		<select id="laramedia-listings-filter-visibility" class="laramedia-listings-filter-select">
			<option>Visibility</option>
			@foreach (Laramedia::diskVisibilitiesList() as $visibility => $title)
				<option value="{{ $visibility }}">{{ $title }}</option>
			@endforeach
		</select>
	</div>

	{{-- Type Filters --}}
	<div class="laramedia-listings-filter-container laramedia-listings-filter-select-container">
		<select id="laramedia-listings-filter-type" class="laramedia-listings-filter-select">
			<option>Type</option>
			@foreach (Laramedia::typeFiltersList() as $type => $title)
				<option value="{{ $type }}">{{ $title }}</option>
			@endforeach
		</select>
	</div>

	{{-- Onwership --}}
	<div class="laramedia-listings-filter-container laramedia-listings-filter-select-container">
		<select id="laramedia-listings-filter-ownership" class="laramedia-listings-filter-select">
			<option>Ownership</option>
			@foreach (Laramedia::ownerships() as $ownership => $title)
				<option value="{{ $ownership }}">{{ $title }}</option>
			@endforeach
		</select>
	</div>

	{{-- Search --}}
	<div id="laramedia-listings-filter-search-container" class="laramedia-listings-filter-container">
		<input id="laramedia-listings-filter-search" type="search" placeholder="Search...">
	</div>

	{{-- Active Section --}}
	<div id="laramedia-listings-filter-active-section-container" class="laramedia-listings-filter-container laramedia-listings-filter-section-container laramedia-current-section">
		@include('laramedia::icons.active-section')
	</div>

	{{-- Trash Section --}}
	<div id="laramedia-listings-filter-trash-section-container" class="laramedia-listings-filter-container laramedia-listings-filter-section-container">
		@include('laramedia::icons.trash-section')
	</div>
</div>
