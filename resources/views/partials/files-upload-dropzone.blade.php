<div id="laramedia-uploader-dropzone" class="laramedia-uploader-dropzone laramedia-hidden">
	<div class="laramedia-uploader-dropzone-filters">
		<select name="laramedia_disk" id="laramedia-dropzone-disk" class="laramedia-filter-select">
			@foreach (Laramedia::disks() as $disk => $name)
				@if (Laramedia::defaultDisk() == $disk)
					<option value="{{ $disk }}" selected>{{ $name }}</option>
				@else
					<option value="{{ $disk }}">{{ $name }}</option>
				@endif
			@endforeach
		</select>
		<select name="laramedia_visibility" id="laramedia-dropzone-visibility" class="laramedia-filter-select">
			
		</select>
	</div>
	<div class="laramedia-uploader-dropzone-close">
		<i class="fa-solid fa-xmark"></i>
	</div>
	<div class="laramedia-uploader-dropzone-icon">
    	<i class="fa-solid fa-cloud-arrow-up"></i>
    </div>
    <div class="laramedia-uploader-dropzone-text">
    	Drop files or Click here to select files to upload.
    </div>
    <div class="laramedia-uploader-dropzone-button">
    	<input type="file" name="{{ Laramedia::fileInputName() }}" class="laramedia-uploader-dropzone-input"/>
    </div>
</div>
