import Editor from './file-editor';
import Loader from './files-loader';
import Uploader from './files-uploader';
import Routes from './support/routes';
import debounce from './support/debounce';
import Spin from './support/spin';

function Listings() {
	/**
	 * The loader instance.
	 * 
	 * @var obj
	 */
	this.loader = new Loader();

	/**
	 * The uploader instance.
	 * 
	 * @var obj
	 */
	this.uploader = new Uploader();

	/**
	 * The spinner instance.
	 * 
	 * @var obj
	 */
	this.spinner = new Spin();

	/**
	 * The files queue for both the loaded and uploaded files.
	 * 
	 * @var obj
	 */
	this.files = {};

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

		this.spinner.start();

        window.axios.get(new Routes().getOptionsRoute()).then(function (response) {
            self.setOptions(response.data);

			self.registerEventHandlers();
			self.registerLoaderEventHandlers();
			self.registerUploaderEventHandlers();

			self.loader.start();
			self.uploader.init();
        });
	}

    /**
     * Set the options.
     * 
     * @param  obj  options
     * 
     * @return this
     */
    this.setOptions = function (options) {
        if (typeof options == 'undefined' || options == null || options == '') {
            return this;
        }

        if (Object.keys(options).length < 1) {
            return this;
        }

        for (var key in options) {
            this.options[key] = options[key];
        }

        return this;
    }

	/**
	 * Register the events handlers.
	 * 
	 * @return void
	 */
	this.registerEventHandlers = function () {
		var self = this;

		// Show the uploader when the add files button is clicked
		document.getElementById('laramedia-files-trigger-dropzone').addEventListener('click', function (event) {
			document.getElementById('laramedia-uploader-dropzone').classList.remove('laramedia-hidden'); 
		});

		// Hide the uploader when it is clicked to close
		document.querySelector('.laramedia-uploader-dropzone-close').addEventListener('click', function (event) {
			event.preventDefault();
			event.stopPropagation();

			event.target.closest('.laramedia-uploader-dropzone').classList.add('laramedia-hidden');
		});

		// Hide the error section when X is clicked. Also remove the errors
		document.getElementById('laramedia-files-error-close').addEventListener('click', function (event) {
			this.parentElement.classList.add('laramedia-hidden');

			// Remove the errors
			document.querySelectorAll('.laramedia-files-error').forEach(function (element) {
				element.remove();
			});
		})

		// Load more
		document.getElementById('laramedia-files-load-more-btn').addEventListener('click', function (event) {
			self.loader.loadContent();
		});

		// Disk filter
		document.getElementById('laramedia-filter-disk').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({
				disk: this.value,
			});
		});

		// Visibility filter
		document.getElementById('laramedia-filter-visibility').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({
				visibility: this.value,
			});
		});

		// Type filter
		document.getElementById('laramedia-filter-type').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({
				type: this.value,
			});
		});

		// Ownership filter
		document.getElementById('laramedia-filter-ownership').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({
				ownership: this.value,
			});
		});

		// Search filter
		document.getElementById('laramedia-filter-search').addEventListener('input', debounce(function (event) {
			self.loader.loadContentFromParameters({
				search: this.value,
			});
		}));

		// Active Section filter
		document.getElementById('laramedia-filter-active-section-container').addEventListener('click', function (event) {
			document.querySelectorAll('.laramedia-filter-section-container').forEach(function (element) {
				element.classList.remove('laramedia-current-section');
			});

			this.classList.add('laramedia-current-section');

			self.loader.loadContentFromParameters({
				section: 'active',
			});
		});

		// Trash Section filter
		document.getElementById('laramedia-filter-trash-section-container').addEventListener('click', function (event) {
			document.querySelectorAll('.laramedia-filter-section-container').forEach(function (element) {
				element.classList.remove('laramedia-current-section');
			});
			
			this.classList.add('laramedia-current-section');

			self.loader.loadContentFromParameters({
				section: 'trash',
			});
		});
	}

	/**
	 * Register the loader event handlers.
	 * 
	 * @return void
	 */
	this.registerLoaderEventHandlers = function () {
		var self = this;

		// Clear files on first load
		this.loader.events.on('first_load_begin', function () {
			document.getElementById('laramedia-files-container').innerHTML = null;
			document.getElementById('laramedia-files-load-more-btn').classList.add('laramedia-hidden');
		});

		// Things to do when file has been loaded
		this.loader.events.on('file_loaded', function (file) {
			self.spinner.stop();

			self.loadedFiles[file.uuid] = file;
			self.files[file.uuid] = file;

			document.getElementById('laramedia-no-files-container').classList.add('laramedia-hidden');

			self.showFilePreview(file);
		});

		// Things to do when load is completed
		this.loader.events.on('load_complete', function (allFilesLoaded, recentFilesQueue, recentFilesCount) {
			self.spinner.stop();

			if (recentFilesCount == 0) {
				document.getElementById('laramedia-no-files-container').classList.remove('laramedia-hidden');
			}

			if (! allFilesLoaded) {
				document.getElementById('laramedia-files-load-more-btn').classList.remove('laramedia-hidden');
			}
		});

		// Things to do when the last load is completed
		this.loader.events.on('last_load_complete', function () {
			document.getElementById('laramedia-files-load-more-btn').classList.add('laramedia-hidden');
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
		template.querySelector('.laramedia-files-item-wrapper').setAttribute('file_id', media.uuid);

		// Enable the file editor when file preview is clicked
        template.querySelector('.laramedia-files-item-container').addEventListener('click', function (event) {
        	var wrapper = event.target.closest('.laramedia-files-item-wrapper');
        	var hasPreviousFile = (wrapper.previousElementSibling != null);
        	var hasNextFile = (wrapper.nextElementSibling != null);

        	var editor = new Editor();

        	// When the editor previous file button is clicked
        	editor.events.on('previous_file', function (file) {
        		if (hasPreviousFile) {
        			editor.close(file);
        			wrapper.previousElementSibling.querySelector('.laramedia-files-item-container').click();
        		}
        	});

        	// When the next file is requested from the editor
        	editor.events.on('next_file', function (file) {
        		if (hasNextFile) {
        			editor.close(file);
        			wrapper.nextElementSibling.querySelector('.laramedia-files-item-container').click();
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
            template.querySelector('.laramedia-files-image').src = media.display_url;
        } else {
        	template.querySelector('.laramedia-files-item-name').innerHTML = media.original_name;
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
		template.querySelector('.laramedia-files-error-remove').addEventListener('click', function (event) {
			this.parentElement.parentElement.remove();

			if (self.getErrorsContainerElement().querySelectorAll('.laramedia-files-error').length == 0) {
				self.getErrorsContainerElement().style.display = 'none';
			}
		});

		template.querySelector('.laramedia-files-error-name').innerHTML = file.name;

		if (response.hasOwnProperty('response')) {
			template.querySelector('.laramedia-files-error-reason').innerHTML = response.response.data.message;
		} else {
			template.querySelector('.laramedia-files-error-reason').innerHTML = response.messages.join(' ');
		}

		container.classList.remove('laramedia-hidden');
		
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
		template.querySelector('.laramedia-files-error-remove').addEventListener('click', function (event) {
			this.parentElement.parentElement.remove();

			if (self.getErrorsContainerElement().querySelectorAll('.laramedia-files-error').length == 0) {
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

		template.querySelector('.laramedia-files-error-name').innerHTML = file.name;
		template.querySelector('.laramedia-files-error-reason').innerHTML = reason;

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

		document.getElementById('laramedia-files-upload-message').style.display = 'none';

		var unitsElement = document.getElementById('laramedia-files-upload-progress-units');
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

		document.getElementById('laramedia-files-upload-progress-units').style.display = 'none';

		document.getElementById('laramedia-files-upload-message').style.display = 'flex';
	}

	/**
	 * Get the files container element.
	 * 
	 * @return obj
	 */
	this.getFilesContainerElement = function () {
		return document.getElementById('laramedia-files-container');
	}

	/**
	 * Get the errors container element.
	 * 
	 * @return obj
	 */
	this.getErrorsContainerElement = function () {
		return document.getElementById('laramedia-files-errors-container');
	}

	/**
	 * Get the upload progress container element.
	 * 
	 * @return obj
	 */
	this.getUploadProgressContainerElement = function () {
		return document.getElementById('laramedia-files-upload-progress-container');
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
			var template = document.getElementById('laramedia-files-image-template');
		} else {
			var template = document.getElementById('laramedia-files-none-image-template');
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
		var template = document.getElementById('laramedia-files-error-template');

        if (template == null) {
            return;
        }

        return document.importNode(template.content, true);
	}
}

new Listings().init();
