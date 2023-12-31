import UploadHandler from './upload-handler';
import Events from './events';
import Filters from './filters';
import Swal from 'sweetalert2';

export default function Uploader() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events();

    /**
     * The filters instance.
     *
     * @var object
     */
    this.filters = new Filters();

    /**
     * The loaded options.
     * 
     * @var object
     */
    this.options = {};

    /**
     * The queue for the accepted files.
     *
     * @var object
     */
    this.acceptedFilesQueue = {};

    /**
     * The queue for the rejected files.
     *
     * @var object
     */
    this.rejectedFilesQueue = {};

    /**
     * The queue for the completed files.
     *
     * @var object
     */
    this.completedFilesQueue = {};

    /**
     * The queue for the failed files.
     *
     * @var object
     */
    this.failedFilesQueue = {};

    /**
     * The number of files selected for upload.
     *
     * @var int
     */
    this.totalSelectedFiles = 0;

    /**
     * The number of files that have been uploaded so far.
     *
     * @var int
     */
    this.totalFilesUploaded = 0;

    /**
     * The percentage point of an upload.
     *
     * @var int
     */
    this.percentagePoint = 0;

    /**
     * The progress percentage.
     *
     * @var int
     */
    this.progressPercentage = 0;

    /**
     * Indicate whether upload is in progress.
     * 
     * @var bool
     */
    this.inProgress = false;

    /**
     * Initiate the uploader.
     *
     * @return void
     */
    this.init = function () {
        var self = this;

        // Get the options and save them to the options queue.
        // Register a few event handlers that will take care of all the magic.
        window.axios.get(this.getOptionsRoute()).then(function (response) {
            self.options = self.mergeOptions(self.options, response.data);
            self.registerDropzoneEventHandlers();
            self.configureDropzoneFilesInput();
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
     * Register the dropzone event handlers.
     * 
     * @return void
     */
    this.registerDropzoneEventHandlers = function () {
        var self = this;

        var dropzoneElement = this.getDropzoneElement();
        var dropzoneInputElement = this.getDropzoneInputElement();

        /**
         * When anywhere inside the dropzone element is clicked,
         * we trigger the uploader.
         */
        dropzoneElement.addEventListener('click', function(e) {
            dropzoneInputElement.click();
        });

        // When the dropzone input element receives files, we process them
        dropzoneInputElement.addEventListener('change', function (event) {
            self.processFiles(this.files);
        });

        // Some drag events we want to prevent default action and propagation.
        ['dragstart', 'drag', 'dragend', 'dragenter'].forEach(eventName => {
            dropzoneElement.addEventListener(eventName, function (event) {
                event.preventDefault();
            event.stopPropagation();
            }, false);
        });

        /**
         * When the dragover event is fired, we want to let the user know that
         * they are over the drag area.
         */
        dropzoneElement.addEventListener('dragover', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.add('dropzone-highlight');
        }, false);

        /**
         * When the dragleave event is fired, we want to let the user know that
         * they have left the drag area.
         */
        dropzoneElement.addEventListener('dragleave', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.remove('dropzone-highlight');
        }, false);

        // When the files are dropped, send them off for processing.
        dropzoneElement.addEventListener('drop', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.remove('dropzone-highlight');

            self.processFiles(event.dataTransfer.files);
        }, false);
    }

    /**
     * Configure the files input.
     *
     * @return void
     */
    this.configureDropzoneFilesInput = function () {
        var filesInput = this.getDropzoneInputElement();

        if (filesInput == null) {
            return;
        }

        var allowedTypes = this.getAllowedMimeTypes().concat(this.getAllowedExtensions());

        // Set the files name on the input
        var inputName = this.getOption('files_input_name');

        if (this.getOption('allow_multiple_uploads')) {
            inputName += '[]';
        }

        filesInput.setAttribute('name', inputName);

        // Allow multiple uploads on the files input
        if (this.getOption('allow_multiple_uploads')) {
            filesInput.setAttribute('multiple', 'multiple');
        }

        /**
         * We set the accepted files on the input so that the file explorer when opened,
         * would block out the disallowed files for us.
         */
        if (allowedTypes.length >= 1) {
            filesInput.setAttribute('accept', allowedTypes.join(','));
        }
    }

    /**
     * Process the files.
     * 
     * @param  array  files
     * 
     * @return void
     */
    this.processFiles = function (files) {
        var self = this;

        var files = Array.from(files);
        var minNumberOfFiles = this.getOption('min_number_of_files');
        var maxNumberOfFiles = this.getOption('max_number_of_files');

        this.events.fire('files_processing_start', []);

        // Notify that multipple uploads not allowed
        if (! this.getOption('allow_multiple_uploads') && files.length > 1) {
            return this.notifyThatMultipleUploadsNotAllowed();
        }

        // Notify that not enough files selected
        if (minNumberOfFiles != null && files.length < minNumberOfFiles) {
            return this.notifyThatNotEnoughFilesSelected();
        }

        // Notify that too many files selected
        if (maxNumberOfFiles != null && files.length > maxNumberOfFiles) {
            return this.notifyThatTooManyFilesSelected();
        }

        // Process the files that were selected
        files.forEach(function (file) {
            self.processFile(file);
        });

        this.events.fire('files_processing_end', [files]);

        // Fire off the individual uploads for the files
        for (var fileId in this.acceptedFilesQueue) {
            this.uploadFile(this.acceptedFilesQueue[fileId]);
        }
    }

    /**
     * Process an individual file.
     *
     * @param  obj  file
     * 
     * @return void
     */
    this.processFile = function (file) {
        var fileId = this.generateFileId(file);
        var filesize = this.convertBytesToKilobytes(file.size);
        var mimetype = file.type;
        var extension = this.getExtensionFromMimeType(mimetype);
        var mimetypeWildcard = this.getWildCardFromMimeType(mimetype);
        var minFileSize = this.getOption('min_file_size');
        var maxFileSize = this.getOption('max_file_size');
        var allowedMimeTypes = this.getAllowedMimeTypes();
        var allowedExtensions = this.getAllowedExtensions();

        // Ignore folders
        if (mimetype == '') {
            return;
        }

        this.totalSelectedFiles += 1;
        this.percentagePoint = 100 / this.totalSelectedFiles;

        if (this.rejectedFilesQueue.hasOwnProperty(fileId)) {
            this.rejectedFilesQueue[fileId] = file;
            this.totalFilesUploaded += 1;
            this.events.fire('file_rejected', [file, 'file_already_selected']);
        } else if (this.acceptedFilesQueue.hasOwnProperty(fileId)) {
            this.rejectedFilesQueue[fileId] = file;
            this.totalFilesUploaded += 1;
            this.events.fire('file_rejected', [file, 'file_already_selected']);
        } else if (minFileSize != null && filesize < minFileSize) {
            this.rejectedFilesQueue[fileId] = file;
            this.totalFilesUploaded += 1;
            this.events.fire('file_rejected', [file, 'file_small']);
        } else if (maxFileSize != null && filesize > maxFileSize) {
            this.rejectedFilesQueue[fileId] = file;
            this.totalFilesUploaded += 1;
            this.events.fire('file_rejected', [file, 'file_large']);
        } else if (allowedMimeTypes.length == 0 && allowedExtensions.length == 0) {
            this.acceptedFilesQueue[fileId] = file;
        } else if (allowedMimeTypes.length >= 1 && allowedMimeTypes.indexOf(mimetype) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
        } else if (allowedMimeTypes.length >= 1 && allowedMimeTypes.indexOf(mimetypeWildcard) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
        } else if (allowedExtensions.length >= 1 && allowedExtensions.indexOf(extension) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
        } else {
            this.rejectedFilesQueue[fileId] = file;
            this.totalFilesUploaded += 1;
            this.events.fire('file_rejected', [file, 'file_not_allowed']);
        }
    }

    /**
     * Upload the file
     * 
     * @param  object  file
     * @param  object  formData
     * 
     * @return void
     */
    this.uploadFile = function (file) {
        var self = this;
        var handler = new UploadHandler();
        var formData = new FormData();

        formData.append('file', file);

        handler.events.on('upload_success', function (media, browserFile, response) {
            var fileId = self.generateFileId(browserFile);
            self.completedFilesQueue[fileId] = media;
            self.events.fire('upload_success', [media, browserFile, response]);
        });

        handler.events.on('upload_fail', function (browserFile, response) {
            var fileId = self.generateFileId(browserFile);
            self.failedFilesQueue[fileId] = browserFile;
            self.events.fire('upload_fail', [browserFile, response]);
        });

        handler.events.on('upload_error', function (browserFile, response) {
            var fileId = self.generateFileId(browserFile);
            self.failedFilesQueue[fileId] = browserFile;
            self.events.fire('upload_error', [browserFile, response]);
        });

        handler.events.on('upload_complete', function (browserFile, response) {
            self.totalFilesUploaded += 1;
            self.progressPercentage = Math.round(self.totalFilesUploaded * self.percentagePoint);

            self.events.fire('progress_percentage_update', [self.progressPercentage, self.totalFilesUploaded, self.percentagePoint]);

            if (self.totalSelectedFiles == self.totalFilesUploaded) {
                self.events.fire('uploads_finish_completed_files', [self.completedFilesQueue]);
                self.events.fire('uploads_finish_failed_files', [self.failedFilesQueue]);

                self.resetVariousFileQueues();
                self.resetMetrics();
                self.getDropzoneInputElement().value = null;
                self.inProgress = false;
            }
        });

        // Indicate that the upload is in progress
        this.inProgress = true;

        this.events.fire('upload_start')

        handler.start(file, formData);
    }

    /**
     * Reset the various file queues.
     * 
     * @return void
     */
    this.resetVariousFileQueues = function () {
        this.acceptedFilesQueue = {};
        this.rejectedFilesQueue = {};
        this.completedFilesQueue = {};
        this.failedFilesQueue = {};
    }

    /**
     * Reset the metrics.
     * 
     * @return void
     */
    this.resetMetrics = function () {
        this.totalFilesUploaded = 0;
        this.totalSelectedFiles = 0;
        this.progressPercentage = 0;
        this.percentagePoint = 0;
    }

    /**
     * Get an options.
     * 
     * @param  string  option
     * 
     * @return mixed
     */
    this.getOption = function (option) {
        if (! this.options.hasOwnProperty(option)) {
            return;
        }

        return this.options[option];
    }

    /**
     * Merge options.
     * 
     * @param  obj  overridingOptions
     * @param  obj  options
     * 
     * @return obj
     */
    this.mergeOptions = function (overridingOptions, options) {
        if (Object.keys(overridingOptions).length < 1) {
            return options;
        }

        for (var key in overridingOptions) {
            options[key] = overridingOptions[key];
        }

        return options;
    }

    /**
     * Get the allowed mimetypes.
     *
     * @return array
     */
    this.getAllowedMimeTypes = function () {
        var types = this.getOption('allowed_mimetypes');

        if (! Array.isArray(types)) {
            return [];
        }

        return types;
    }

    /**
     * Get the allowed mimetypes wildcards.
     *
     * @return void
     */
    this.getAllowedMimeTypesWildcards = function () {
        var types = this.getOption('allowed_mimetypes_wildcards');

        if (! Array.isArray(types)) {
            return [];
        }

        return types;
    }

    /**
     * Get the allowed extensions.
     *
     * @return void
     */
    this.getAllowedExtensions = function () {
        var results = [];
        var types = this.getOption('allowed_extensions');

        if (! Array.isArray(types)) {
            return [];
        }

        types.forEach(function (type) {
            if (extension[0].charAt(0) == '.') {
                results.push(extension);
            } else {
                results.push('.'+extension);
            }
        });

        return results;
    }

    /**
     * Get the mimetype wildcard from a given mimetype.
     *
     * @param  string  mimetype
     *
     * @return string
     */
    this.getWildCardFromMimeType = function (mimetype) {

        var result = mimetype.match(/^[a-z]+\/(\*{1}|[a-zA-Z0-9-\.\+]+)$/g);

        if (result == null) {
            return;
        }

        return result[0].replace(/\/.+$/g, '/*');
    }

    /**
     * Get the extension from the mimetype.
     *
     * @param  string  mimetype
     * @param  bool  prefix  Whether to prefix the extension with the '.'
     *
     * @return string
     */
    this.getExtensionFromMimeType = function (mimetype, prefix) {

        if (prefix != 'undefined') {
            var prefix = true;
        }

        var result = mimetype.match(/^[a-z]+\/[a-zA-Z0-9-\.\+]+$/g);

        if (result == null) {
            return;
        }

        var extension = result[0].replace(/^[a-z]+\//g, '');

        if (prefix) {
            return '.'+extension;
        }

        return extension;
    }

    /**
     * Convert bytes to kilobytes.
     *
     * @param  int  bytes
     *
     * @return float
     */
    this.convertBytesToKilobytes = function (bytes) {
        return bytes / 1024;
    }

    /**
     * Generate an id for a file.
     *
     * @param  object  file
     *
     * @return string
     */
    this.generateFileId = function (file) {
        name = file.name;
        name = name.replace(/\s/g, '-');
        name = name.replace(/[^a-zA-Z0-9-_]/g, '');
        return name.toLowerCase();
    }

    /**
     * Get the dropzone element.
     * 
     * @return object
     */
    this.getDropzoneElement = function () {
        return document.querySelector('.lfl-uploader-dropzone');
    }

    /**
     * Get the dropzone input element.
     * 
     * @return object
     */
    this.getDropzoneInputElement = function () {
        return document.querySelector('.lfl-uploader-dropzone-input');
    }

    /**
     * Get the options route.
     * 
     * @return string
     */
    this.getOptionsRoute = function () {
        return document.head.querySelector("meta[name='lfl_options_route']").content;
    }

    /**
     * Notify the user that multiple uploads is not enabled.
     *
     * @return object
     */
    this.notifyThatMultipleUploadsNotAllowed = function () {
         return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'You are not allowed to upload multiple files.',
        });
    }

    /**
     * Notify the user that not enough files have been selected.
     *
     * @return object
     */
    this.notifyThatNotEnoughFilesSelected = function () {
        var message = '';
        var minNumberOfFiles = this.getOption('min_number_of_files');

        if (minNumberOfFiles == 1) {
            message = 'You cannot upload no less than 1 file';
        } else {
            message = 'You cannot upload no less than '+minNumberOfFiles+' files.';
        }

        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
    }

    /**
     * Notify the user that too many files have been selected.
     *
     * @return object
     */
    this.notifyThatTooManyFilesSelected = function () {
        var message = '';
        var maxNumberOfFiles = this.getOption('max_number_of_files');

        if (maxNumberOfFiles == 1) {
            message = 'You are not allowed to upload more than 1 file.';
        } else {
            message = 'You are not allowed to upload more than '+maxNumberOfFiles+' files.';
        }

        return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
    }
}
