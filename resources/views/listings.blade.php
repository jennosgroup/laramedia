<div id="laramedia-listings-wrapper">
	{{-- Listings Header --}}
	<div id="laramedia-listings-header">
		<button type="button" id="laramedia-listings-trigger-dropzone" class="laramedia-btn laramedia-btn-secondary">
			Add Files
		</button>
	</div>

	<div id="laramedia-listings-body">

		{{-- Show file upload progress --}}
		<div id="laramedia-listings-upload-progress-container">
			<div id="laramedia-listings-upload-progress-bar">
				<div id="laramedia-listings-upload-progress-units"></div>
				<div id="laramedia-listings-upload-message">Processing...</div>
			</div>
		</div>

		{{-- Show file upload errors --}}
		<div id="laramedia-listings-errors-container">
			<div id="laramedia-listings-error-close">
				<i class="fa-solid fa-xmark"></i>
			</div>
		</div>

		{{-- Files Dropzone --}}
		<div class="laramedia-uploader-dropzone">
			<div class="laramedia-uploader-dropzone-trigger-close">
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

		{{-- Display uploaded files --}}
		<div id="laramedia-listings-files-wrapper">
			<div id="laramedia-listings-files-container">
				
			</div>
			<button id="laramedia-listings-load-more-btn" class="laramedia-btn laramedia-btn-secondary laramedia-hidden">
				Load More
			</button>
		</div>
	</div>
</div>

@include('laramedia::templates.file-editor')
@include('laramedia::templates.files-listing-error')
@include('laramedia::templates.files-listing-image')
@include('laramedia::templates.files-listing-none-image')
