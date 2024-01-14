<template id="laramedia-files-selector-template">
	<div id="laramedia-selector-wrapper" class="laramedia-modal-wrapper">
		<div id="laramedia-selector-container" class="laramedia-modal-container">
			<div id="laramedia-selector-header" class="laramedia-modal-header">
				<button class="laramedia-trigger-dropzone laramedia-modal-button">
					<i class="fa-solid fa-cloud-arrow-up"></i>
				</button>
				<button id="laramedia-selector-close" class="laramedia-modal-button">
					X
				</button>
			</div>
			<div id="laramedia-selector-body" class="laramedia-modal-body">
				<div id="laramedia-selector-uploader-container" class="laramedia-hidden">
					@include('laramedia::partials.files-upload')
				</div>

				<div id="laramedia-selector-files-container">
					<div class="laramedia-filters-container">
						@include('laramedia::partials.disk-filter')
						@include('laramedia::partials.visibility-filter')
						@include('laramedia::partials.type-filter')
						@include('laramedia::partials.ownership-filter')
						@include('laramedia::partials.search-filter')
					</div>

					{{-- Display uploaded files --}}
					@include('laramedia::partials.files')
				</div>
			</div>
			<div class="laramedia-modal-footer">
				<button id="laramedia-selector-select-files" class="laramedia-modal-button">
					<i class="fa-solid fa-check"></i>
				</button>
			</div>
		</div>
	</div>
</template>
