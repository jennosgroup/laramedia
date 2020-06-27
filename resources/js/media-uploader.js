const Uppy = require('@uppy/core');
const XHRUpload = require('@uppy/xhr-upload');
const Dashboard = require('@uppy/dashboard');
const CsrfToken = require('./components/csrf-token');
const Events = require('./components/events');

// And their styles (for UI plugins)
require('@uppy/core/dist/style.css');
require('@uppy/dashboard/dist/style.css');

module.exports = function MediaUploader() {

    /**
     * The uppy instance.
     *
     * @var obj|null
     */
    this.uppy;

    /**
     * The csrf token instance.
     *
     * @var obj
     */
    this.csrfToken = new CsrfToken;

    /**
     * The events instance.
     *
     * @var obj
     */
    this.events = new Events;

    /**
     * Uppy options.
     *
     * @var object
     */
    this.uppyOptions = {
        autoProceed: true,
        allowMultipleUploads: true,
        debug: false,
        restrictions: {
            maxFileSize: 128048,
            maxNumberOfFiles: null,
            allowedFileTypes: null,
        },
    };

    /**
     * Uppy dashboard options.
     *
     * @var object
     */
    this.dashboardOptions = {
        id: 'Dashboard',
        target: '#laramedia-drag-drop-area',
        inline: true,
        trigger: '#laramedia-upload-trigger-button',
        metaFields: [
            {
                id: 'name',
                name: 'Name',
                placeholder: 'The file name',
            },
            {
                id: 'title',
                name: 'Title',
                placeholder: 'The file title',
            },
        ],
        width: '100%',
        height: '100%',
        thumbnailWidth: 280,
        showLinkToFileUploadResult: false,
        showProgressDetails: true,
        hideUploadButton: false,
        hideRetryButton: false,
        hidePauseResumeButton: false,
        hideCancelButton: false,
        hideProgressAfterFinish: false,
        note: null,
        closeModalOnClickOutside: false,
        closeAfterFinish: false,
        disableStatusBar: false,
        disableInformer: false,
        disableThumbnailGenerator: false,
        disablePageScrollWhenModalOpen: true,
        animateOpenClose: true,
        proudlyDisplayPoweredByUppy: false,
        showSelectedFiles: true,
        browserBackButtonClose: false,
        theme: 'light',
    };

    /**
     * The uploader options.
     *
     * @var object
     */
    this.options = {
        default_visibility: 'private',
        hide_visibility: false,
    };

    /**
     * Indicate whether a file has been recently uploaded since the uploader has been opened.
     *
     * @var bool
     */
    this.fileUploaded = false;

    /**
     * Get the files that were recently uploaded when the uploader is opened.
     *
     * @var obj
     */
    this.filesUploaded = {};

    /**
     * Get the last file that was uploaded when the uploader is open.
     *
     * @var obj
     */
    this.lastFileUploaded = {};

    /**
     * Initiate the uploader.
     *
     * @param  obj  options
     *
     * @return void
     */
    this.init = function (options) {
        for (var key in options) {
            if (! options.hasOwnProperty(key)) {
                return;
            }
            if (this.uppyOptions.hasOwnProperty(key)) {
                this.uppyOptions[key] = options[key];
            } else if (this.dashboardOptions.hasOwnProperty(key)) {
                this.dashboardOptions[key] = options[key];
            } else {
                this.options[key] = options[key];
            }
        }

        this.registerOpenEventHandler();
    }

    /**
     * Register the open event handler
     *
     * @return void
     */
    this.registerOpenEventHandler = function () {
        var self = this;

        if (! this.options.hasOwnProperty('upload_button_id')) {
            return;
        }

        var element = document.getElementById(this.options.upload_button_id);

        if (element == null) {
            return;
        }

        element.addEventListener('click', function () {
            self.open();
        });
    }

    /**
     * Get the template for the uploader.
     *
     * @return obj
     */
    this.getTemplate = function () {
        return document.importNode(document.getElementById(this.getUploaderOption('template_id')).content, true);
    }

    /**
     * Close the file uploader.
     *
     * @return void
     */
    this.close = function () {
        document.getElementById(this.getUploaderOption('container_id')).remove();
        this.events.fire('uploader-closed');
    }

    /**
     * Open up the uploader.
     *
     * @return void
     */
    this.open = function () {

        var self = this;

        // Reset some properties
        this.fileUploaded = false;
        this.filesUploaded = {};
        this.lastUpload = {};

        // Show the modal
        document.querySelector('body').appendChild(this.getTemplate());

        // Handle the visibility
        element = document.getElementById(this.getUploaderOption('visibility_select_box_id'));

        if (element != null) {
            element.value = this.options.default_visibility;

            // Show/hide the visibility
            if (this.options.hide_visibility) {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        }

        self.initiateUppy();

        self.registerUppyEventHandlers();

        document.querySelector(this.getUploaderOption('close_button_identifier')).addEventListener('click', function () {
            self.close();
        });

        this.events.fire('uploader-opened');
    }

    /**
     * Initiate the uppy instance.
     *
     * @return void
     */
    this.initiateUppy = function () {

        var self = this;

        // Disable the visibility before the upload is started so that it cannot be changed during the upload
        this.uppyOptions.onBeforeFileAdded = function (currentFile, files) {
            var element = document.getElementById(self.getUploaderOption('visibility_select_box_id'));
            if (element != null) {
                element.setAttribute('disabled', true);
            }
        };

        // Get the visibility to use
        this.uppyOptions.onBeforeUpload = function (files) {
            if (self.options.hide_visibility) {
                var visibility = self.options.default_visibility;
            } else {
                var visibility = document.getElementById(self.getUploaderOption('visibility_select_box_id')).value;
            }
            self.uppy.setMeta({
                visibility: visibility,
            });
        }

        this.uppy = Uppy(this.uppyOptions);

        this.uppy.use(Dashboard, this.dashboardOptions).use(XHRUpload, {
            endpoint: self.getUploadEndpoint(),
            headers: {
                'X-CSRF-TOKEN': self.csrfToken.get(),
            },
        });
    }

    /**
     * Register the uppy event handlers.
     *
     * @return void
     */
    this.registerUppyEventHandlers = function () {

        var self = this;

        // Display file errors when they're failed on the server upload
        this.uppy.on('upload-success', (file, response) => {
            if (response.body.success === true) {
                return;
            }
            self.uppy.setFileState(file.id, {
                error: response.body.error,
                response: response,
            });
            return self.uppy.info('failed to upload on server ' + file.name + ', ' + response.body.error, 'error', 5000);
        });

        // File uploaded successfully.
        this.uppy.on('upload-success', (file, response) => {
            if (response.body.success === false) {
                return;
            }
            self.fileUploaded = true;
            self.filesUploaded[response.body.file.id] = response.body.file;
            self.lastFileUploaded = response.body.file;
            self.events.fire('file-uploaded', [response.body.file]);
        });

        // When upload is finished - not an indicator that it was all successful
        this.uppy.on('complete', (result) => {
            var element = document.getElementById(self.getUploaderOption('visibility_select_box_id'));
            if (element != null) {
                element.removeAttribute('disabled');
            }
            self.events.fire('upload-complete', [this.filesUploaded]);
        });
    }

    /**
     * Get all the files that were recently uploaded.
     *
     * @return obj
     */
    this.getFilesUploaded = function () {
        return this.filesUploaded;
    }

    /**
     * Get the last file that was uploaded.
     *
     * @return obj
     */
    this.getLastFileUploaded = function () {
        return this.lastFileUploaded;
    }

    /**
     * Get the upload endpoint.
     *
     * @return string
     */
    this.getUploadEndpoint = function () {
        return document.head.querySelector("meta[name='media-upload-route']").content;
    }

    /**
     * Get the uploader option.
     *
     * @param  mixed  option
     *
     * @return mixed
     */
    this.getUploaderOption = function (option) {
        var options = this.getDefaultOptions();
        if (! options.hasOwnProperty(option)) {
            return null;
        }
        return options[option];
    }

    /**
     * Get the default uploader options.
     *
     * @return obj
     */
    this.getDefaultOptions = function () {
        return {
            template_id: 'laramedia-file-uploader-template',
            container_id: 'laramedia-file-uploader-container',
            visibility_select_box_id: 'laramedia-uploader-visibility-select-box',
            close_button_identifier: "#laramedia-file-uploader-close-button",
        };
    }
}
