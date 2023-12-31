<div id="lfl-listings-wrapper">
	<div id="lfl-listings-header">
		<div id="lfl-listings-header-title">Files Library</div>
		<button type="button" id="lfl-listings-trigger-dropzone">Add Files</button>
	</div>
	<div id="lfl-listings-body">

		{{-- Show file upload progress --}}
		<div id="lfl-listings-upload-progress-container">
			<div id="lfl-listings-upload-progress-bar">
				<div id="lfl-listings-upload-progress-units"></div>
				<div id="lfl-listings-upload-message">Processing...</div>
			</div>
		</div>

		{{-- Show file upload errors --}}
		<div id="lfl-listings-errors-container">
			<div id="lfl-listings-error-close">
				<i class="fa-solid fa-xmark"></i>
			</div>
		</div>

		{{-- Files Dropzone --}}
		<div class="lfl-uploader-dropzone">
			<div class="lfl-uploader-dropzone-trigger-close">
				<i class="fa-solid fa-xmark"></i>
			</div>
			<div class="lfl-uploader-dropzone-icon">
		    	<i class="fa-solid fa-cloud-arrow-up"></i>
		    </div>
		    <div class="lfl-uploader-dropzone-text">
		    	Drop files or Click here to select files to upload.
		    </div>
		    <div class="lfl-uploader-dropzone-button">
		    	<input type="file" name="{{ Laramedia::fileInputName() }}" class="lfl-uploader-dropzone-input"/>
		    </div>
		</div>

		{{-- Display uploaded files --}}
		<div id="lfl-listings-files-wrapper">
			<div id="lfl-listings-files-container">
				
			</div>
			<button id="lfl-listings-load-more-btn" class="lfl-hidden">
				Load More
			</button>
		</div>
	</div>
</div>

@include('laravel-files-library::templates.file-editor')
@include('laravel-files-library::templates.files-listing-error')
@include('laravel-files-library::templates.files-listing-image')
@include('laravel-files-library::templates.files-listing-none-image')
