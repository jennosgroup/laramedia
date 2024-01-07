import Events from './events';
import Loader from './files-loader';

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
	 * @var obj
	 */
	this.lastSelectedFile = {};

	/**
	 * Start the files selector.
	 * 
	 * @return void
	 */
	this.start = function () {
		var self = this;

		this.open();

		this.registerEventHandlers();
		this.registerLoaderEvents();

		// Get options first then handle business after
        window.axios.get(this.getOptionsRoute()).then(function (response) {
			self.loader.setOptions(response.data).start();
		});
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
			self.close();
			self.events.fire('files_selected', [self.selectedFiles]);
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
			self.showFilePreview(file);
		});

		// Things to do when load is completed
		this.loader.events.on('load_complete', function (allFilesLoaded) {
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
        	if (this.classList.contains('laramedia-selector-selected')) {
        		this.classList.remove('laramedia-selector-selected');
        		self.handleFileDeselection(media);
        	} else {
        		this.classList.add('laramedia-selector-selected');
        		self.handleFileSelection(media);
        		self.events.fire('file_selected', [media]);
        	}
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

	this.handleFileSelection = function (file) {
		this.lastSelectedFile = file;
		this.selectedFiles[file.uuid] = file;
	}

	this.handleFileDeselection = function (file) {
		delete this.selectedFiles[file.uuid];
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

document.getElementById('select-featured-image').addEventListener('click', function (event) {
	var selector = new FilesSelector();

	selector.events.on('file_selected', function (file) {
		document.getElementById('featured-image-id').value = file.uuid;
		var image = document.getElementById('featured-image-preview');
		image.setAttribute('src', file.base64_url);
		image.classList.remove('hidden')

		document.getElementById('select-featured-image').classList.add('hidden');
		document.getElementById('remove-featured-image').classList.remove('hidden');
	});

	selector.start();
});

document.getElementById('remove-featured-image').addEventListener('click', function (event) {
	var image = document.getElementById('featured-image-preview');
	image.setAttribute('str', null);
	image.classList.add('hidden');

	document.getElementById('featured-image-id').value = null;
	document.getElementById('remove-featured-image').classList.add('hidden');
	document.getElementById('select-featured-image').classList.remove('hidden');
});
