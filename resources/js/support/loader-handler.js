import Events from './events';
import Routes from './routes';

export default function FilesLoader() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * Load an individual file.
     * 
     * @param  obj  parameters
     * @param  obj  token
     *
     * @return void
     */
    this.start = function (parameters, cancelToken) {
        var self = this;

        window.axios.get(new Routes().getFilesRoute(), {
            cancelToken: cancelToken,
            params: parameters,
        }).then(function (response) {
            if (response.data.data.length < 1) {
                return self.events.fire('last_load_complete');
            }
            
            response.data.data.forEach(function (file) {
                self.events.fire('file_loaded', [file]);
            });
        }).catch(function (response) {
            self.events.fire('file_error', [response]);
        }).then(function (response) {
            self.events.fire('load_complete');
        });
    }
}
