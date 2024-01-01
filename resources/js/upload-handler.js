import Events from './events';

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

        var request = window.axios.post(this.getUploadRoute(), formData);

        request.then(function (response) {
            if (response.data.success) {
                self.events.fire('upload_success', [response.data.file, file, response.data]);
            } else {
                self.events.fire('upload_fail', [file, response.data]);
            }
        });

        request.catch(function (response) {
            self.events.fire('upload_error', [file, response])
        });

        request.then(function (response) {
            self.events.fire('upload_complete', [file, response]);
        });
    }

    /**
     * Get the upload route.
     * 
     * @return string
     */
    this.getUploadRoute = function () {
        return document.head.querySelector("meta[name='laramedia_upload_route']").content;
    }
}
