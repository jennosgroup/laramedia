<div class="laramedia-filter-container laramedia-filter-select-container">
	<select id="laramedia-filter-ownership" class="laramedia-filter-select">
		<option>Ownership</option>
		@foreach (Laramedia::ownerships() as $ownership => $title)
			<option value="{{ $ownership }}">{{ $title }}</option>
		@endforeach
	</select>
</div>
