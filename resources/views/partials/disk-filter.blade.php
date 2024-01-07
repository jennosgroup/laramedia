<div class="laramedia-filter-container laramedia-filter-select-container">
	<select id="laramedia-filter-disk" class="laramedia-filter-select">
		<option>Disk</option>
		@foreach (Laramedia::disks() as $disk => $name)
			<option value="{{ $disk }}">{{ $name }}</option>
		@endforeach
	</select>
</div>
