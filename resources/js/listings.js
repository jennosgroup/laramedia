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

		// Disk filter
		document.getElementById('laramedia-filter-disk').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({disk: this.value});
		});

		// Visibility filter
		document.getElementById('laramedia-filter-visibility').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({visibility: this.value});
		});

		// Type filter
		document.getElementById('laramedia-filter-type').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({type: this.value});
		});

		// Ownership filter
		document.getElementById('laramedia-filter-ownership').addEventListener('change', function (event) {
			self.loader.loadContentFromParameters({ownership: this.value});
		});

		// Search filter
		document.getElementById('laramedia-filter-search').addEventListener('input', debounce(function (event) {
			self.loader.loadContentFromParameters({search: this.value});
		}));

		// Active Section filter
		document.getElementById('laramedia-filter-active-section-container').addEventListener('click', function (event) {
			document.querySelectorAll('.laramedia-filter-section-container').forEach(function (element) {
				element.classList.remove('laramedia-current-section');
			});

			this.classList.add('laramedia-current-section');

			self.loader.loadContentFromParameters({section: 'active'});
		});

		// Trash Section filter
		document.getElementById('laramedia-filter-trash-section-container').addEventListener('click', function (event) {
			document.querySelectorAll('.laramedia-filter-section-container').forEach(function (element) {
				element.classList.remove('laramedia-current-section');
			});
			
			this.classList.add('laramedia-current-section');

			self.loader.loadContentFromParameters({section: 'trash'});
		});

		// Load more
		document.getElementById('laramedia-files-load-more-btn').addEventListener('click', function (event) {
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

		// Clear files on first load
		this.loader.events.on('first_load_begin', function () {
			document.getElementById('laramedia-files-container').innerHTML = null;
			document.getElementById('laramedia-files-load-more-btn').classList.add('laramedia-hidden');
		});

		// Things to do when file has been loaded
		this.loader.events.on('file_loaded', function (file) {
			self.spinner.stop();

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
			self.files[media.uuid] = media;
			self.showFilePreview(media, true);
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
        var container = document.getElementById('laramedia-files-container');
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
        		if (! hasPreviousFile) {
        			return;
        		}

    			editor.close(file);
    			wrapper.previousElementSibling.querySelector('.laramedia-files-item-container').click();
        	});

        	// When the next file is requested from the editor
        	editor.events.on('next_file', function (file) {
        		if (! hasNextFile) {
        			return;
        		}

    			editor.close(file);
    			wrapper.nextElementSibling.querySelector('.laramedia-files-item-container').click();
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
	 * Get the file preview template.
	 * 
	 * @param  obj  media
	 * 
	 * @return void
	 */
	this.getFilePreviewTemplate = function (media) {
		var template = document.getElementById(this.getFilePreviewTemplateId(media));
		return document.importNode(template.content, true);
	}

	/**
	 * Get the file preview template.
	 * 
	 * @param  obj  media
	 * @param  obj  file
	 * 
	 * @return obj
	 */
	this.getFilePreviewTemplateId = function (media, file) {
		if (media.is_image) {
			return 'laramedia-files-image-template';
		}

		return 'laramedia-files-none-image-template';
	}
}

new Listings().init();
