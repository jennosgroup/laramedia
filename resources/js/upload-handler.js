import Events from './events';
import Routes from './routes';

export default function UploadHandler() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events();

    /**
     * Start the upload.
     * 
     * @param  object  file
     * @param  FormData  formData
     *
     * @return void
     */
    this.start = function (file, formData) {
        var self = this;

        window.axios.post(new Routes().getUploadRoute(), formData).then(function (response) {
            if (response.data.success) {
                self.events.fire('upload_success', self.getSuccessEventPayload(file, response));
            } else {
                self.events.fire('upload_fail', self.getFailEventPayload(file, response));
            }
        }).catch(function (response) {
            self.events.fire('upload_error', self.getErrorEventPayload(file, response))
        }).then(function (response) {
            self.events.fire('upload_complete', self.getCompleteEventPayload(file, response));
        });
    }

    /**
     * Get the success event payload.
     * 
     * @param  obj  file
     * @param  obj  response
     * 
     * @return array
     */
    this.getSuccessEventPayload = function (file, response) {
        return [
            response.data.file, // The laravel media resource file
            file, // The browser file
            response.data // The data returned from the backend
        ];
    }

    /**
     * Get the fail event payload.
     * 
     * @param  obj  file
     * @param  obj  response
     * 
     * @return array
     */
    this.getFailEventPayload = function (file, response) {
        return [
            file, // The browser file
            response.data // The data returned from the backend
        ];
    }

    /**
     * Get the error event payload.
     * 
     * @param  obj  file
     * @param  obj  response
     * 
     * @return array
     */
    this.getErrorEventPayload = function (file, response) {
        return [
            file, // The browser file
            response // The axios response
        ];
    }

    /**
     * Get the complete event payload.
     * 
     * @param  obj  file
     * @param  obj  response
     * 
     * @return array
     */
    this.getCompleteEventPayload = function (file, response) {
        return [
            file, // The browser file
            response // The axios response
        ];
    }
}
