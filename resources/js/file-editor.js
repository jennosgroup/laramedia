import Events from './events';
import AxiosError from './axios-error';
import Swal from 'sweetalert2';

export default function fileEditor() {
	/**
	 * The events instance.
	 * 
	 * @var object
	 */
	this.events = new Events();

	/**
	 * The options.
	 * 
	 * @var obj
	 */
	this.options = {};

	/**
	 * The file instance for the editor.
	 * 
	 * @var obj|null
	 */
	this.file = null;

	/**
	 * Indicate whether a previous file exists.
	 */
	this.hasPreviousFile = false;

	/**
	 * Indicate whether a next file exists.
	 */
	this.hasNextFile = false;

	/**
	 * Start the file editor.
	 * 
	 * @param  obj  args
	 * 
	 * @return void
	 */
	this.init = function (args) {
		this.setup(args);
        this.open();
        this.registerEventHandlers();
        this.showFilePreview();
        this.populateDetails();
        this.configureNavigationButtons();
        this.configureCrudButtons();
	}

	/**
	 * Setup the args.
	 * 
	 * @param  obj  args
	 * 
	 * @return void
	 */
	this.setup = function (args) {
		this.file = args.file;
		this.options = args.options;
		this.hasPreviousFile = args.has_previous_file;
		this.hasNextFile = args.has_next_file;
	}

	/**
	 * Open up the file editor template.
	 *
	 * @return void
	 */
	this.open = function () {
		document.querySelector('body').append(this.getTemplate());
        this.events.fire('open', [this.file]);
	}

	/**
	 * Close the editor.
	 * 
	 * @return void
	 */
	this.close = function (file) {
		this.getWrapperElement().remove();
        this.events.fire('close', [this.file]);
	}

	/**
	 * Register the event handlers.
	 * 
	 * @return void
	 */
	this.registerEventHandlers = function () {
		var self = this;

		// Close the editor
		document.getElementById('laramedia-file-editor-close').addEventListener('click', function (event) {
			self.close(self.file);
		});

		// Get previous file
		document.getElementById('laramedia-file-editor-previous').addEventListener('click', function (event) {
			self.events.fire('previous_file', [self.file]);
		});

		// Get the next file
		document.getElementById('laramedia-file-editor-next').addEventListener('click', function (event) {
			self.events.fire('next_file', [self.file]);
		});

		// When file is saved
        this.getUpdateButtonElement().addEventListener('click', function (event) {
            self.updateFile(self.file);
        });

        // When file is trashed
        this.getTrashButtonElement().addEventListener('click', function (event) {
            self.trashFile(self.file);
        });

        // When file is restored
        this.getRestoreButtonElement().addEventListener('click', function (event) {
            self.restoreFile(self.file);
        });

        // When file is destroyed
        this.getDestroyButtonElement().addEventListener('click', function (event) {
            self.destroyFile(self.file);
        });

        // When the disk is changed, we dynamically add the disk visibility options
       this.getDiskElement().addEventListener('change', function (event) {
            self.handleDiskChange(this.value, self.file);
        });
	}

	/**
	 * Show the file preview.
	 *
	 * @return void
	 */
	this.showFilePreview = function () {
		if (this.shouldShowFilePreviewIcon()) {
            return this.showFilePreviewIcon();
        }

        this.showImagePreview();
	}

	/**
	 * Populate the details.
	 * 
	 * @return void
	 */
	this.populateDetails = function () {
		this.populateContentData();
        this.populateContentFields();
        this.disableFieldsForTrashedFile();
        this.populateVisibilityOptions();

        if (this.shouldShowImageFields()) {
            this.showImageFields();
        }

        if (this.shouldShowPublicFields()) {
            this.showPublicFields();
        }
	}

	/**
	 * Configure the navidation buttons.
	 * 
	 * @return void
	 */
	this.configureNavigationButtons = function () {
		if (! this.hasPreviousFile) {
			document.getElementById('laramedia-file-editor-previous').classList.add('laramedia-disabled-button');
		}

		if (! this.hasNextFile) {
			document.getElementById('laramedia-file-editor-next').classList.add('laramedia-disabled-button');
		}
	}

	/**
	 * Configure the editor crud buttons.
	 *
	 * @return void
	 */
	this.configureCrudButtons = function () {
		var file = this.file;
		var updateBtnElement = this.getUpdateButtonElement();
        var trashBtnElement = this.getTrashButtonElement();
        var restoreBtnElement = this.getRestoreButtonElement();
        var destroyBtnElement = this.getDestroyButtonElement();

        if (file.user_can_update && file.deleted_at == null) {
            updateBtnElement.classList.remove('laramedia-hidden');
        } else {
            updateBtnElement.remove();
        }

        if (file.user_can_trash && file.deleted_at == null) {
            trashBtnElement.classList.remove('laramedia-hidden');
        } else {
            trashBtnElement.remove();
        }

        if (file.user_can_restore && file.deleted_at != null) {
            restoreBtnElement.classList.remove('laramedia-hidden');
        } else {
            restoreBtnElement.remove();
        }

        if (file.user_can_destroy && file.deleted_at != null) {
            destroyBtnElement.classList.remove('laramedia-hidden');
        } else {
            destroyBtnElement.remove();
        }
	}

	/**
	 * Update the file.
	 * 
	 * @return void
	 */
	this.updateFile = function () {
		var self = this;

        var request = window.axios.patch(this.file.update_route, this.getDataForSaving());

        request.then(function (response) {
            var updatedFile = response.data.data;
            self.events.fire('file_updated', [updatedFile]);

            if (updatedFile.visibility == 'public') {
                self.showPublicFields();
                document.getElementById('laramedia-file-editor-file-url').value = updatedFile.public_url;
            } else {
                self.hidePublicFields();
                document.getElementById('laramedia-file-editor-file-url').value = '';
            }

            return Swal.fire({
                title: 'Success',
                icon: 'success',
                text: 'File saved successfully.',
            });
        });

        request.catch(function (error) {
            new AxiosError().handleError(error);
        });
	}

	/**
	 * Trash the file.
	 * 
	 * @return void
	 */
	this.trashFile = function () {
		var self = this;

		var file = this.file;
        var request = window.axios.delete(file.trash_route);

        request.then(function (response) {
            self.events.fire('file_trashed', [file]);
            self.close(file);

            return Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'File trashed successfully.',
            });
        });

        request.catch(function (error) {
            new AxiosError().handleError(error);
        });
	}

	/**
	 * Restore the file.
	 * 
	 * @return void
	 */
	this.restoreFile = function () {
		var self = this;

		var file = this.file;
        var request = window.axios.patch(file.restore_route);

        request.then(function (response) {
            self.events.fire('file_restored', [file]);
            self.close(file);

            return Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'File restored successfully.',
            });
        });

        request.catch(function (error) {
            new AxiosError().handleError(error);
        });
	}

	/**
	 * Destroy the file.
	 * 
	 * @return void
	 */
	this.destroyFile = function () {
		var self = this;

		var file = this.file;
        var request = window.axios.delete(file.destroy_route);

        request.then(function (response) {
            self.events.fire('file_destroyed', [file]);
            self.close();

            return Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'File destroyed successfully.',
            });
        });
        
        request.catch(function (error) {
            new AxiosError().handleError(error);
        });
	}

	/**
     * Handle the disk change.
     *
     * @param  string  disk
     *
     * @return void
     */
	this.handleDiskChange = function (disk) {
		var file = this.file;
        var diskVisibilities = this.options.disks_visibilities[disk];
        var diskDefaultVisibility = this.options.disks_default_visibility[disk];
        var visibilityElement = this.getVisibilityElement();

        if (visibilityElement == null) {
            return;
        }

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

        visibilityElement.parentElement.classList.remove('laramedia-hidden');
	}

	/**
	 * Check if we should show the file preview icon.
	 * 
	 * @return bool
	 */
	this.shouldShowFilePreviewIcon = function () {
		var file = this.file;

		if (file.is_not_image) {
            return true;
        }

        if (file.public_url == null && file.base64_url == null) {
            return true;
        }

        return false;
	}

	/**
	 * Show the file preview icon.
	 * 
	 * @return void
	 */
	this.showFilePreviewIcon = function () {
		var element = document.getElementById('laramedia-file-editor-preview-icon-container');
        element.style.display = 'flex';
	}

	/**
	 * Show the image preview.
	 * 
	 * @return void
	 */
	this.showImagePreview = function () {
		var file = this.file;
		var image = document.createElement('img');

        if (file.public_url != null) {
            image.src = file.public_url;
        } else if (file.base64_url != null) {
            image.src = file.base64_url;
        }

        var element = document.getElementById('laramedia-file-editor-preview-image-container');
        element.style.display = 'flex';
        element.append(image);
	}

	/**
	 * Populate the content data.
	 * 
	 * @return void
	 */
	this.populateContentData = function () {
		var file = this.file;

		document.getElementById('laramedia-file-editor-name').innerHTML = file.original_name;
        document.getElementById('laramedia-file-editor-file-type').innerHTML = file.mimetype;
        document.getElementById('laramedia-file-editor-uploaded-on').innerHTML = file.human_created_at;
        document.getElementById('laramedia-file-editor-filesize').innerHTML = file.human_filesize;
        document.getElementById('laramedia-file-editor-dimensions').innerHTML = file.human_dimensions;
	}

	/**
	 * Populate the content fields.
	 * 
	 * @return void
	 */
	this.populateContentFields = function () {
		var file = this.file;

		document.getElementById('laramedia-file-editor-title').value = file.title;
        document.getElementById('laramedia-file-editor-alt-text').value = file.alt_text;
        document.getElementById('laramedia-file-editor-caption').value = file.caption;
        document.getElementById('laramedia-file-editor-description').value = file.description;

        // Disk and visibility
        document.getElementById('laramedia-file-editor-disk').value = file.disk;
        document.getElementById('laramedia-file-editor-visibility').value = file.visibility;

        // Show the file url only for public files
        if (file.visibility == 'public') {
            document.getElementById('laramedia-file-editor-file-url').value = file.public_url;
        }

        // Preview & Download button
        if (file.deleted_at == null) {
            document.getElementById('laramedia-file-editor-contents-preview-btn').classList.remove('laramedia-hidden');
            document.getElementById('laramedia-file-editor-contents-preview-btn').setAttribute('href', file.preview_route);

            document.getElementById('laramedia-file-editor-contents-download-btn').classList.remove('laramedia-hidden');
            document.getElementById('laramedia-file-editor-contents-download-btn').setAttribute('href', file.download_route);
        }
	}

	/**
     * Determine whether we should show the image fields.
     * 
     * @return bool
     */
    this.shouldShowImageFields = function () {
        return this.file.is_image;
    }

    /**
     * Show the image fields.
     * 
     * @return void
     */
    this.showImageFields = function () {
        document.querySelectorAll('.laramedia-file-editor-image-form-group').forEach(function (element) {
            element.classList.remove('laramedia-hidden');
        });
    }

    /**
     * Determine whether we should show the public fields.
     * 
     * @return bool
     */
    this.shouldShowPublicFields = function () {
        return this.file.visibility == 'public';
    }

    /**
     * Show the public fields.
     * 
     * @return void
     */
    this.showPublicFields = function () {
        document.querySelectorAll('.laramedia-file-editor-public-form-group').forEach(function (element) {
            element.classList.remove('laramedia-hidden');
        });
    }

    /**
     * Hide the public fields.
     * 
     * @return void
     */
    this.hidePublicFields = function () {
        document.querySelectorAll('.laramedia-file-editor-public-form-group').forEach(function (element) {
            element.classList.add('laramedia-hidden');
        });
    }

    /**
     * Disable fields for trashed file.
     * 
     * @return void
     */
    this.disableFieldsForTrashedFile = function () {
    	if (this.file.deleted_at == null) {
    		return;
    	}

    	document.getElementById('laramedia-file-editor-title').disabled = true;
        document.getElementById('laramedia-file-editor-alt-text').disabled = true;
        document.getElementById('laramedia-file-editor-caption').disabled = true;
        document.getElementById('laramedia-file-editor-description').disabled = true;
        document.getElementById('laramedia-file-editor-disk').disabled = true;
        document.getElementById('laramedia-file-editor-visibility').disabled = true;
    }

    /**
     * Populate and show the visibility options.
     * 
     * @return void
     */
    this.populateVisibilityOptions = function () {
    	var file = this.file;
    	var index = 0;
        var visibilityElement = document.getElementById('laramedia-file-editor-visibility');
        var diskVisibilities = this.options.disks_visibilities[file.disk];

        for (var visibility in diskVisibilities) {
            var option = document.createElement('option');
            option.value = visibility;
            option.text = diskVisibilities[visibility];

            if (visibility == file.visibility) {
                option.selected = true;
            }

            visibilityElement.options[index] = option;
            index++;
        }
    }

    /**
     * Get the data for saving.
     *
     * @return object
     */
    this.getDataForSaving = function () {
    	if (this.file.deleted_at != null) {
    		return {};
    	}

        return {
            title: this.getTitleValue(),
            alt_text: this.getAltTextValue(),
            caption: this.getCaptionValue(),
            description: this.getDescriptionValue(),
            disk: this.getDiskValue(),
            visibility: this.getVisibilityValue(),
        };
    }

    /**
     * Get the title value.
     *
     * @return string|null
     */
    this.getTitleValue = function () {
        var element = this.getTitleElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

    /**
     * Get the alt text value.
     *
     * @return string|null
     */
    this.getAltTextValue = function () {
        var element = this.getAltTextElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

    /**
     * Get the caption value.
     *
     * @return string|null
     */
    this.getCaptionValue = function () {
        var element = this.getCaptionElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

    /**
     * Get the description value.
     *
     * @return object|null
     */
    this.getDescriptionValue = function () {
        var element = this.getDescriptionElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

    /**
     * Get the disk value.
     *
     * @return object|null
     */
    this.getDiskValue = function () {
        var element = this.getDiskElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

    /**
     * Get the visibility value.
     *
     * @return object|null
     */
    this.getVisibilityValue = function () {
        var element = this.getVisibilityElement();

        if (element == null) {
            return;
        }

        return element.value;
    }

	/**
	 * Get the wrapper element.
	 *
	 * @return obj
	 */
	this.getWrapperElement = function () {
		return document.getElementById('laramedia-file-editor-wrapper');
	}

	/**
     * Get the title element.
     *
     * @return object|null
     */
    this.getTitleElement = function () {
        return document.getElementById('laramedia-file-editor-title');
    }

    /**
     * Get the alt text element.
     *
     * @return object|null
     */
    this.getAltTextElement = function () {
        return document.getElementById('laramedia-file-editor-alt-text');
    }

    /**
     * Get the caption element.
     *
     * @return object|null
     */
    this.getCaptionElement = function () {
        return document.getElementById('laramedia-file-editor-caption');
    }

    /**
     * Get the description element.
     *
     * @return object|null
     */
    this.getDescriptionElement = function () {
        return document.getElementById('laramedia-file-editor-description');
    }

	/**
     * Get the disk element.
     * 
     * @return obj
     */
	this.getDiskElement = function () {
		return document.getElementById('laramedia-file-editor-disk');
	}

	/**
     * Get the visiblity element.
     * 
     * @return obj
     */
	this.getVisibilityElement = function () {
		return document.getElementById('laramedia-file-editor-visibility');
	}

	/**
     * Get the update button element.
     * 
     * @return obj
     */
	this.getUpdateButtonElement = function () {
		return document.getElementById('laramedia-file-editor-update-btn');
	}

	/**
     * Get the trash button element.
     * 
     * @return obj
     */
   	this.getTrashButtonElement = function () {
   		return document.getElementById('laramedia-file-editor-trash-btn');
   	}

   	/**
     * Get the restore button element.
     * 
     * @return obj
     */
    this.getRestoreButtonElement = function () {
    	return document.getElementById('laramedia-file-editor-restore-btn');
    }

    /**
     * Get the destroy button element.
     * 
     * @return obj
     */
    this.getDestroyButtonElement = function () {
    	return document.getElementById('laramedia-file-editor-destroy-btn');
    }

	/**
	 * Get the editor template.
	 * 
	 * @return obj|null
	 */
	this.getTemplate = function () {
		var template = document.getElementById('laramedia-file-editor');

        if (template == null) {
            return;
        }

        return document.importNode(template.content, true);
	}
}
