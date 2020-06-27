const AjaxError = require('./components/ajax-error');
const Spinner = require('./components/spinner');
const Crud = require('./media-crud');
const Events = require('./components/events');
const CancelToken = window.axios.CancelToken;
const CancelTokenSource = CancelToken.source();
const Swal = require('sweetalert2');

module.exports = function MediaLoader() {

    /**
     * The ajax error instance.
     *
     * @var object
     */
    this.ajaxError = new AjaxError;

    /**
     * The spinner instance.
     *
     * @var object
     */
    this.spinner = new Spinner;

    /**
     * The crud instance.
     *
     * @var object
     */
    this.crud = new Crud;

    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * The options.
     *
     * @var object
     */
    this.options = {
        select_multiple: true,
        is_in_modal: false,
        no_files_container_id: 'laramedia-no-files-container',
        files_container_id: 'laramedia-files-container',
        files_scrollable_container_id: 'laramedia-files-container',
        single_image_template_id: 'laramedia-template-item-image',
        single_file_template_id: 'laramedia-template-item-file',
        file_container_class: 'laramedia-item-container',
        file_inner_container_class: 'laramedia-item-inner-container',
        file_image_preview_class: 'laramedia-item-preview-image',
        file_name_class: 'laramedia-item-file-name',
        file_checkbox_container_class: 'laramedia-item-checkbox-container',
        file_checkbox_class: 'laramedia-item-checkbox',
        file_checkbox_name: 'laramedia_checked_items',
        file_id_attribute: 'media-id',
        file_state_attribute: 'media-state',
    };

    /**
     * The bulk action options.
     *
     * @var object
     */
    this.bulkActionOptions = {
        bulk_select_box_class: 'laramedia-bulk-select-box',
        active_bulk_options_container_id: 'laramedia-active-bulk-options-container',
        trash_bulk_options_container_id: 'laramedia-trash-bulk-options-container',
    };

    /**
     * The filter options.
     *
     * @var object
     */
    this.filterOptions = {
        type_select_box_id: 'laramedia-type-select-box',
        visibility_select_box_id: 'laramedia-visibility-select-box',
        ownership_select_box_id: 'laramedia-ownership-select-box',
        active_filter_container_id: 'laramedia-active-icon-container',
        trash_filter_container_id: 'laramedia-trash-icon-container',
        search_input_id: 'laramedia-search',
    };

    /**
     * The file editor options.
     *
     * @var object
     */
    this.editorOptions = {
        close_button_identifier: '#laramedia-file-editor-close-button',
        previous_button_identifier: '[laramedia-bar-label="previous"]',
        next_button_identifier: '[laramedia-bar-label="next"]',
        save_button_identifier: '[laramedia-bar-label="save"]',
        trash_button_identifier: '[laramedia-bar-label="trash"]',
        restore_button_identifier: '[laramedia-bar-label="restore"]',
        delete_button_identifier: '[laramedia-bar-label="delete"]',
        template_id: 'laramedia-file-editor-template',
        container_id: 'laramedia-file-editor-container',
        body_left_id: 'laramedia-file-editor-body-left',
        disable_fields_on_trash_class: 'laramedia-disable-on-trash',
        public_path_identifier: "[editor-title='public_path']",
        button_links_container_id: 'laramedia-buttons-container',
    };

    /**
     * The parameters for when we are sending off a load request.
     *
     * @var object
     */
    this.loadFilters = {
        page: 0,
        type: null,
        visibility: null,
        ownership: null,
        section: 'active',
        search: null,
    };

    /**
     * Whether we have attempted an initial load.
     *
     * @var bool
     */
    this.hasAttemptedInitialLoad = false;

    /**
     * Whether content is currently loading.
     *
     * @var bool
     */
    this.isLoadingContent = false;

    /**
     * The queue to store the loaded files.
     *
     * @var object
     */
    this.filesQueue = {};

    /**
     * The last load response returned from the server.
     *
     * @var object
     */
    this.lastResponse = {};

    /**
     * Indicate whether the files container is hidden.
     *
     * @var bool
     */
    this.files_container_is_hidden = false;

    /**
     * The files to mark as selected when they are loaded.
     *
     * @var array
     */
    this.preSelectedFileIds = [];

    /**
     * To store the axios cancel instance.
     *
     * @var obj|null
     */
    this.cancel = null;

    /**
     * The danger hex color.
     *
     * @var string
     */
    this.swalDangerHex = '#C0392B';

    /**
     * Initiate the loader.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.init = function (options) {

        // Set the options
        this.handleInitOptions(options);

        // Register the loader events
        this.registerEvents();

        // Bulk Actions
        this.registerBulkEvents();

        // Filters
        this.registerFiltersEvents();

        // File Editor
        this.registerFileEditorCrudEvents();
    }

    /**
     * Handle the options passed to init.
     *
     * @param  object  options
     *
     * @return void
     */
    this.handleInitOptions = function (options) {
        var self = this;
        for (var key in options) {
            if (! options.hasOwnProperty(key)) {
                return;
            }
            if (key == 'filter_default_type') {
                self.loadFilters.type = options[key];
            }
            if (key == 'filter_default_visibility') {
                self.loadFilters.visibility = options[key];
            }
            if (key == 'filter_default_ownership') {
                self.loadFilters.ownership = options[key];
            }
            if (key == 'filter_default_section') {
                self.loadFilters.section = options[key];
            }
            if (key == 'filter_default_search') {
                self.loadFilters.search = options[key];
            }
        }
        this.options = window._.assign(this.options, options);
    }

    /**
     * Register the loader event handlers.
     *
     * @return void
     */
    this.registerEvents = function () {
        var self = this;

        window.addEventListener('scroll', this.debounce(function () {
            (self.shouldLoadMoreContent() == true ? self.loadContent() : null);
        }, 250));

        window.addEventListener('resize', this.debounce(function () {
            (self.shouldLoadMoreContent() == true ? self.loadContent() : null);
        }, 250));

        if (this.options.is_in_modal) {
            document.getElementById(this.options.files_container_id).addEventListener('scroll', this.debounce(function () {
                (self.shouldLoadMoreContent() == true ? self.loadContent() : null);
            }, 250));

            document.getElementById(this.options.files_container_id).addEventListener('resize', this.debounce(function () {
                (self.shouldLoadMoreContent() == true ? self.loadContent() : null);
            }, 250));
        }
    }

    /**
     * Load up content. This bulds upon the loadFilters property.
     *
     * @return void
     */
    this.loadContent = function () {

        var self = this;

        this.spinner.start();

        this.hasAttemptedInitialLoad = true;

        this.isLoadingContent = true;

        this.loadFilters.page = this.loadFilters.page + 1;

        var url = document.head.querySelector("meta[name='media-files-route']").getAttribute('content');

        var request = window.axios.get(url, {
            cancelToken: new CancelToken(function executor(c) {
                self.cancel = c;
            }),
            params: self.loadFilters,
        });

        request.then(function (response) {
            self.lastResponse = response.data;
            self.processLoadedFiles(response.data);
        });

        request.catch(function (error) {
            self.ajaxError.handleError(error);
        });

        request.then(function () {
            self.spinner.stop();
            self.isLoadingContent = false;
            if (self.shouldLoadMoreContent()) {
                self.loadContent();
            }
        });
    }

    /**
     * Load up content from the start.
     *
     * @return void
     */
    this.loadFreshContent = function () {
        this.loadFilters.page = 0;
        this.hasAttemptedInitialLoad = false;
        this.lastResponse = {};
        this.filesQueue = {};

        if (this.cancel != null) {
            this.cancel();
        }

        this.clearFilesContainer();

        this.loadContent();
    }

    /**
     * Load content from a given filter.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.loadContentFromFilter = function (options) {
        this.loadFilters = window._.assign(this.loadFilters, options);
        this.loadFreshContent();
    }

    /**
     * Check whether more content should be loaded.
     *
     * @return bool
     */
    this.shouldLoadMoreContent = function () {
        if (this.files_container_is_hidden) {
            return false;
        }

        if (this.isLoadingContent) {
            return false;
        }

        if (! this.hasAttemptedInitialLoad) {
            return true;
        }

        // This means the last load didn't contain anything
        if (! this.lastResponse.hasOwnProperty('data')) {
            return false;
        }

        // If we're already on the last page, then no need to load again
        if (this.lastResponse['meta']['last_page'] == this.loadFilters.page) {
            return false;
        }

        if (this.shouldLoadMoreIfFileIsOpen()) {
            console.log('here');
            return true;
        }

        if (this.shouldLoadMoreContentBasedOnContainerHeight()) {
            return true;
        }

        return false;
    }

    /**
     * Check whether we should load more content based on the files container current height.
     *
     * @return bool
     */
    this.shouldLoadMoreContentBasedOnContainerHeight = function () {

        var windowHeight = window.outerHeight;
        var containerHeight = document.getElementById(this.options.files_container_id).scrollHeight;
        var containerTop = document.getElementById(this.options.files_container_id).offsetTop;
        var containerScrollTop = document.getElementById(this.options.files_container_id).scrollTop;

        // If the bottom of the files container is within view, we scroll
        if (! this.options.is_in_modal && containerHeight <= (window.scrollY + window.outerHeight + 900)) {
            return true;
        }

        var viewableHeight = windowHeight - containerTop - 250;
        var unviewableHeight = containerHeight - containerScrollTop - viewableHeight;

        if (this.options.is_in_modal && containerHeight <= viewableHeight) {
            return true;
        }

        if (this.options.is_in_modal && unviewableHeight < 900) {
            return true;
        }

        return false;
    }

    /**
     * Process the loaded files.
     *
     * @param  obj  response
     *
     * @return void
     */
    this.processLoadedFiles = function (response) {

        var self = this;

        if (this.loadFilters.page == 1 && response.meta.total >= 1) {
            this.hideNoFilesContainer();
            this.showFilesContainer();
        }

        if (this.loadFilters.page == 1 && response.meta.total < 1) {
            this.showNoFilesContainer();
            this.hideFilesContainer();
        }

        response.data.forEach(function (media) {
            self.setFileInQueue(media);
            if (media.type == 'image') {
                return self.processLoadedImage(media);
            }
            self.processLoadedFile(media);
        });
    }

    /**
     * Process the loaded image.
     *
     * @param  obj  response
     *
     * @return void
     */
    this.processLoadedImage = function (media) {

        var self = this;

        var id = 'laramedia-media-item-' + media.id;

        // Get the template for the markup
        var template = document.importNode(
            document.getElementById(this.options.single_image_template_id).content, true
        );

        // Set an id on the fly
        template.querySelector('.'+this.options.file_container_class).setAttribute('id', id);

        // Add the image preview
        template.querySelector('.'+this.options.file_image_preview_class).setAttribute('src', media.thumbnail_path);

        // Add the id as an attribute
        template.querySelector('.'+this.options.file_container_class).setAttribute(this.options.file_id_attribute, media.id);

        // Add the file id to the checkbox
        template.querySelector('.'+this.options.file_checkbox_class).value = media.id;
        template.querySelector('.'+this.options.file_checkbox_class).setAttribute('id', 'laramedia-file-checkbox-'+media.id);

        // Mark as preselected
        if (this.preSelectedFileIds.indexOf(media.id) != '-1') {
            self.events.fire('file-selected', [media]);
            template.querySelector('.'+this.options.file_checkbox_class).setAttribute('checked', true);
            template.querySelector('.'+this.options.file_checkbox_class).parentElement.style.display = 'flex';
        }

        // Hover over file
        template.querySelector('.'+this.options.file_container_class).addEventListener('mouseenter', function (event) {
            event.srcElement.lastElementChild.style.display = 'flex';
        });

        // Mouse leave file
        template.querySelector('.'+this.options.file_container_class).addEventListener('mouseleave', function (event) {
            if (event.srcElement.lastElementChild.querySelector('input').checked == false) {
                event.srcElement.lastElementChild.style.display = 'none';
                event.srcElement.classList.remove('laramedia-file-selected');
            } else {
                event.srcElement.classList.add('laramedia-file-selected');
            }
        });

        // Checkbox
        template.querySelector('.'+this.options.file_checkbox_class).addEventListener('change', function (event) {
            var file = self.getFileFromQueue(this.value);

            // If multiple selection not allowed, de select all previously selected files
            if (this.checked && self.options.select_multiple === false) {
                document.querySelectorAll('.'+self.options.file_checkbox_class).forEach(function (element) {
                    if (element.value != file.id && element.checked == true) {
                        element.checked = false;
                        self.events.fire('file-deselected', [self.getFileFromQueue(element.value)]);
                    }
                });
            }

            // Fire file deelected event
            if (! this.checked) {
                self.events.fire('file-deselected', [file]);
            }

            // Fire file is selected event when item is checked
            if (this.checked) {
                self.events.fire('file-selected', [file]);
            }
        });

        // Open the editor when file is clicked
        template.querySelector('.'+this.options.file_inner_container_class).addEventListener('click', function (event) {
            self.openEditor(event.srcElement.parentElement.parentElement);
        });

        document.getElementById(this.options.files_container_id).appendChild(template);
    }

    /**
     * Process the loaded none image file.
     *
     * @param  obj  media
     *
     * @return void
     */
    this.processLoadedFile = function (media) {

        var self = this;

        var id = 'laramedia-media-item-' + media.id;

        // Get the file template
        var template = document.importNode(
            document.getElementById(this.options.single_file_template_id).content, true
        );

        template.querySelector('.'+this.options.file_container_class).setAttribute('id', id);

        // Add the file name
        template.querySelector('.'+this.options.file_name_class).appendChild(
            document.createTextNode(media.name)
        );

        // Add the id as an attribute
        template.querySelector('.'+this.options.file_container_class).setAttribute(this.options.file_id_attribute, media.id);

        // Add the id to the checkbox
        template.querySelector('.'+this.options.file_checkbox_class).value = media.id;
        template.querySelector('.'+this.options.file_checkbox_class).setAttribute('id', 'laramedia-file-checkbox-'+media.id);

        // Mark as preselected
        if (this.preSelectedFileIds.indexOf(media.id) != '-1') {
            self.events.fire('file-selected', [media]);
            template.querySelector('.'+this.options.file_checkbox_class).setAttribute('checked', true);
            template.querySelector('.'+this.options.file_checkbox_class).parentElement.style.display = 'flex';
        }

        // Add the preview image
        template.querySelector('.'+this.options.file_image_preview_class).setAttribute('src', media.icon_url);

        // Hover over file
        template.querySelector('.'+this.options.file_container_class).addEventListener('mouseenter', function (event) {
            event.srcElement.lastElementChild.style.display = 'flex';
        });

        // Mouseleave file
        template.querySelector('.'+this.options.file_container_class).addEventListener('mouseleave', function (event) {
            if (event.srcElement.lastElementChild.querySelector('input').checked == false) {
                event.srcElement.lastElementChild.style.display = 'none';
                event.srcElement.classList.remove('laramedia-file-selected');
            } else {
                event.srcElement.classList.add('laramedia-file-selected');
            }
        });

        // Checkbox
        template.querySelector('.'+this.options.file_checkbox_class).addEventListener('change', function (event) {
            var file = self.getFileFromQueue(this.value);

            // If multiple selection not allowed, de select all previously selected files
            if (this.checked && self.options.select_multiple === false) {
                document.querySelectorAll('.'+self.options.file_checkbox_class).forEach(function (element) {
                    if (element.value != file.id && element.checked == true) {
                        element.checked = false;
                        self.events.fire('file-deselected', [self.getFileFromQueue(element.value)]);
                    }
                });
            }

            // Fire file deelected event
            if (! this.checked) {
                self.events.fire('file-deselected', [file]);
            }

            // Fire file is selected event when item is checked
            if (this.checked) {
                self.events.fire('file-selected', [file]);
            }
        });

        // Open the editor when file is clicked
        template.querySelector('.'+this.options.file_inner_container_class).addEventListener('click', function (event) {
            if (event.srcElement.className == 'laramedia-item-file-icon' || event.srcElement.className == 'laramedia-item-file-name-container') {
                self.openEditor(event.srcElement.parentElement.parentElement);
            } else {
                self.openEditor(event.srcElement.parentElement.parentElement.parentElement);
            }
        });

        document.getElementById(this.options.files_container_id).appendChild(template);
    }

    /**
     * Get the file from the queue.
     *
     * @param  int  fileId
     *
     * @return obj
     */
    this.getFileFromQueue = function (fileId) {
        return this.filesQueue[fileId];
    }

    /**
     * Set the file in the queue.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.setFileInQueue = function (file) {
        this.filesQueue[file.id] = file;
    }

    /**
     * Remove the file from queue.
     *
     * @param  obj  fileId
     *
     * @return void
     */
    this.removeFileFromQueue = function (fileId) {
        delete this.filesQueue[fileId];
    }

    /**
     * Check if the files queue is empty.
     *
     * @return void
     */
    this.filesQueueIsEmpty = function () {
        return Object.keys(this.filesQueue).length === 0;
    }

    /**
     * Remove a file from view.
     *
     * @param  int  fileId
     *
     * @return void
     */
    this.removeFileFromView = function (fileId) {
        document.querySelector("["+this.options.file_id_attribute+"='"+fileId+"']").remove();
    }

    /**
     * Show the no files container.
     *
     * @return void
     */
    this.showNoFilesContainer = function () {
        document.getElementById(this.options.no_files_container_id).style.display = 'flex';
    }

    /**
     * Hide the no files container.
     *
     * @return void
     */
    this.hideNoFilesContainer = function () {
        document.getElementById(this.options.no_files_container_id).style.display = 'none';
    }

    /**
     * Show the files container.
     *
     * @return void
     */
    this.showFilesContainer = function () {
        document.getElementById(this.options.files_container_id).style.display = 'flex';
    }

    /**
     * Hide the files container.
     *
     * @return void
     */
    this.hideFilesContainer = function () {
        document.getElementById(this.options.files_container_id).style.display = 'none';
    }

    /**
     * Clear the files container.
     *
     * @return void
     */
    this.clearFilesContainer = function () {
        document.getElementById(this.options.files_container_id).innerHTML = '';
    }

    /**
     * Get the checked ids.
     *
     * @return array
     */
    this.getCheckedIds = function () {
        var ids = [];

        document.querySelectorAll('.'+this.options.file_checkbox_class).forEach(function (element) {
            if (element.checked == true) {
                ids.push(element.getAttribute('value'));
            }
        });

        return ids;
    }

    /**
     * Get the files for a given set of ids.
     *
     * @param  array  fileIds
     *
     * @return array
     */
    this.getFilesFromIds = function (fileIds) {

        var self = this;

        var list = [];

        fileIds.forEach(function (fileId) {
            list.push(self.getFileFromQueue(fileId));
        });

        return list;
    }

    /**
     * Get the files from a given list.
     *
     * @param  object  files
     *
     * @return array
     */
    this.getFilesFromList = function (files) {

        var self = this;

        var list = [];

        for (var key in files) {
            if (! files.hasOwnProperty(key)) {
                return;
            }
            list.push(files[key]);
        }

        return list;
    }

    /**
     * Mark files as checked.
     *
     * @param  array  files  An array of files or an array of file ids
     *
     * @return void
     */
    this.markFilesAsSelected = function (files) {
        var self = this;

        files.forEach(function (file) {
            if (typeof file == 'number') {
                var file = self.getFileFromQueue(file);
            }

            var element = document.getElementById('laramedia-file-checkbox-'+file.id);

            if (element == null) {
                return;
            }

            element.checked = true;
            self.events.fire('file-selected', [file]);
        });
    }

    /**
     * Set the files to mark as selected.
     *
     * @param  array  files
     *
     * @return void
     */
    this.setFilesToMarkAsSelected = function (files) {
        var self = this;
        this.preSelectedFileIds = [];

        files.forEach(function (file) {
            if (typeof file == 'number') {
                self.preSelectedFileIds.push(file);
            } else {
                self.preSelectedFileIds.push(file.id);
            }
        });
    }

    /**
     * *************************************************************************
     * Bulk Actions
     * *************************************************************************
     *
     * From here on in contains everything that is related to the bulk actions.
     */

    /**
     * Register the bulk events.
     *
     * @return void
     */
    this.registerBulkEvents = function () {
        var self = this;

        var elements = document.querySelectorAll('.'+this.bulkActionOptions.bulk_select_box_class);

        if (elements == null) {
            return;
        }

        // Register the bulk actions event handlers
        elements.forEach(function (element) {
            element.addEventListener('change', function (event) {
                self.handleBulkAction(event.srcElement, self.getFilesFromIds(self.getCheckedIds()));
            });
        });

        var singleEventNames = [
            'bulk-file-trashed', 'bulk-file-restored', 'bulk-file-deleted'
        ];

        var multipleEventNames = [
            'files-trashed', 'files-restored', 'files-deleted'
        ];

        // file trashed, restored & deleted through bulk action
        this.crud.events.on(singleEventNames, (file) => {
            self.removeFileFromView(file.id);
            self.removeFileFromQueue(file.id);
        });

        // Files trashed, restored & deleted through bulk actions
        this.crud.events.on(multipleEventNames, (passedFiles, passedCount, failedFiles, failedCount, action) => {

            var text = 'item';

            if (passedCount > 1) {
                text = 'items';
            }

            // Let the user know the amount of files that were actioned successfully
            var swal = Swal.fire({
                title: 'Success',
                icon: 'success',
                text: passedCount+' '+text+ ' '+self.getBulkActionText(action)+' successfully!',
            });

            // Let the user know which file failed if any
            swal.then(function () {
                if (failedCount == 0) {
                    return;
                }

                var failedFileNames = [];

                failedFiles.forEach(function (file) {
                    failedFileNames.push(file.name);
                });

                Swal.fire({
                    title: 'Failed',
                    icon: 'error',
                    text: 'The following failed to '+action+': ' + failedFileNames.join(', '),
                });
            });

            if (self.filesQueueIsEmpty()) {
                self.showNoFilesContainer();
            }
        });
    }

    /**
     * Handle the bulk action.
     *
     * @param  obj  element
     * @param  array  files
     *
     * @return void
     */
    this.handleBulkAction = function (element, files) {

        var self = this;

        // Get the bulk action type
        var action = element.value;

        // Change back bulk option to empty
        element.value = '';

        // Let user know no files were selected for the action
        if (files.length == 0) {
            return Swal.fire({
                title: 'Error',
                text: 'No files have been selected for the ' + action + ' bulk action!',
                icon: 'error',
            });
        }

        // Ask for confirmation to perform the bulk action, then carry it out
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to perform the ' + action + ' bulk action?',
            icon: 'warning',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showCancelButton: true,
            focusConfirm: false,
            focusCancel: true,
            confirmButtonColor: self.swalDangerHex,
        }).then(function (response) {
            if (response.hasOwnProperty('value')) {
                self.doBulkAction(action, files);
            }
        });
    }

    /**
     * Do the bulk action.
     *
     * @param  string  action
     * @param  array  files
     *
     * @return void
     */
    this.doBulkAction = function (action, files) {

        var self = this;

        var text = this.getBulkActionText(action);

        if (action == 'trash') {
            this.crud.bulkTrashFiles(files);
        } else if (action == 'restore') {
            this.crud.bulkRestoreFiles(files);
        } else if (action == 'delete') {
            this.crud.bulkDeleteFiles(files);
        }
    }

    /**
     * Get the bulk action text for the bulk action.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getBulkActionText = function (action) {
        if (action == 'trash') {
            return 'trashed';
        } else if (action == 'restore') {
            return 'restored';
        } else if (action == 'delete') {
            return 'deleted';
        }
    }

    /**
     * *************************************************************************
     * Filters
     * *************************************************************************
     *
     * From here on in contains everything that is related to the filters.
     */

    /**
     * Register the filters events.
     *
     * @return void
     */
    this.registerFiltersEvents = function () {
        this.registerFilterTypeEvents();
        this.registerFilterVisibilityEvents();
        this.registerFilterOwnershipEvents();
        this.registerFilterActiveEvents();
        this.registerFilterTrashEvents();
        this.registerFilterSearchEvents();
    }

    /**
     * Register the type filter events.
     *
     * @return void
     */
    this.registerFilterTypeEvents = function () {
        var self = this;
        var element = document.getElementById(this.filterOptions.type_select_box_id);

        if (element == null) {
            return;
        }

        // Set the default type
        if (this.options.hasOwnProperty('filter_default_type')) {
            element.value = this.options.filter_default_type;
        }

        element.addEventListener('change', function (event) {
            self.loadContentFromFilter({
                type: event.srcElement.value,
            });
        });
    }

    /**
     * Register the visibility filter events.
     *
     * @return void
     */
    this.registerFilterVisibilityEvents = function () {
        var self = this;

        if (this.options.hide_visibility == true) {
            return;
        }

        var element = document.getElementById(this.filterOptions.visibility_select_box_id);

        if (element == null) {
            return;
        }

        // Set the default visibility
        if (this.options.hasOwnProperty('filter_default_visibility')) {
            element.value = this.options.filter_default_visibility;
        }

        element.addEventListener('change', function (event) {
            self.loadContentFromFilter({
                visibility: event.srcElement.value,
            });
        });
    }

    /**
     * Register the ownership filter events.
     *
     * @return void
     */
    this.registerFilterOwnershipEvents = function () {
        var self = this;
        var element = document.getElementById(this.filterOptions.ownership_select_box_id);

        if (element == null) {
            return;
        }

        // Set the default ownership
        if (this.options.hasOwnProperty('filter_default_ownership')) {
            element.value = this.options.filter_default_ownership;
        }

        element.addEventListener('change', function (event) {
            self.loadContentFromFilter({
                ownership: event.srcElement.value,
            });
        });
    }

    /**
     * Register the active filter events.
     *
     * @return void
     */
    this.registerFilterActiveEvents = function () {

        var self = this;
        var element = document.getElementById(this.filterOptions.active_filter_container_id);
        var trashElement = document.getElementById(this.filterOptions.trash_filter_container_id);

        if (element == null) {
            return;
        }

        // Set the default section
        if (this.options.hasOwnProperty('filter_default_section') && this.options.filter_default_section == 'active') {
            // Show the trash section as inactive
            if (trashElement != null) {
                trashElement.classList.remove('active');
            }

            // Show the action section as active
            element.classList.add('active');
        }

        element.addEventListener('click', function (event) {

            // Show the trash section as inactive
            if (trashElement != null) {
                trashElement.classList.remove('active');
            }

            // Show the active section as active
            event.srcElement.classList.add('active');

            // Show the relevant bulk options
            var activeBulkContainer = document.getElementById(self.bulkActionOptions.active_bulk_options_container_id);
            var trashBulkContainer = document.getElementById(self.bulkActionOptions.trash_bulk_options_container_id);

            if (trashBulkContainer != null) {
                trashBulkContainer.style.display = 'none';
            }

            if (activeBulkContainer != null) {
                activeBulkContainer.style.display = 'flex';
            }

            self.loadContentFromFilter({
                section: 'active',
            });
        });

        trashElement.addEventListener('click', function (event) {

            // Show the active section as inactive
            if (element != null) {
                element.classList.remove('active');
            }

            // Show the trash section as active
            event.srcElement.classList.add('active');

            // Show the relevant bulk options
            var activeBulkContainer = document.getElementById(self.bulkActionOptions.active_bulk_options_container_id);
            var trashBulkContainer = document.getElementById(self.bulkActionOptions.trash_bulk_options_container_id);

            if (trashBulkContainer != null) {
                trashBulkContainer.style.display = 'flex';
            }

            if (activeBulkContainer != null) {
                activeBulkContainer.style.display = 'none';
            }

            self.loadContentFromFilter({
                section: 'trash',
            });
        });
    }

    /**
     * Register the trash filter events.
     *
     * @return void
     */
    this.registerFilterTrashEvents = function () {

        var self = this;
        var element = document.getElementById(this.filterOptions.trash_filter_container_id);
        var activeElement = document.getElementById(this.filterOptions.active_filter_container_id);

        if (element == null) {
            return;
        }

        // Set the default section
        if (this.options.hasOwnProperty('filter_default_section') && this.options.filter_default_section == 'trash') {
            // Show the active section as inactive
            if (activeElement != null) {
                activeElement.classList.remove('active');
            }

            // Show the trash section as active
            element.classList.add('active');
        }

        element.addEventListener('click', function (event) {

            // Show the active section as inactive
            if (activeElement != null) {
                activeElement.classList.remove('active');
            }

            // Show the trash section as active
            event.srcElement.classList.add('active');

            // Show the relevant bulk options
            var activeBulkContainer = document.getElementById(self.bulkActionOptions.active_bulk_options_container_id);
            var trashBulkContainer = document.getElementById(self.bulkActionOptions.trash_bulk_options_container_id);

            if (trashBulkContainer != null) {
                trashBulkContainer.style.display = 'flex';
            }

            if (activeBulkContainer != null) {
                activeBulkContainer.style.display = 'none';
            }

            self.loadContentFromFilter({
                section: 'trash',
            });
        });
    }

    /**
     * Register the search filter events.
     *
     * @return void
     */
    this.registerFilterSearchEvents = function () {

        var self = this;
        var element = document.getElementById(this.filterOptions.search_input_id);

        if (element == null) {
            return;
        }

        // Set the default search
        if (this.options.hasOwnProperty('filter_default_search')) {
            element.value = this.options.filter_default_search;
        }

        element.addEventListener('keyup', this.debounce(function (event) {
            self.loadContentFromFilter({
                search: event.srcElement.value,
            });
        }, 250));

        element.addEventListener('search', this.debounce(function (event) {
            self.loadContentFromFilter({
                search: event.srcElement.value,
            });
        }, 250));
    }

    /**
     * Show the type filter.
     *
     * @return void
     */
    this.showTypeFilter = function () {
        var element = document.getElementById(this.filterOptions.type_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'flex';
    }

    /**
     * Hide the type filter.
     *
     * @return void
     */
    this.hideTypeFilter = function () {
        var element = document.getElementById(this.filterOptions.type_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'none';
    }

    /**
     * Show the visibility filter.
     *
     * @return void
     */
    this.showVisibilityFilter = function () {
        var element = document.getElementById(this.filterOptions.visibility_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'flex';
    }

    /**
     * Hide the visibility filter.
     *
     * @return void
     */
    this.hideVisibilityFilter = function () {
        var element = document.getElementById(this.filterOptions.visibility_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'none';
    }

    /**
     * Show the ownership filter.
     *
     * @return void
     */
    this.showOwnershipFilter = function () {
        var element = document.getElementById(this.filterOptions.ownership_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'flex';
    }

    /**
     * Hide the ownership filter.
     *
     * @return void
     */
    this.hideOwnershipFilter = function () {
        var element = document.getElementById(this.filterOptions.ownership_select_box_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'none';
    }

    /**
     * Show the search filter.
     *
     * @return void
     */
    this.showSearchFilter = function () {
        var element = document.getElementById(this.filterOptions.search_input_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'flex';
    }

    /**
     * Hide the search filter.
     *
     * @return void
     */
    this.hideSearchFilter = function () {
        var element = document.getElementById(this.filterOptions.search_input_id);
        if (element == null) {
            return;
        }
        element.parentElement.style.display = 'none';
    }

    /**
     * *************************************************************************
     * File Editor
     * *************************************************************************
     *
     * From here on in contains everything that is related to the file editor.
     */

    /**
     * Register the file editor events.
     *
     * @return void
     */
    this.registerFileEditorEvents = function () {

        var self = this;

        // Close the editor
        document.querySelector(this.editorOptions.close_button_identifier).addEventListener('click', function () {
            self.closeEditor();
        });

        // Go to previous file
        document.querySelector(this.editorOptions.previous_button_identifier).addEventListener('click', function () {
            self.goToPreviousFile();
        });

        // Go to next file
        document.querySelector(this.editorOptions.next_button_identifier).addEventListener('click', function () {
            self.goToNextFile();
        });

        // Save file
        document.querySelector(this.editorOptions.save_button_identifier).addEventListener('click', function () {
            self.saveFileFromEditor();
        });

        // Trash file
        document.querySelector(this.editorOptions.trash_button_identifier).addEventListener('click', function () {
            self.trashFileFromEditor();
        });

        // Restore file
        document.querySelector(this.editorOptions.restore_button_identifier).addEventListener('click', function () {
            self.restoreFileFromEditor();
        });

        // Delete file
        document.querySelector(this.editorOptions.delete_button_identifier).addEventListener('click', function () {
            self.deleteFileFromEditor();
        });
    }

    /**
     * Register the file editor crud events.
     *
     * @return void
     */
    this.registerFileEditorCrudEvents = function () {

        var self = this;

        // For when file saved
        this.crud.events.on('file-saved', function (file) {
            self.setFileInQueue(file);
            Swal.fire({
                title: 'Success',
                text: 'The file was updated successfully!',
                icon: 'success',
            });
        });

        // For when file trashed
        this.crud.events.on('file-trashed', function (file) {
            Swal.fire({
                title: 'Success',
                text: 'File was trashed successfully!',
                icon: 'success',
            });

            self.getOpenFile().remove();
            self.removeFileFromQueue(file.id);
            self.closeEditor();

            if (self.filesQueueIsEmpty()) {
                self.showNoFilesContainer();
            }
        });

        // For when file not trashed
        this.crud.events.on('file-not-trashed', function (file) {
            Swal.fire({
                title: 'Error',
                text: 'File was not trashed!',
                icon: 'error',
            });
        });

        // For when file restored
        this.crud.events.on('file-restored', function (file) {
            Swal.fire({
                title: 'Success',
                text: 'File was restored successfully!',
                icon: 'success',
            });

            self.getOpenFile().remove();
            self.removeFileFromQueue(file.id);
            self.closeEditor();

            if (self.filesQueueIsEmpty()) {
                self.showNoFilesContainer();
            }
        });

        // For when file not restored
        this.crud.events.on('file-not-restored', function (file) {
            Swal.fire({
                title: 'Error',
                text: 'File was not restored!',
                icon: 'error',
            });
        });

        // For when file deleted
        this.crud.events.on('file-deleted', function (file) {
            Swal.fire({
                title: 'Success',
                text: 'File was deleted successfully!',
                icon: 'success',
            });

            self.getOpenFile().remove();
            self.removeFileFromQueue(file.id);
            self.closeEditor();

            if (self.filesQueueIsEmpty()) {
                self.showNoFilesContainer();
            }
        });

        // For when file not deleted
        this.crud.events.on('file-not-deleted', function (file) {
            Swal.fire({
                title: 'Error',
                text: 'File was not deleted!',
                icon: 'error',
            });
        });
    }

    /**
     * Get the file editor template.
     *
     * @return obj
     */
    this.getEditorTemplate = function () {
        return document.importNode(
            document.getElementById(this.editorOptions.template_id).content, true
        );
    }

    /**
     * Close the file editor.
     *
     * @return void
     */
    this.closeEditor = function () {
        var self = this;

        // Mark all files as closed
        document.querySelectorAll('.'+this.options.file_container_class).forEach(function (item) {
            item.setAttribute(self.options.file_state_attribute, 'close');
        });

        document.getElementById(this.editorOptions.container_id).remove();

        this.events.fire('editor-closed');
    }

    /**
     * Open the file editor.
     *
     * @param  obj  element
     *
     * @return void
     */
    this.openEditor = function (element) {

        var self = this;

        // Add the file editor to the dom
        document.querySelector('body').appendChild(this.getEditorTemplate());

        // Set all the media files listed as closed to the file editor
        document.querySelectorAll('.'+this.options.file_container_class).forEach(function (item, index) {
            item.setAttribute(self.options.file_state_attribute, 'close');
        });

        // Set the current file selected as open
        element.setAttribute(this.options.file_state_attribute, 'open');

        // Get the current file object
        var file = this.getFileFromQueue(
            element.getAttribute(this.options.file_id_attribute)
        );

        this.enablePreviousButton();
        this.enableNextButton();

        if (! this.hasPreviousFile()) {
            this.disablePreviousButton();
        }

        if (! this.hasNextFile()) {
            this.disableNextButton();
        }

        this.addEditorFilePreview(file);
        this.addEditorFileContents(file);

        this.registerFileEditorEvents();

        this.events.fire('editor-opened');
    }

    /**
     * Check if we have an open file.
     *
     * @return bool
     */
    this.hasOpenFile = function () {
        return this.getOpenFile() != null;
    }

    /**
     * Get the open file.
     *
     * @return obj
     */
    this.getOpenFile = function () {
        return document.querySelector('['+this.options.file_state_attribute+'="open"]');
    }

    /**
     * Get the file for the next file.
     *
     * @return obj
     */
    this.getNextFile = function () {
        return this.getOpenFile().nextElementSibling;
    }

    /**
     * Get the previous file.
     *
     * @return obj
     */
    this.getPreviousFile = function () {
        return this.getOpenFile().previousElementSibling;
    }

    /**
     * Check if we have a netx file for the file editor to access.
     *
     * @return bool
     */
    this.hasNextFile = function () {
        return this.getNextFile() != null;
    }

    /**
     * Check if we have a previous file for the file editor to access.
     *
     * @return bool
     */
    this.hasPreviousFile = function () {
        return this.getPreviousFile() != null;
    }

    /**
     * Disable the previous button.
     *
     * @return void
     */
    this.disablePreviousButton = function () {
        document.querySelector(this.editorOptions.previous_button_identifier).setAttribute('disabled', true);
    }

    /**
     * Disable the next button.
     *
     * @return void
     */
    this.disableNextButton = function () {
        document.querySelector(this.editorOptions.next_button_identifier).setAttribute('disabled', true);
    }

    /**
     * Change the previous button state from being disabled.
     *
     * @return void
     */
    this.enablePreviousButton = function () {
        document.querySelector(this.editorOptions.previous_button_identifier).removeAttribute('disabled');
    }

    /**
     * Change the next button state from being disabled.
     *
     * @return void
     */
    this.enableNextButton = function () {
        document.querySelector(this.editorOptions.next_button_identifier).removeAttribute('disabled');
    }

    /**
     * Go to the next file in the file editor.
     *
     * @return void
     */
    this.goToNextFile = function () {
        if (! this.hasNextFile()) {
            return;
        }

        var nextElement = this.getNextFile();

        var file = this.getFileFromQueue(
            nextElement.getAttribute(this.options.file_id_attribute)
        );

        this.closeEditor();
        this.openEditor(nextElement);

        if (this.shouldLoadMoreContent()) {
            this.loadContent();
        }
    }

    /**
     * Go to the previous file in the file editor.
     *
     * @return void
     */
    this.goToPreviousFile = function () {
        if (! this.hasPreviousFile()) {
            return;
        }

        var previousElement = this.getPreviousFile();

        var file = this.getFileFromQueue(
            previousElement.getAttribute(this.options.file_id_attribute)
        );

        this.closeEditor();
        this.openEditor(previousElement);

        if (this.shouldLoadMoreContent()) {
            this.loadContent();
        }
    }

    /**
     * Add the file preview to the editor.
     *
     * @param obj  file
     *
     * @return void
     */
    this.addEditorFilePreview = function (file) {

        var img = document.createElement('img');

        if (file.type == 'image') {
            img.setAttribute('src', file.large_path);
        } else {
            img.setAttribute('src', file.icon_url);
        }

        document.getElementById(this.editorOptions.body_left_id).appendChild(img);
    }

    /**
     * Populate the file contents.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.addEditorFileContents = function (file) {

        var textFields = [
            'name', 'mimetype', 'readable_created_at', 'readable_size', 'readable_dimensions', 'caption', 'description', 'seo_description',
        ];

        var valueFields = [
            'title', 'alt_text', 'copyright', 'visibility', 'seo_title', 'seo_keywords', 'public_path',
        ];

        var imageOnlyFields = [
            'alt_text', 'copyright', 'readable_dimensions',
        ];

        var linkFields = [
            'preview_route', 'download_route',
        ];

        var hiddenFieldsIfPrivate = [
            'public_path',
        ];

        // Populate the text fields
        textFields.forEach(function (value, index) {
            document.querySelector("[editor-title='" + value + "']").appendChild(
                document.createTextNode((file[value] != null ? file[value] : ''))
            );
        });

        // Populate the value fields
        valueFields.forEach(function (value) {
            var element = document.querySelector("[editor-title='" + value + "']");
            if (element == null) {
                return;
            }
            element.value = (file[value] != null ? file[value] : '');
        });

        // Set button links
        linkFields.forEach(function (value) {
            document.querySelector("[editor-title='" + value + "']").setAttribute('href', file[value]);
        });

        // Show image only fields
        if (file.type == 'image') {
            imageOnlyFields.forEach(function (value) {
                document.querySelector("[editor-title='" + value + "']").parentElement.style.cssText = 'display: block;';
            });
        }

        // Hide fields if file is private
        if (file.visibility == 'private') {
            hiddenFieldsIfPrivate.forEach(function (value) {
                document.querySelector("[editor-title='" + value + "']").parentElement.style.cssText = 'display: none;';
            });
        }

        // Things specifically for the active section
        if (this.loadFilters.section == 'active') {
            if (file.can_trash) {
                document.querySelector(this.editorOptions.trash_button_identifier).style.display = 'flex';
            }

            if (file.can_update) {
                document.querySelector(this.editorOptions.save_button_identifier).style.display = 'flex';
            }
        }

        // Things specifically for the trash section
        if (this.loadFilters.section == 'trash') {

            // Disable editable fields when on trash
            document.querySelectorAll('.'+this.editorOptions.disable_fields_on_trash_class).forEach(function (element) {
                element.setAttribute('disabled', true);
            });

            // Hide public link
            document.querySelector(this.editorOptions.public_path_identifier).parentElement.style.display = 'none';

            // Hide the buttons
            document.getElementById(this.editorOptions.button_links_container_id).style.display = 'none';

            // Show/hide footer buttons
            if (file.can_restore) {
                document.querySelector(this.editorOptions.restore_button_identifier).style.display = 'flex';
            }

            if (file.can_delete) {
                document.querySelector(this.editorOptions.delete_button_identifier).style.display = 'flex';
            }

            document.querySelector(this.editorOptions.trash_button_identifier).style.display = 'none';
            document.querySelector(this.editorOptions.save_button_identifier).style.display = 'none';
        }
    }

    /**
     * Save the file from the editor.
     *
     * @return void
     */
    this.saveFileFromEditor = function () {
        var contents = {};

        var textFields = [
            'title', 'caption', 'alt_text', 'description', 'copyright', 'visibility', 'seo_title', 'seo_keywords', 'seo_description',
        ];

        textFields.forEach(function (value) {
            var element = document.querySelector("[editor-title='" + value + "']");
            if (element == null) {
                return;
            }
            contents[value] = element.value;
        });

        var file = this.getFileFromQueue(
            this.getOpenFile().getAttribute(this.options.file_id_attribute)
        );

        this.crud.saveFile(file, contents);
    }

    /**
     * Trash the file from the editor.
     *
     * @return void
     */
    this.trashFileFromEditor = function () {
        var self = this;

        var file = this.getFileFromQueue(
            this.getOpenFile().getAttribute(this.options.file_id_attribute)
        );

        // Get confirmation from the user to trash the file
        var swal = Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to trash this file?',
            icon: 'warning',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
            focusConfirm: false,
            focusCancel: true,
            confirmButtonColor: self.swalDangerHex,
        });

        // Handle the confirmation
        swal.then(function (response) {
            if (! response.hasOwnProperty('value')) {
                return;
            }
            self.crud.trashFile(file);
        });
    }

    /**
     * Restore the file from the editor.
     *
     * @return void
     */
    this.restoreFileFromEditor = function () {
        var self = this;

        var file = this.getFileFromQueue(
            this.getOpenFile().getAttribute(this.options.file_id_attribute)
        );

        // Get confirmation from the user to trash the file
        var swal = Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to restore this file?',
            icon: 'warning',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
            focusConfirm: false,
            focusCancel: true,
            confirmButtonColor: self.swalDangerHex,
        });

        // Handle the confirmation
        swal.then(function (response) {
            if (! response.hasOwnProperty('value')) {
                return;
            }
            self.crud.restoreFile(file);
        });
    }

    /**
     * Delete the file from the editor.
     *
     * @return void
     */
    this.deleteFileFromEditor = function () {
        var self = this;

        var file = this.getFileFromQueue(
            this.getOpenFile().getAttribute(this.options.file_id_attribute)
        );

        // Get confirmation from the user to trash the file
        var swal = Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to delete this file? You will not be able to retrieve it.',
            icon: 'warning',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
            focusConfirm: false,
            focusCancel: true,
            confirmButtonColor: self.swalDangerHex,
        });

        // Handle the confirmation
        swal.then(function (response) {
            if (! response.hasOwnProperty('value')) {
                return;
            }
            self.crud.deleteFile(file);
        });
    }

    /**
     * Whether we should load more content when the file is open in the editor.
     *
     * @return void
     */
    this.shouldLoadMoreIfFileIsOpen = function () {
        if (! this.hasOpenFile()) {
            return false;
        }

        var counter = function () {
            this.total = 0;

            this.count = function (element) {
                if (element.nextElementSibling != null) {
                    this.total++;
                    this.count(element.nextElementSibling);
                }
                return this.total;
            }
        };

        var count = new counter().count(this.getOpenFile());

        if (count <= 15) {
            return true;
        }

        return false;
    }

    /**
     * Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     */
    this.debounce = function(func, wait, immediate) {
        var timeout;

        // This is the function that is actually executed when
        // the DOM event is triggered.
        return function executedFunction() {
            // Store the context of this and any
            // parameters passed to executedFunction
            var context = this;
            var args = arguments;

            // The function to be called after
            // the debounce time has elapsed
            var later = function() {
                // null timeout to indicate the debounce ended
                timeout = null;

                // Call function now if you did not on the leading end
                if (!immediate) func.apply(context, args);
            };

            // Determine if you should call the function
            // on the leading or trail end
            var callNow = immediate && !timeout;

            // This will reset the waiting every function execution.
            // This is the step that prevents the function from
            // being executed because it will never reach the
            // inside of the previous setTimeout
            clearTimeout(timeout);

            // Restart the debounce waiting period.
            // setTimeout returns a truthy value (it differs in web vs node)
            timeout = setTimeout(later, wait);

            // Call immediately if you're dong a leading
            // end execution
            if (callNow) func.apply(context, args);
        };
    }
}
