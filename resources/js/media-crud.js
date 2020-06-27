const AjaxError = require('./components/ajax-error');
const CsrfToken = require('./components/csrf-token');
const Events = require('./components/events');
const Spinner = require('./components/spinner');
const CancelToken = window.axios.CancelToken;
const CancelTokenSource = CancelToken.source();

module.exports = function MediaCrud() {

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
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * Save a given file.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.saveFile = function (file, contents) {

        var self = this;

        self.spinner.start();

        var request = window.axios.patch(file.update_route, contents);

        request.then(function (response) {
            self.events.fire('file-saved', [response.data.data]);
        });

        request.catch(function (error) {
            self.ajaxError.handleError(error);
        });

        request.then(function () {
            self.spinner.stop();
        });
    }

    /**
     * Trash a given file.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.trashFile = function (file) {
        this.doSingleAction('trash', file);
    }

    /**
     * Restore a given file.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.restoreFile = function (file) {
        this.doSingleAction('restore', file);
    }

    /**
     * Delete a given file.
     *
     * @param  obj  file
     *
     * @return void
     */
    this.deleteFile = function (file) {
        this.doSingleAction('delete', file);
    }

    /**
     * Bulk trash a given list of files.
     *
     * @param  array  files
     *
     * @return void
     */
    this.bulkTrashFiles = function (files) {
        this.doBulkAction('trash', files);
    }

    /**
     * Bulk restore a given list of files.
     *
     * @param  array  files
     *
     * @return void
     */
    this.bulkRestoreFiles = function (files) {
        this.doBulkAction('restore', files);
    }

    /**
     * Bulk delete a given list of files.
     *
     * @param  array  files
     *
     * @return void
     */
    this.bulkDeleteFiles = function (files) {
        this.doBulkAction('delete', files);
    }

    /**
     * Carry out a single trash, restore or delete action.
     *
     * @param  string  action
     * @param  obj  file
     *
     * @return void
     */
    this.doSingleAction = function (action, file) {
        var self = this;

        this.spinner.start();

        // Make the request
        var request = window.axios({
            method: self.getActionMethod(action),
            url: self.getActionUrl(action, file),
        });

        // Handle the request
        request.then(function (response) {
            if (response.data.success == false) {
                return self.events.fire('file-not-'+self.getActionText(action), [file, action]);
            }
            self.events.fire('file-'+self.getActionText(action), [file, action]);
        });

        // Handle the error
        request.catch(function (error) {
            self.ajaxError.handleError(error);
        });

        // Finish the request
        request.then(function () {
            self.spinner.stop();
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

        var passedCount = 0;
        var failedCount = 0;
        var passedFiles = [];
        var failedFiles = [];
        var requests = [];

        this.spinner.start();

        files.forEach(function (file) {

            // Carry out the individual file action request
            var axios = window.axios({
                method: self.getActionMethod(action),
                url: self.getActionUrl(action, file),
            });

            // Process the response
            axios.then(function (response) {
                if (response.data == 0) {
                    failedCount++;
                    failedFiles.push(file);
                    self.events.fire(self.getBulkActionFailedEventName(action), [file, action]);
                } else {
                    passedCount++;
                    passedFiles.push(file);
                    self.events.fire(self.getBulkActionPassedEventName(action), [file, action]);
                }
            });

            // Process the error
            axios.catch(function (error) {
                self.ajaxError.handleError(error);
            });

            // Finish the request
            axios.then(function () {
                self.spinner.stop();
            });

            // Add the request to the queue so we can know when they're all completed
            requests.push(axios);
        });

        // When all the actions are completed on the files
        window.axios.all(requests).then(function () {
            self.events.fire(self.getBulkActionFinalPassedEventName(action), [
                passedFiles, passedCount, failedFiles, failedCount, action
            ]);
            self.events.fire(self.getBulkActionFinalFailedEventName(action), [
                failedFiles, failedCount, passedFiles, passedCount, action
            ]);
        });
    }

    /**
     * Get the action text for the bulk action.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getActionText = function (action) {
        if (action == 'trash') {
            return 'trashed';
        } else if (action == 'restore') {
            return 'restored';
        } else if (action == 'delete') {
            return 'deleted';
        }
    }

    /**
     * Get the bulk action url.
     *
     * @param  string  action
     * @param  obj  file
     *
     * @return string
     */
    this.getActionUrl = function (action, file) {
        if (action == 'trash') {
            return file.trash_route;
        } else if (action == 'restore') {
            return file.restore_route;
        } else if (action == 'delete') {
            return file.destroy_route;
        }
    }

    /**
     * Get the bulk action method
     *
     * @param  string  action
     *
     * @return string
     */
    this.getActionMethod = function (action) {
        if (action == 'trash' || action == 'delete') {
            return 'DELETE';
        } else if (action == 'restore') {
            return 'PATCH';
        }
    }

    /**
     * Get the bulk action single failed event name.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getBulkActionFailedEventName = function (action) {
        return 'bulk-file-not-'+this.getActionText(action);
    }

    /**
     * Get the bulk action single passed event name.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getBulkActionPassedEventName = function (action) {
        return 'bulk-file-'+this.getActionText(action);
    }

    /**
     * Get the bulk action final failed event name.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getBulkActionFinalFailedEventName = function (action) {
        return 'files-not-'+this.getActionText(action);
    }

    /**
     * Get the bulk action final passed event name.
     *
     * @param  string  action
     *
     * @return string
     */
    this.getBulkActionFinalPassedEventName = function (action) {
        return 'files-'+this.getActionText(action);
    }
}
