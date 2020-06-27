module.exports = function MediaEditor() {

    this.options = {
        file_id_attribute: 'laramedia-id',
        close_button_identifier: '[laramedia-bar-label="close"]',
        previous_button_identifier: '[laramedia-bar-label="previous"]',
        next_button_identifier: '[laramedia-bar-label="next"]',
        save_button_identifier: '[laramedia-bar-lable="save"]',
        trash_button_identifier: '[laramedia-bar-lable="trash"]',
        restore_button_identifier: '[laramedia-bar-lable="restore"]',
        delete_button_identifier: '[laramedia-bar-lable="delete"]',
        template_id: 'laramedia-file-editor-template',
        container_id: 'laramedia-file-editor-container',
        body_left_id: 'laramedia-file-editor-body-left',
        disable_fields_on_trash_class: 'laramedia-disable-on-trash',
        public_path_identifier: "[editor-title='public_path']",
        button_links_container_id: 'laramedia-buttons-container',
    };

    this.events = {};

    this.currentFile = {};

    this.currentElement = {};

    this.currentSection = 'active';

    this.init = function (options) {
        this.options = window._.assign(this.options, options);
    }

    this.getTemplate = function () {
        return document.importNode(
            document.getElementById(this.options.template_id).content, true
        );
    }

    this.close = function () {
        document.getElementById(this.options.container_id).remove();
        this.events.fire('editor-closed');
    }

    this.open = function (file, element, section) {

        var self = this;

        this.currentFile = file;
        this.currentElement = element;
        this.currentSection = section;

        document.querySelector('body').appendChild(this.getTemplate());

        this.enablePreviousButton();
        this.enableNextButton();

        if (! this.hasPreviousFile()) {
            this.disablePreviousButton();
        }

        if (! this.hasNextFile()) {
            this.disableNextButton();
        }

        this.addEditorFilePreview();
        this.addEditorFileContents();

        this.events.fire('editor-opened');
    }

    this.disablePreviousButton = function () {
        document.querySelector(this.options.previous_button_identifier).setAttribute('disabled', true);
    }

    this.disableNextButton = function () {
        document.querySelector(this.options.next_button_identifier).setAttribute('disabled', true);
    }

    this.enablePreviousButton = function () {
        document.querySelector(this.options.previous_button_identifier).removeAttribute('disabled');
    }

    this.enableNextButton = function () {
        document.querySelector(this.options.next_button_identifier).removeAttribute('disabled');
    }

    this.hasPreviousFile = function () {
        return this.getPreviousFileElement() != null;
    }

    this.getPreviousFileElement = function () {
        return this.currentElement.previousElementSibling;
    }

    this.getPreviousFileId = function () {
        return this.getPreviousFileElement().getAttribute(this.options.file_id_attribute);
    }

    this.hasNextFile = function () {
        return this.getNextFileElement() != null;
    }

    this.getNextFileElement = function () {
        return this.currentElement.nextElementSibling;
    }

    this.getNextFileId = function () {
        return this.getNextFileElement().getAttribute(this.options.file_id_attribute);
    }

    this.addEditorFilePreview = function () {

        var img = document.createElement('img');

        if (this.file.type == 'image') {
            img.setAttribute('src', this.file.large_path);
        } else {
            img.setAttribute('src', this.file.icon_url);
        }

        document.getElementById(this.options.body_left_id).appendChild(img);
    }

    this.addEditorFileContents = function () {

        var self = this;

        var textFields = [
            'name', 'mimetype', 'readable_created_at', 'readable_size', 'readable_dimensions', 'caption', 'description', 'seo_description',
        ];

        var valueFields = [
            'title', 'alt_text', 'copyright', 'seo_title', 'seo_keywords', 'public_path', 'visibility',
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
        textFields.forEach(function (value) {
            document.querySelector("[editor-title='" + value + "']").appendChild(
                document.createTextNode((self.file[value] != null ? self.file[value] : ''))
            );
        });

        // Populate the value fields
        valueFields.forEach(function (value) {
            document.querySelector("[editor-title='" + value + "']").value = (self.file[value] != null ? self.file[value] : '');
        });

        // Set button links
        linkFields.forEach(function (value) {
            document.querySelector("[editor-title='" + value + "']").setAttribute('href', self.file[value]);
        });

        // Show image only fields
        if (self.file.type == 'image') {
            imageOnlyFields.forEach(function (value) {
                document.querySelector("[editor-title='" + value + "']").parentElement.style.display = 'block';
            });
        }

        // Hide fields if file is private
        if (self.file.visibility == 'private') {
            hiddenFieldsIfPrivate.forEach(function (value) {
                document.querySelector("[editor-title='" + value + "']").parentElement.style.display = 'none';
            });
        }

        // Things specifically for the active section
        if (this.section == 'active') {
            if (self.file.can_trash) {
                document.getElementById(this.options.trash_button_identifier).style.display = 'flex';
            }

            if (self.file.can_update) {
                document.getElementById(this.options.save_button_identifier).style.display = 'flex';
            }
        }

        // Things specifically for the trash section
        if (this.section == 'trash') {

            // Disable editable fields when on trash
            document.querySelectorAll('.'+this.options.disable_fields_on_trash_class).forEach(function (element) {
                element.setAttribute('disabled', true);
            });

            // Hide public link
            document.querySelector(this.options.public_path_identifier).parentElement.style.display = 'none';

            // Hide the buttons
            document.getElementById(this.options.button_links_container_id).style.display = 'none';

            // Show/hide footer buttons
            if (self.file.can_restore) {
                document.getElementById(this.options.restore_button_identifier).style.display = 'flex';
            }

            if (self.file.can_delete) {
                document.getElementById(this.options.delete_button_identifier).style.display = 'flex';
            }

            document.getElementById(this.options.trash_button_identifier).style.display = 'none';
            document.getElementById(this.options.save_button_identifier).style.display = 'none';
        }
    }

    this.goToNextFile = function (file) {

        if (! this.hasNextFile()) {
            return;
        }

        var nextElement = this.getNextFileElement();

        this.closeEditor();
        this.openEditor(file, nextElement);
    }

    this.goToPreviousFile = function (file) {

        if (! this.hasPreviousFile()) {
            return;
        }

        var previousElement = this.getPreviousFileElement();

        this.closeEditor();
        this.openEditor(file, previousElement);
    }
}
