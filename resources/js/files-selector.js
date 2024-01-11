import AxiosError from './axios-error';
import Events from './events';
import Loader from './files-loader';
import Lodash from 'lodash';
import Swal from 'sweetalert2';

export default function FilesSelector() {
	/**
	 * The events instance.
	 * 
	 * @var obj
	 */
	this.events = new Events();

	/**
	 * The loader instance.
	 * 
	 * @var obj
	 */
	this.loader = new Loader();

	/**
	 * The queue for the loaded and uploaded files.
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
	 * The queue for the uploaded files.
	 * 
	 * @var obj
	 */
	this.uploadedFiles = {};

	/**
	 * The selected files queue.
	 * 
	 * @var obj
	 */
	this.selectedFiles = {};

	/**
	 * The last file selected.
	 * 
	 * @var obj|null
	 */
	this.lastSelectedFile = null;

	/**
	 * Keep track of the order for the files selected.
	 * 
	 * @var array.
	 */
	this.filesSelectedOrder = [];

	/**
	 * The options.
	 * 
	 * @var obj
	 */
	this.options = {
		hide_disk: false,
		hide_visibility: false,
		hide_type: false,
		hide_ownership: false,
		select_multiple: true,
	};

	/**
	 * Start the files selector.
	 * 
	 * @return void
	 */
	this.start = function () {
		var self = this;

        window.axios.get(this.getOptionsRoute()).then(function (response) {
        	self.loader.setOptions(Lodash.assign(response.data, self.options));

			self.open();
			self.registerEventHandlers();
			self.registerLoaderEvents();
			self.configure();

			self.loader.start();
		}).catch(function (response) {
			new AxiosError.handleError(response);
		});
	}

	/**
	 * Open the files selector.
	 * 
	 * @return void
	 */
	this.open = function () {
		document.querySelector('body').append(this.getTemplate());
	}

	/**
	 * Close the selector.
	 * 
	 * @return void
	 */
	this.close = function () {
		document.getElementById('laramedia-selector-wrapper').remove();
	}

	/**
	 * Register the event handlers.
	 * 
	 * @return void
	 */
	this.registerEventHandlers = function () {
		var self = this;

		// When the close button is hit
		document.getElementById('laramedia-selector-close').addEventListener('click', function(event) {
			self.close();
		});

		// When the load more button is clicked
		document.getElementById('laramedia-files-load-more-btn').addEventListener('click', function (event) {
			self.loader.loadContent();
		});

		// When select files button is clicked
		document.getElementById('laramedia-selector-select-files').addEventListener('click', function (event) {
			if (Object.keys(self.selectedFiles).length >= 1) {
				self.events.fire('file_selected', [self.lastSelectedFile]);
				self.events.fire('files_selected', [self.selectedFiles]);
				return self.close();
			}

			return Swal.fire({
				icon: 'error',
                title: 'Error',
                text: 'No file selected',
			});
		});

		// Disk filter
		document.getElementById('laramedia-filter-disk').addEventListener('change', function (event) {
			self.loader.setRequestParameters({
				disk: this.value,
			}).loadFreshContent();
		});

		// Visibility filter
		document.getElementById('laramedia-filter-visibility').addEventListener('change', function (event) {
			self.loader.setRequestParameters({
				visibility: this.value,
			}).loadFreshContent();
		});

		// Type filter
		document.getElementById('laramedia-filter-type').addEventListener('change', function (event) {
			self.loader.setRequestParameters({
				type: this.value,
			}).loadFreshContent();
		});

		// Ownership filter
		document.getElementById('laramedia-filter-ownership').addEventListener('change', function (event) {
			self.loader.setRequestParameters({
				ownership: this.value,
			}).loadFreshContent();
		});

		// Search filter
		document.getElementById('laramedia-filter-search').addEventListener('change', function (event) {
			self.loader.setRequestParameters({
				search: this.value,
			}).loadFreshContent();
		});
	}

	/**
	 * Register the loader events.
	 * 
	 * @return void
	 */
	this.registerLoaderEvents = function () {
		var self = this;

		// Clear files on first load
		this.loader.events.on('first_load_begin', function () {
			document.getElementById('laramedia-files-container').innerHTML = null;
			document.getElementById('laramedia-files-load-more-btn').classList.add('laramedia-hidden');
		});

		// Things to do when file has been loaded
		this.loader.events.on('file_loaded', function (file) {
			self.files[file.uuid] = file;
			self.loadedFiles[file.uuid] = file;

			document.getElementById('laramedia-no-files-container').classList.add('laramedia-hidden');

			self.showFilePreview(file);
		});

		// Things to do when load is completed
		this.loader.events.on('load_complete', function (allFilesLoaded, recentFilesQueue, recentFilesCount) {
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
	 * Configure some stuff.
	 * 
	 * @return void
	 */
	this.configure = function () {
		if (this.options.hasOwnProperty('disk') || this.options.hide_disk == true) {
			document.getElementById('laramedia-filter-disk').parentElement.remove();
		}

		if (this.options.hasOwnProperty('visibility') || this.options.hide_visibility == true) {
			document.getElementById('laramedia-filter-visibility').parentElement.remove();
		}

		if (this.options.hasOwnProperty('type') || this.options.hide_type == true) {
			document.getElementById('laramedia-filter-type').parentElement.remove();
		}

		if (this.options.hasOwnProperty('ownership') || this.options.hide_ownership == true) {
			document.getElementById('laramedia-filter-ownership').parentElement.remove();
		}
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

		// When the file is clicked
        template.querySelector('.laramedia-files-item-container').addEventListener('click', function (event) {
        	self.handleFileClick(media, this, event);
        });

        // Show image preview or file preview
        if (media.file_type == 'image') {
            template.querySelector('.laramedia-files-image').src = media.base64_url;
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
	 * Handle the file click.
	 * 
	 * @param  obj  media
	 * @param  obj  element
	 * @param  obj  event
	 * 
	 * @return void
	 */
	this.handleFileClick = function (media, element, event) {
		if (element.classList.contains('laramedia-selector-selected')) {
    		element.classList.remove('laramedia-selector-selected');
    		element.querySelector('.laramedia-selector-overlay').classList.add('laramedia-hidden');

    		return this.handleFileDeselection(media);
    	}

    	if (! this.options.select_multiple) {
    		this.filesSelectedOrder = [];
    		this.selectedFiles = {};
    		this.lastSelectedFile = null;

    		document.querySelectorAll('.laramedia-files-item-container').forEach(function (element) {
    			element.classList.remove('laramedia-selector-selected');
    			element.querySelector('.laramedia-selector-overlay').classList.add('laramedia-hidden');
    		});
    	}

		element.classList.add('laramedia-selector-selected');
    	element.querySelector('.laramedia-selector-overlay').classList.remove('laramedia-hidden');

    	this.handleFileSelection(media);
	}

	/**
	 * Handle the file selection.
	 * 
	 * @param  obj  file
	 * 
	 * @return void
	 */
	this.handleFileSelection = function (file) {
		this.lastSelectedFile = file;
		this.selectedFiles[file.uuid] = file;
		this.filesSelectedOrder.push(file);
	}

	/**
	 * Handle the file deselection.
	 * 
	 * @param  obj  file
	 * 
	 * @return void
	 */
	this.handleFileDeselection = function (file) {
		var self = this;

		// Remove file from the selected queue
		delete this.selectedFiles[file.uuid];

		// If the file deselected was not the last file selected, we don't need to do anything
		if (this.lastSelectedFile.uuid != file.uuid) {
        	return;
        }

        // If no files are left in the queue, it means the last file has been deselected
        if (Object.keys(this.selectedFiles).length < 1) {
        	return this.lastSelectedFile = null;
        }

		/**
		 * If the last selected file was deselected, look for the previously selected file
         * and set it as the last selected file.
         */
      	this.filesSelectedOrder.reverse().forEach(function (lastFile, index) {
            if (self.selectedFiles.hasOwnProperty(lastFile.uuid)) {
                self.lastSelectedFile = lastFile;
                return false;
            }
        });
	}

	/**
	 * Get the file preview template.
	 * 
	 * @param  obj  media
	 * 
	 * @return obj
	 */
	this.getFilePreviewTemplate = function (media) {
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
	 * Get the template.
	 * 
	 * @return obj
	 */
	this.getTemplate = function () {
		var template = document.getElementById('laramedia-files-selector-template');

		if (template == null) {
			return;
		}

		return document.importNode(template.content, true);
	}

    /**
     * Get the options route.
     * 
     * @return string
     */
    this.getOptionsRoute = function () {
        return document.head.querySelector("meta[name='laramedia_options_route']").content;
    }
}

if (! window.hasOwnProperty('laramedia')) {
	window.laramedia = {};
}

window.laramedia.selector = FilesSelector;
