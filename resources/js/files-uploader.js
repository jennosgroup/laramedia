import AxiosError from './support/axios-error';
import Events from './support/events';
import UploadHandler from './support/upload-handler';
import Routes from './support/routes';
import Lodash from 'lodash';
import Swal from 'sweetalert2';

export default function FilesUploader() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events();

    /**
     * The files queue.
     * 
     * These are the files that were selected from the browser.
     * 
     * @var array
     */
    this.files = [];

    /**
     * The queue for the files that passed validation.
     *
     * @var object
     */
    this.acceptedFilesQueue = {};

    /**
     * The queue for the files that failed validation.
     *
     * @var object
     */
    this.rejectedFilesQueue = {};

    /**
     * The queue for the files that were uploaded to the server successfully.
     * This will contain the laravel media resource version of the file.
     *
     * @var object
     */
    this.uploadedFilesQueue = {};

    /**
     * The queue for the files that failed to be uploaded to the server.
     *
     * @var object
     */
    this.failedUploadFilesQueue = {};

    /**
     * The queue for the files that have been completely handled.
     * 
     * This will include accepted, rejected, upload and failed upload files.
     *
     * @var object
     */
    this.completedFilesQueue = {};

    /**
     * The number of files selected for upload.
     *
     * @var int
     */
    this.totalSelectedFiles = 0;

    /**
     * The number of files accepted.
     * 
     * @var int
     */
    this.totalFilesAccepted = 0;

    /**
     * The number of files accepted.
     * 
     * @var int
     */
    this.totalFilesRejected = 0;

    /**
     * The number of files that have been uploaded so far.
     *
     * @var int
     */
    this.totalFilesUploaded = 0;

    /**
     * The number of files that have failed upload.
     *
     * @var int
     */
    this.totalFilesFailedUpload = 0;

    /**
     * The number of files that have been completed.
     *
     * This will include accepted, rejected, uploaded and failed uploaded files.
     *
     * @var int
     */
    this.totalFilesCompleted = 0;

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
     * The options.
     * 
     * @var object
     */
    this.options = {};

    /**
     * Initiate the uploader.
     *
     * @return void
     */
    this.init = function () {
        var self = this;

        window.axios.get(new Routes().getOptionsRoute()).then(function (response) {
            // We take the options from the server and add it to our options queue.
            // However, the options set through the uploader should take precedence.
            self.setOptions(Lodash.assign(response.data, self.options));

            self.registerEventHandlers();
            self.registerDropzoneEventHandlers();
            self.configureDropzoneFilesInput();
            self.populateVisibilityOptions();
            self.configure();
        }).catch(function (response) {
            new AxiosError().handleError(response);
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
        var self = this;

        if (typeof options == 'undefined' || options == null || options == '') {
            return this;
        }

        if (Object.keys(options).length < 1) {
            return this;
        }

        for (var key in options) {
            this.options[key] = options[key];
        }

        // Select multiple corresponds to allow multiple uploads
        if (options.hasOwnProperty('select_multiple')) {
            this.options['allow_multiple_uploads'] = options.select_multiple;
        }

        // If the type is passed, we have to refactor the allowed types
        if (options.hasOwnProperty('uploader_allowed_file_types')) {
            var wildcardMimetypes = [];
            var mimetypes = [];
            var extensions = [];
            var filters = options.uploader_file_types;

            filters.forEach(function (type) {
                var wildcardMimetype = self.getWildCardFromMimeType(type);

                if (self.isValidMimetype(type)) {
                    mimetypes.push(type);
                } else {
                    extensions.push(type);
                }

                if (wildcardMimetype != null) {
                    wildcardMimetypes.push(wildcardMimetype);
                }
            });
            
            this.options.uploader_mimetypes = mimetypes;
            this.options.uploader_mimetypes_wildcard = wildcardMimetypes;
            this.options.uploader_extensions = extensions;
        }

        if (options.hasOwnProperty('uploader_type') && options.hasOwnProperty('type_filters')) {
            if (options.type_filters.hasOwnProperty(options.uploader_type)) {
                var wildcardMimetypes = [];
                var mimetypes = [];
                var extensions = [];
                var filters = options.type_filters[options.uploader_type];

                filters.forEach(function (type) {
                    var wildcardMimetype = self.getWildCardFromMimeType(type);

                    if (self.isValidMimetype(type)) {
                        mimetypes.push(type);
                    } else {
                        extensions.push(type);
                    }

                    if (wildcardMimetype != null) {
                        wildcardMimetypes.push(wildcardMimetype);
                    }
                });

                this.options.uploader_mimetypes = mimetypes;
                this.options.uploader_mimetypes_wildcard = wildcardMimetypes;
                this.options.uploader_extensions = extensions;
            }
        }

        return this;
    }

    /**
     * Register the event handlers.
     * 
     * @return void
     */
    this.registerEventHandlers = function () {
        var self = this;

        // Hide the error section when X is clicked. Also remove the errors
        document.getElementById('laramedia-files-error-close').addEventListener('click', function (event) {
            this.parentElement.classList.add('laramedia-hidden');

            // Remove the errors
            document.querySelectorAll('.laramedia-files-error').forEach(function (element) {
                element.remove();
            });
        })

        // Show the error when a file upload fails
        this.events.on('upload_fail', function (file, response) {
            self.showFileError(file, response);
        });

        // Show the error when a file upload fails
        this.events.on('upload_error', function (file, response) {
            self.showFileError(file, response);
        });

        // Show the error when a file upload fails
        this.events.on('file_rejected', function (file, reason) {
            self.showFileValidationError(file, reason);
        });

        // When the progress changes
        this.events.on('progress_percentage_update', function (percentage) {
            self.showUploadProgress(percentage);

            if (percentage == 100) {
                document.getElementById('laramedia-files-upload-progress-container').classList.add('laramedia-upload-progress-complete');
            }
        });

        // When the processing start
        this.events.on('files_processing_start', function () {
            self.showUploadProcessing();
            document.getElementById('laramedia-files-upload-progress-container').classList.remove('laramedia-upload-progress-complete');
        });
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

        // Prevent dropzone file selectors popping up when changing disk and visibility for uploads.
        document.querySelector('.laramedia-uploader-dropzone-filters').addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });

        // When the disk is change, populate the visiblity accordingly
        document.getElementById('laramedia-dropzone-disk').addEventListener('change', function (event) {
            self.handleDiskChange();
        });

        // When the dropzone element is clicked, we trigger the browser files selector.
        dropzoneElement.addEventListener('click', function(e) {
            if (self.validateDiskAndVisiblity()) {
                return dropzoneInputElement.click(); 
            }
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid visibility selected for the chosen disk',
            });
        });

        // When the dropzone input element receives files, we process them
        dropzoneInputElement.addEventListener('change', function (event) {
            if (self.validateDiskAndVisiblity()) {
                return self.processFiles(this.files); 
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid visibility selected for the chosen disk',
            });
        });

        // Some drag events we want to prevent default action and propagation.
        ['dragstart', 'drag', 'dragend', 'dragenter'].forEach(function (eventName) {
            dropzoneElement.addEventListener(eventName, function (event) {
                event.preventDefault();
                event.stopPropagation();
            }, false);
        });

        // Let the user know that they are over the drag area.
        dropzoneElement.addEventListener('dragover', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.add('laramedia-dropzone-highlight');
        }, false);

        // Let the user know that they have left the drag area.
        dropzoneElement.addEventListener('dragleave', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.remove('laramedia-dropzone-highlight');
        }, false);

        // When the files are dropped, send them off for processing.
        dropzoneElement.addEventListener('drop', function(event) {
            event.preventDefault();
            event.stopPropagation();

            this.classList.remove('laramedia-dropzone-highlight');

            if (self.validateDiskAndVisiblity()) {
                return self.processFiles(event.dataTransfer.files); 
            }

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid visibility selected for the chosen disk',
            });
        }, false);
    }

    /**
     * Configure the files input.
     *
     * @return void
     */
    this.configureDropzoneFilesInput = function () {
        return;
        var filesInput = this.getDropzoneInputElement();

        if (filesInput == null) {
            return;
        }

        var allowedTypes = this.getAllowedMimeTypes().concat(this.getAllowedExtensions());

        // Set the files name on the input
        var inputName = this.getOption('file_input_name');

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

        var minNumberOfFiles = this.getOption('min_number_of_files');
        var maxNumberOfFiles = this.getOption('max_number_of_files');

        // Set the files in the files queue
        this.files = Array.from(files);

        // Notify that multipple uploads not allowed
        if (! this.getOption('allow_multiple_uploads') && this.files.length > 1) {
            return this.notifyThatMultipleUploadsNotAllowed();
        }

        // Notify that not enough files selected
        if (minNumberOfFiles != null && this.files.length < minNumberOfFiles) {
            return this.notifyThatNotEnoughFilesSelected();
        }

        // Notify that too many files selected
        if (maxNumberOfFiles != null && this.files.length > maxNumberOfFiles) {
            return this.notifyThatTooManyFilesSelected();
        }

        // Fire processing start event
        this.events.fire('files_processing_start', [this.files]);

        // Process the files that were selected
        this.files.forEach(function (file) {
            self.processFile(file);
        });

        // Fire processing end event
        this.events.fire('files_processing_end', [this.acceptedFilesQueue, this.rejectedFilesQueue]);

        // Now we upload the files that are accepted
        this.uploadFiles(this.acceptedFilesQueue);
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
            this.completedFilesQueue[fileId] = file;

            this.totalFilesRejected += 1;
            this.totalFilesCompleted += 1;

            this.events.fire('file_rejected', [file, 'file_already_selected']);
        } else if (this.acceptedFilesQueue.hasOwnProperty(fileId)) {
            this.rejectedFilesQueue[fileId] = file;
            this.completedFilesQueue[fileId] = file;

            this.totalFilesRejected += 1;
            this.totalFilesCompleted += 1;

            this.events.fire('file_rejected', [file, 'file_already_selected']);
        } else if (minFileSize != null && filesize < minFileSize) {
            this.rejectedFilesQueue[fileId] = file;
            this.completedFilesQueue[fileId] = file;

            this.totalFilesRejected += 1;
            this.totalFilesCompleted += 1;

            this.events.fire('file_rejected', [file, 'file_small']);
        } else if (maxFileSize != null && filesize > maxFileSize) {
            this.rejectedFilesQueue[fileId] = file;
            this.completedFilesQueue[fileId] = file;

            this.totalFilesRejected += 1;
            this.totalFilesCompleted += 1;

            this.events.fire('file_rejected', [file, 'file_large']);
        } else if (allowedMimeTypes.length == 0 && allowedExtensions.length == 0) {
            this.acceptedFilesQueue[fileId] = file;
            this.totalFilesAccepted += 1;
        } else if (allowedMimeTypes.length >= 1 && allowedMimeTypes.indexOf(mimetype) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
            this.totalFilesAccepted += 1;
        } else if (allowedMimeTypes.length >= 1 && allowedMimeTypes.indexOf(mimetypeWildcard) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
            this.totalFilesAccepted += 1;
        } else if (allowedExtensions.length >= 1 && allowedExtensions.indexOf(extension) != '-1') {
            this.acceptedFilesQueue[fileId] = file;
            this.totalFilesAccepted += 1;
        } else {
            this.rejectedFilesQueue[fileId] = file;
            this.completedFilesQueue[fileId] = file;

            this.totalFilesRejected += 1;
            this.totalFilesCompleted += 1;

            this.events.fire('file_rejected', [file, 'file_not_allowed']);
        }
    }

    /**
     * Upload the given files.
     * 
     * @var  obj  files
     * 
     * @return void
     */
    this.uploadFiles = function (files) {
        for (var fileId in files) {
            this.uploadFile(files[fileId]);
        }
    }

    /**
     * Upload the file
     * 
     * @param  object  file
     * 
     * @return void
     */
    this.uploadFile = function (file) {
        var self = this;
        var handler = new UploadHandler();
        var formData = new FormData();

        formData.append('file', file);
        formData.append('disk', this.getDiskValue());
        formData.append('visibility', this.getVisibilityValue());

        // Handle the upload success
        handler.events.on('upload_success', function (media, browserFile, response) {
            var fileId = self.generateFileId(browserFile);

            self.uploadedFilesQueue[fileId] = media;
            self.totalFilesUploaded += 1;

            self.events.fire('upload_success', [media, browserFile, response]);
        });

        // Handle the upload fail
        handler.events.on('upload_fail', function (browserFile, response) {
            var fileId = self.generateFileId(browserFile);

            self.failedUploadFilesQueue[fileId] = browserFile;
            self.totalFilesFailedUpload += 1;

            self.events.fire('upload_fail', [browserFile, response]);
        });

        // Handle the upload error
        handler.events.on('upload_error', function (browserFile, response) {
            var fileId = self.generateFileId(browserFile);

            self.failedUploadFilesQueue[fileId] = browserFile;
            self.totalFilesFailedUpload += 1;

            self.events.fire('upload_error', [browserFile, response]);
        });

        // Handle the upload complete
        handler.events.on('upload_complete', function (browserFile, response) {
            var fileId = self.generateFileId(browserFile);
            
            self.completedFilesQueue[fileId] = browserFile;
            self.totalFilesCompleted += 1;

            self.progressPercentage = Math.round(self.totalFilesCompleted * self.percentagePoint);

            self.events.fire('progress_percentage_update', [self.progressPercentage, self.totalFilesCompleted, self.percentagePoint]);

            if (self.totalSelectedFiles == self.totalFilesCompleted) {
                self.events.fire('uploads_finish_uploaded_files', [self.uploadedFilesQueue]);
                self.events.fire('uploads_finish_failed_files', [self.failedUploadFilesQueue]);
                self.events.fire('uploads_finish_completed_files', [self.completedFilesQueue]);

                self.resetVariousFileQueues();
                self.resetMetrics();
                self.getDropzoneInputElement().value = null;
            }
        });

        this.events.fire('upload_start', [file]);

        handler.start(file, formData);
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
        var container = document.getElementById('laramedia-files-errors-container');
        var template = document.importNode(document.getElementById('laramedia-files-error-template').content, true);

        // Event listener to remove error
        template.querySelector('.laramedia-files-error-remove').addEventListener('click', function (event) {
            this.parentElement.parentElement.remove();

            if (container.querySelectorAll('.laramedia-files-error').length == 0) {
                container.classList.add('laramedia-hidden');
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
        var container = document.getElementById('laramedia-files-errors-container');
        var template = document.importNode(document.getElementById('laramedia-files-error-template').content, true);

        // Event listener to remove error
        template.querySelector('.laramedia-files-error-remove').addEventListener('click', function (event) {
            this.parentElement.parentElement.remove();

            if (container.querySelectorAll('.laramedia-files-error').length == 0) {
                container.classList.add('laramedia-hidden');
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

        container.classList.remove('laramedia-hidden');

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
        var container = document.getElementById('laramedia-files-upload-progress-container');
        var unitsElement = document.getElementById('laramedia-files-upload-progress-units');

        if (container.style.display != 'flex') {
            container.style.display = 'flex';
        }

        document.getElementById('laramedia-files-upload-message').style.display = 'none';

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
        var container = document.getElementById('laramedia-files-upload-progress-container');

        if (container.style.display != 'flex') {
            container.style.display = 'flex';
        }

        document.getElementById('laramedia-files-upload-progress-units').style.display = 'none';

        document.getElementById('laramedia-files-upload-message').style.display = 'flex';
    }

    /**
     * Get the disk value.
     * 
     * @return mixed
     */
    this.getDiskValue = function () {
        if (this.options.disk) {
            return this.options.disk;
        }

        if (this.options.hide_disk) {
            return this.options.default_disk;
        }

        return document.getElementById('laramedia-dropzone-disk').value;
    }

    /**
     * Get the visiblity value.
     * 
     * @return mixed
     */
    this.getVisibilityValue = function () {
        if (this.options.visibility) {
            return this.options.visibility;
        }

        if (! this.options.hide_visibility) {
            return document.getElementById('laramedia-dropzone-visibility').value;
        }

        return this.options.disks_default_visibility[this.getDiskValue()];
    }

    /**
     * Validate the disk and visibility.
     * 
     * @return bool
     */
    this.validateDiskAndVisiblity = function () {
        var disks = this.options.disks;
        var visibilities = this.options.disks_visibilities;
        var disk = this.getDiskValue();
        var visibility = this.getVisibilityValue();

        if (disk == '' || disk == null) {
            return false;
        }

        if (visibility == '' || visibility == null) {
            return false;
        }

        if (! disks.hasOwnProperty(disk)) {
            return false;
        }

        if (! visibilities.hasOwnProperty(visibility)) {
            return false;
        }

        var diskVisibilities = this.options.disks_visibilities[disk];

        if (! diskVisibilities.hasOwnProperty(visibility)) {
            return false;
        }

        return true;
    }

    /**
     * Populate the visibility options.
     * 
     * @return void
     */
    this.populateVisibilityOptions = function () {
        var index = 0;
        var disk = this.getDiskValue();
        var diskVisibilities = this.options.disks_visibilities[disk];
        var visibilityElement = document.getElementById('laramedia-dropzone-visibility');

        for (var visibility in diskVisibilities) {
            var option = document.createElement('option');
            option.value = visibility;
            option.text = diskVisibilities[visibility];

            visibilityElement.options[index] = option;
            index++;
        }
    }

    /**
     * Configure some stuff.
     * 
     * @return void
     */
    this.configure = function () {
        if (this.options.disk || this.options.hide_disk) {
            document.getElementById('laramedia-dropzone-disk').remove();
        }

        if (this.options.visibility || this.options.hide_visibility) {
            document.getElementById('laramedia-dropzone-visibility').remove();
        }
    }

    /**
     * Handle the disk change.
     *
     * @param  string  disk
     *
     * @return void
     */
    this.handleDiskChange = function () {
        var disk = this.getDiskValue();
        var diskVisibilities = this.options.disks_visibilities[disk];
        var diskDefaultVisibility = this.options.disks_default_visibility[disk];
        var visibilityElement = document.getElementById('laramedia-dropzone-visibility');

        // Reset the visibility options
        for (var index = visibilityElement.options.length; index >= 0; index--) {
            visibilityElement.remove(index);
        }

        var index = 0;

        // Add the disk visibility options to the visibility select element
        for (var visibility in diskVisibilities) {
            var option = document.createElement('option');
            option.value = visibility;
            option.text = diskVisibilities[visibility];

            if (visibility == diskDefaultVisibility) {
                option.selected = true;
            }

            visibilityElement.options[index] = option;
            index++;
        }
    }

    /**
     * Reset the various file queues.
     * 
     * @return void
     */
    this.resetVariousFileQueues = function () {
        this.files = [];
        this.acceptedFilesQueue = {};
        this.rejectedFilesQueue = {};
        this.uploadedFilesQueue = {};
        this.failedUploadFilesQueue = {};
        this.completedFilesQueue = {};
    }

    /**
     * Reset the metrics.
     * 
     * @return void
     */
    this.resetMetrics = function () {
        this.totalSelectedFiles = 0;
        this.totalFilesAccepted = 0;
        this.totalFilesRejected = 0;
        this.totalFilesUploaded = 0;
        this.totalFilesFailedUpload = 0;
        this.totalFilesCompleted = 0;
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
     * Get the allowed mimetypes.
     *
     * @return array
     */
    this.getAllowedMimeTypes = function () {
        var types = this.getOption('uploader_mimetypes');

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
        var types = this.getOption('uploader_mimetypes_wildcards');

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
        var extensions = this.getOption('uploader_extensions');

        if (! Array.isArray(extensions)) {
            return [];
        }

        extensions.forEach(function (extension) {
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
     * @return string|null
     */
    this.getWildCardFromMimeType = function (mimetype) {
        var result = mimetype.match(/^[a-z]+\/(\*{1}|[a-zA-Z0-9-\.\+]+)$/g);

        if (result == null) {
            return null;
        }

        return result[0].replace(/\/.+$/g, '/*');
    }

    /**
     * Get the type from the mimetype.
     *
     * @param  string  mimetype
     *
     * @return string|null
     */
    this.getTypeFromMimeType = function (mimetype) {
        var result = mimetype.match(/^[a-z]+\/(\*{1}|[a-zA-Z0-9-\.\+]+)$/g);

        if (result == null) {
            return null;
        }

        return result[0].replace(/\/.+$/g, '');
    }

    /**
     * Get the extension from the mimetype.
     *
     * @param  string  mimetype
     * @param  bool  prefix  Whether to prefix the extension with the '.'
     *
     * @return string|null
     */
    this.getExtensionFromMimeType = function (mimetype, prefix) {
        if (prefix != 'undefined') {
            var prefix = true;
        }

        var result = mimetype.match(/^[a-z]+\/[a-zA-Z0-9-\.\+]+$/g);

        if (result == null) {
            return null;
        }

        var extension = result[0].replace(/^[a-z]+\//g, '');

        if (prefix) {
            return '.'+extension;
        }

        return extension;
    }

    /**
     * Check if the type is a valid mimetype.
     * 
     * @param  string  type
     * 
     * @return bool
     */
    this.isValidMimetype = function (type) {
        var result = type.match(/^[a-z]+\/(\*{1}|[a-zA-Z0-9-\.\+]+)$/g);
        return result != null;
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
        return document.querySelector('.laramedia-uploader-dropzone');
    }

    /**
     * Get the dropzone input element.
     * 
     * @return object
     */
    this.getDropzoneInputElement = function () {
        return document.querySelector('.laramedia-uploader-dropzone-input');
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
