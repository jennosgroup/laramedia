<div class="laramedia-filter-container laramedia-filter-select-container">
	<select id="laramedia-filter-type" class="laramedia-filter-select">
		<option>Type</option>
		@foreach (Laramedia::typeFiltersList() as $type => $title)
			<option value="{{ $type }}">{{ $title }}</option>
		@endforeach
	</select>
</div>
