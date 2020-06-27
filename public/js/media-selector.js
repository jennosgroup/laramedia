const Events = require('./components/events');
const Loader = require('./media-loader');
const Uploader = require('./media-uploader');

module.exports = function MediaSelector() {

    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * The loader instance.
     *
     * @var object
     */
    this.loader = new Loader;

    /**
     * The uploader instance.
     *
     * @var object
     */
    this.uploader = new Uploader;

    /**
     * The selector options.
     *
     * @var pbkect
     */
    this.options = {
        title: 'Select File',
        button_text: 'Select File',
        multiple: false,
        hide_type: false,
        hide_visibility: false,
        hide_ownership: false,
        hide_search: false,
    };

    /**
     * The files selected
     *
     * @var obj
     */
    this.filesSelected = null;

    /**
     * The last file selected.
     *
     * @var object|null
     */
    this.lastFileSelected = null;

    /**
     * An array containing the ids of the files selecte.
     *
     * @var array
     */
    this.filesSelectedOrder = [];

    /**
     * The loader options.
     *
     * @var object
     */
    this.loaderOptions = {};

    /**
     * The uploader options.
     *
     * @var object
     */
    this.uploaderOptions = {};

    /**
     * Initiate the selector.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.init = function (options) {
        this.options = window._.assign(this.options, options);
    }

    /**
     * Get the selector template.
     *
     * @return void
     */
    this.getTemplate = function () {
        return document.importNode(document.getElementById(this.getSelectorOption('template_id')).content, true);
    }

    /**
     * Close the selector.
     *
     * @return void
     */
    this.close = function () {
        document.getElementById(this.getSelectorOption('container_id')).remove();
        this.events.fire('selector-close');
    }

    /**
     * Open up the selector.
     *
     * @return void
     */
    this.open = function () {

        document.querySelector('body').appendChild(this.getTemplate());

        this.setHeaderTitle();
        this.setFooterButtonText();

        this.registerEvents();

        this.registerLoaderEvents();

        this.registerUploaderEvents();

        // Initiate the loader
        this.loader.init(this.getLoaderOptions());
        this.loader.loadFreshContent();

        if (this.options.hide_type) {
            this.loader.hideTypeFilter();
        } else {
            this.loader.showTypeFilter();
        }

        if (this.options.hide_visibility) {
            this.loader.hideVisibilityFilter();
        } else {
            this.loader.showVisibilityFilter();
        }

        if (this.options.hide_ownership) {
            this.loader.hideOwnershipFilter();
        } else {
            this.loader.showOwnershipFilter();
        }

        if (this.options.hide_search) {
            this.loader.hideSearchFilter();
        } else {
            this.loader.showSearchFilter();
        }

        this.events.fire('selector-opened');
    }

    /**
     * Select the files.
     *
     * @return void
     */
    this.selectFiles = function () {
        this.events.fire('files-selected', [this.filesSelected]);
        this.close();
    }

    /**
     * Register the selector events.
     *
     * @return void
     */
    this.registerEvents = function () {

        var self = this;

        // Uploader button
        document.querySelector(this.getSelectorOption('upload_button_identifier')).addEventListener('click', function (event) {
            self.uploader.init(self.getUploaderOptions());
            self.uploader.open();
        });

        // Close selector
        document.querySelector(this.getSelectorOption('close_button_identifier')).addEventListener('click', function (event) {
            self.close();
        });

        // Select files
        document.getElementById(this.getSelectorOption('select_files_button_id')).addEventListener('click', function (event) {
            self.selectFiles();
        });
    }

    /**
     * Register the loader events.
     *
     * @return void
     */
    this.registerLoaderEvents = function () {
        var self = this;

        // Things to do when file editor is opened
        this.loader.events.on('editor-opened', function () {
            self.loader.files_container_is_hidden = true;
            self.hideSelector();
        });

        // Things to do when the editor is closed
        this.loader.events.on('editor-closed', function () {
            self.loader.files_container_is_hidden = false;
            self.showSelector();
        });

        // When file is selected.
        this.loader.events.on('file-selected', (file) => {
            self.lastFileSelected = file;

            if (self.filesSelected == null) {
                self.filesSelected = {};
            }

            self.filesSelectedOrder.push(file);
            self.filesSelected[file.id] = file;

            // Make file selection button active
            document.getElementById(self.getSelectorOption('footer_title_button_id')).removeAttribute('disabled');
        });

        // When file is not selected.
        this.loader.events.on('file-deselected', (file) => {

            // If nothing left after file deselected, set back property as null
            if (self.filesSelected != null) {
                delete self.filesSelected[file.id];
                if (Object.keys(self.filesSelected).length == 0) {
                    self.filesSelected = null;
                }
            }

            // If the last selected file was deselected, look for the previously selected file
            // and set it as the last selected file.
            if (self.lastFileSelected != null && self.lastFileSelected.id == file.id) {
                if (self.filesSelectedOrder.length >= 1 && self.filesSelected != null) {
                    self.filesSelectedOrder.reverse().forEach(function (lastFile, index) {
                        if (self.filesSelected.hasOwnProperty(lastFile.id)) {
                            self.lastFileSelected = lastFile;
                            return false;
                        } else if ((self.filesSelectedOrder.length - 1) == index) {
                            self.lastFileSelected = null;
                        }
                    });
                } else {
                    self.lastFileSelected = null;
                }
            }

            // Disable files selector button
            if (self.filesSelected == null) {
                document.getElementById(self.getSelectorOption('footer_title_button_id')).setAttribute('disabled', true);
            }
        });
    }

    /**
     * Register the uploader events.
     *
     * @return void
     */
    this.registerUploaderEvents = function () {
        var self = this;

        // Things to do when uploader is opened
        this.uploader.events.on('uploader-opened', function () {
            self.loader.files_container_is_hidden = true;
            self.hideSelector();
        });

        // Things to do when the uploader is closed
        this.uploader.events.on('uploader-closed', function () {
            self.loader.files_container_is_hidden = false;
            self.showSelector();

            if (self.uploader.fileUploaded === true) {
                self.loader.loadFreshContent();
            }
        });

        // When upload complete
        this.uploader.events.on('upload-complete', (files) => {
            if (self.uploader.fileUploaded === true) {
                self.loader.setFilesToMarkAsSelected(self.loader.getFilesFromList(files));
            }
        });
    }

    /**
     * Set the loader options.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.setLoaderOptions = function (options) {
        this.loaderOptions = options;
    }

    /**
     * Set the uploader options.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.setUploaderOptions = function (options) {
        this.uploaderOptions = options;
    }

    /**
     * Get the loader options.
     *
     * @return obj
     */
    this.getLoaderOptions = function () {
        this.loaderOptions['is_in_modal'] = true;
        this.loaderOptions['select_multiple'] = this.options.multiple;
        return this.loaderOptions;
    }

    /**
     * Get the loader options.
     *
     * @return obj
     */
    this.getUploaderOptions = function () {
        return this.uploaderOptions;
    }

    /**
     * Get the files selected.
     *
     * @return obj
     */
    this.getFilesSelected = function () {
        return this.filesSelected;
    }

    /**
     * Get the last file selected.
     *
     * @return obj|null
     */
    this.getLastFileSelected = function () {
        return this.lastFileSelected;
    }

    /**
     * Hide the file selector.
     *
     * @return void
     */
    this.hideSelector = function () {
        document.getElementById(this.getSelectorOption('container_id')).style.display = 'none';
    }

    /**
     * Show the file selector.
     *
     * @return void
     */
    this.showSelector = function () {
        document.getElementById(this.getSelectorOption('container_id')).style.display = 'flex';
    }

    /**
     * Set the selector title.
     *
     * @return void
     */
    this.setHeaderTitle = function () {
        document.getElementById(this.getSelectorOption('header_title_id')).innerHTML = this.options.title;
    }

    /**
     * Set the footer button title.
     *
     * @return void
     */
    this.setFooterButtonText = function () {
        document.getElementById(this.getSelectorOption('footer_title_button_id')).innerHTML = this.options.button_text;
    }

    /**
     * Get an option from the selector.
     *
     * @param  mixed  option
     *
     * @return mixed
     */
    this.getSelectorOption = function (option) {
        var options = this.getDefaultOptions();
        if (! options.hasOwnProperty(option)) {
            return null;
        }
        return options[option];
    }

    /**
     * Get the default options for the selector.
     *
     * @return obj
     */
    this.getDefaultOptions = function () {
        return {
            template_id: 'laramedia-file-selector-template',
            container_id: 'laramedia-file-selector-container',
            upload_button_identifier: '#laramedia-file-selector-upload-button',
            close_button_identifier: '#laramedia-file-selector-close-button',
            header_title_id: 'laramedia-file-selector-header-title',
            footer_title_button_id: 'laramedia-select-files-button',
            select_files_button_id: 'laramedia-select-files-button',
        };
    }
}
