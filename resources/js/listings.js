import Loader from './files-loader';
import Uploader from './files-uploader';
import Editor from './file-editor';

function Listings() {
	/**
	 * The loader instance.
	 * 
	 * @var obj
	 */
	this.loader = {};

	/**
	 * The uploader instance.
	 * 
	 * @var obj
	 */
	this.uploader = {};

	/**
	 * The queue for the loaded files.
	 *
	 * @var obj
	 */
	this.loadedFiles = {};

	/**
	 * The files successfully uploaded.
	 * 
	 * @var obj
	 */
	this.uploadedFiles = {};

	/**
	 * The files queue for both the loaded and uploaded files.
	 * 
	 * @var obj
	 */
	this.files = {};

	/**
	 * The options.
	 * 
	 * @var obj
	 */
	this.options = {};

	/**
	 * Initiate the listings page.
	 * 
	 * @return void
	 */
	this.init = function () {
		var self = this;

		// Get options first then handle business after
        window.axios.get(this.getOptionsRoute()).then(function (response) {
            self.options = response.data;

			self.uploader = new Uploader();
			self.loader = new Loader();

			self.registerEventHandlers();
			self.registerLoaderEventHandlers();
			self.registerUploaderEventHandlers();

			self.loader.setOptions(self.options).start();
			self.uploader.init();
        });
	}

	/**
	 * Register the events handlers.
	 * 
	 * @return void
	 */
	this.registerEventHandlers = function () {
		var self = this;

		// Show the uploader when the add files button is clicked
		document.getElementById('laramedia-listings-trigger-dropzone').addEventListener('click', function (event) {
			document.querySelector('.laramedia-uploader-dropzone').style.display = 'flex'; 
		});

		// Hide the uploader when it is clicked to close
		document.querySelector('.laramedia-uploader-dropzone-trigger-close').addEventListener('click', function (event) {
			event.preventDefault();
			event.stopPropagation();

			event.target.closest('.laramedia-uploader-dropzone').style.display = 'none';
		});

		// Hide the error section when X is clicked. Also remove the errors
		document.getElementById('laramedia-listings-error-close').addEventListener('click', function (event) {
			this.parentElement.style.display = 'none';

			// Remove the errors
			document.querySelectorAll('.laramedia-listings-error').forEach(function (element) {
				element.remove();
			});
		})

		// Load more
		document.getElementById('laramedia-listings-load-more-btn').addEventListener('click', function (event) {
			self.loader.loadContent();
		});
	}

	/**
	 * Register the loader event handlers.
	 * 
	 * @return void
	 */
	this.registerLoaderEventHandlers = function () {
		var self = this;

		this.loader.events.on('file_loaded', function (file) {
			self.loadedFiles[file.uuid] = file;
			self.files[file.uuid] = file;
			self.showFilePreview(file);
		});

		this.loader.events.on('load_complete', function (allFilesLoaded) {
			if (! allFilesLoaded) {
				document.getElementById('laramedia-listings-load-more-btn').classList.remove('laramedia-hidden');
			}
		});

		this.loader.events.on('last_load_complete', function () {
			document.getElementById('laramedia-listings-load-more-btn').classList.add('laramedia-hidden');
		});
	}

	/**
	 * Register the uploader event handlers.
	 * 
	 * @return void
	 */
	this.registerUploaderEventHandlers = function () {
		var self = this;

		// Show the image preview when file uploaded successfully
		this.uploader.events.on('upload_success', function (media, file, response) {
			self.uploadedFiles[media.uuid] = media;
			self.files[media.uuid] = media;
			self.showFilePreview(media, true);
		});

		// Show the error when a file upload fails
		this.uploader.events.on('upload_fail', function (file, response) {
			self.showFileError(file, response);
		});

		// Show the error when a file upload fails
		this.uploader.events.on('upload_error', function (file, response) {
			self.showFileError(file, response);
		});

		// Show the error when a file upload fails
		this.uploader.events.on('file_rejected', function (file, reason) {
			self.showFileValidationError(file, reason);
		});

		// When the progress changes
		this.uploader.events.on('progress_percentage_update', function (percentage) {
			self.showUploadProgress(percentage);
		});

		// When the processing start
		this.uploader.events.on('files_processing_start', function () {
			self.showUploadProcessing();
		});
	}

	/**
	 * Show the file preview.
	 * 
	 * @param  obj  media
	 * @param  bool  prepend
	 * 
	 * @return void
	 */
	this.showFilePreview = function (media, prepend) {
		var self = this;
        var container = this.getFilesContainerElement();
        var template = this.getFilePreviewTemplate(media);

		// Add file id to template
		template.querySelector('.laramedia-listings-item-wrapper').setAttribute('file_id', media.uuid);

		// Enable the file editor when file preview is clicked
        template.querySelector('.laramedia-listings-item-container').addEventListener('click', function (event) {
        	var wrapper = event.target.closest('.laramedia-listings-item-wrapper');
        	var hasPreviousFile = (wrapper.previousElementSibling != null);
        	var hasNextFile = (wrapper.nextElementSibling != null);

        	var editor = new Editor();

        	// When the editor previous file button is clicked
        	editor.events.on('previous_file', function (file) {
        		if (hasPreviousFile) {
        			editor.close(file);
        			wrapper.previousElementSibling.querySelector('.laramedia-listings-item-container').click();
        		}
        	});

        	// When the next file is requested from the editor
        	editor.events.on('next_file', function (file) {
        		if (hasNextFile) {
        			editor.close(file);
        			wrapper.nextElementSibling.querySelector('.laramedia-listings-item-container').click();
        		}
        	});

        	// When file updated in editor
        	editor.events.on('file_updated', function (updatedFile) {
        		self.files[updatedFile.uuid] = updatedFile;
        	});

        	// When file trashed from editor
        	editor.events.on('file_trashed', function (file) {
        		document.querySelector("[file_id='"+file.uuid+"']").remove();
        	});

        	// When file restored from editor
        	editor.events.on('file_restored', function (file) {
    			document.querySelector("[file_id='"+file.uuid+"']").remove();
        	});

        	// When file destroyed from editor
        	editor.events.on('file_destroyed', function (file) {
        		document.querySelector("[file_id='"+file.uuid+"']").remove();
        	});

        	// Start the editor
        	editor.init({
        		file: self.files[media.uuid],
        		has_previous_file: hasPreviousFile,
        		has_next_file: hasNextFile,
        		options: self.options,
        	});
        });

        // Show image preview or file preview
        if (media.file_type == 'image') {
            template.querySelector('.laramedia-listings-image').src = media.base64_url;
        } else {
        	template.querySelector('.laramedia-listings-item-name').innerHTML = media.original_name;
        }

        if (prepend != 'undefined' && prepend == true) {
        	container.prepend(template);
        } else {
        	container.append(template);
        }
	}

	/**
	 * Show the file error.
	 * 
	 * @param  obj  file
	 * @parma  obj  response
	 * 
	 * @return void
	 */
	this.showFileError = function (file, response) {
		var self = this;
		var container = this.getErrorsContainerElement();
		var template = this.getFileErrorTemplate();

		// Event listener to remove error
		template.querySelector('.laramedia-listings-error-remove').addEventListener('click', function (event) {
			this.parentElement.parentElement.remove();

			if (self.getErrorsContainerElement().querySelectorAll('.laramedia-listings-error').length == 0) {
				self.getErrorsContainerElement().style.display = 'none';
			}
		});

		template.querySelector('.laramedia-listings-error-name').innerHTML = file.name;

		if (response.hasOwnProperty('response')) {
			template.querySelector('.laramedia-listings-error-reason').innerHTML = response.response.data.message;
		} else {
			template.querySelector('.laramedia-listings-error-reason').innerHTML = response.messages.join(' ');
		}

		container.style.display = 'flex';
		container.prepend(template);
	}

	/**
	 * Show the file validation error.
	 * 
	 * @param  obj  file
	 * @parma  obj  reason
	 * 
	 * @return void
	 */
	this.showFileValidationError = function (file, reason) {
		var self = this;
		var container = this.getErrorsContainerElement();
		var template = this.getFileErrorTemplate();

		// Event listener to remove error
		template.querySelector('.laramedia-listings-error-remove').addEventListener('click', function (event) {
			this.parentElement.parentElement.remove();

			if (self.getErrorsContainerElement().querySelectorAll('.laramedia-listings-error').length == 0) {
				self.getErrorsContainerElement().style.display = 'none';
			}
		});

		if (reason == 'file_large') {
			reason = 'File exceeds the maximum size allowed.';
		} else if (reason == 'file_small') {
			reason = 'File does not meet the minimum size allowed.';
		} else if (reason == 'file_not_allowed') {
			reason = 'File type is not allowed.';
		} else if (reason == 'file_already_selected') {
			reason = 'File has already been selected.';
		} else {
			reason = 'File rejected';
		}

		template.querySelector('.laramedia-listings-error-name').innerHTML = file.name;
		template.querySelector('.laramedia-listings-error-reason').innerHTML = reason;

		container.style.display = 'flex';
		container.prepend(template);
	}

	/**
	 * Show the upload progress.
	 * 
	 * @param  int  percentage
	 * 
	 * @return void
	 */
	this.showUploadProgress = function (percentage) {
		var container = this.getUploadProgressContainerElement();

		if (container.style.display != 'flex') {
			container.style.display = 'flex';
		}

		document.getElementById('laramedia-listings-upload-message').style.display = 'none';

		var unitsElement = document.getElementById('laramedia-listings-upload-progress-units');
		unitsElement.style.display = 'flex';
		unitsElement.style.width = percentage+'%';
		unitsElement.innerHTML = percentage+'%';
	}

	/**
	 * Show the upload processing.
	 * 
	 * @return void
	 */
	this.showUploadProcessing = function () {
		var container = this.getUploadProgressContainerElement();

		if (container.style.display != 'flex') {
			container.style.display = 'flex';
		}

		document.getElementById('laramedia-listings-upload-progress-units').style.display = 'none';

		document.getElementById('laramedia-listings-upload-message').style.display = 'flex';
	}

    /**
     * Get the options route.
     * 
     * @return string
     */
    this.getOptionsRoute = function () {
        return document.head.querySelector("meta[name='laramedia_options_route']").content;
    }

	/**
	 * Get the files container element.
	 * 
	 * @return obj
	 */
	this.getFilesContainerElement = function () {
		return document.getElementById('laramedia-listings-files-container');
	}

	/**
	 * Get the errors container element.
	 * 
	 * @return obj
	 */
	this.getErrorsContainerElement = function () {
		return document.getElementById('laramedia-listings-errors-container');
	}

	/**
	 * Get the upload progress container element.
	 * 
	 * @return obj
	 */
	this.getUploadProgressContainerElement = function () {
		return document.getElementById('laramedia-listings-upload-progress-container');
	}

	/**
	 * Get the file preview template.
	 * 
	 * @param  obj  media
	 * @param  obj  file
	 * 
	 * @return obj
	 */
	this.getFilePreviewTemplate = function (media, file) {
		if (media.is_image) {
			var template = document.getElementById('laramedia-listings-image-template');
		} else {
			var template = document.getElementById('laramedia-listings-none-image-template');
		}

        if (template == null) {
            return;
        }

        return document.importNode(template.content, true);
	}

	/**
	 * Get the file error template.
	 * 
	 * @return obj
	 */
	this.getFileErrorTemplate = function () {
		var template = document.getElementById('laramedia-listings-error-template');

        if (template == null) {
            return;
        }

        return document.importNode(template.content, true);
	}
}

new Listings().init();
