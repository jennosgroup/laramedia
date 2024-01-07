<div class="laramedia-filter-container laramedia-filter-select-container">
	<select id="laramedia-filter-visibility" class="laramedia-filter-select">
		<option>Visibility</option>
		@foreach (Laramedia::diskVisibilitiesList() as $visibility => $title)
			<option value="{{ $visibility }}">{{ $title }}</option>
		@endforeach
	</select>
</div>
