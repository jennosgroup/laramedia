import AxiosError from './axios-error';
import Events from './events';

const CancelToken = window.axios.CancelToken;

export default function FilesLoader() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * The options.
     * 
     * @var obj
     */
    this.options = {};

    /**
     * The queue to store the loaded files.
     *
     * @var object
     */
    this.filesQueue = {};

    /**
     * The files count.
     *
     * @var int
     */
    this.filesCount = 0;

    /**
     * The queue that would contain the most recently loaded files.
     *
     * @var object
     */
    this.filesRecentQueue = {};

    /**
     * The recent files count.
     *
     * @var int
     */
    this.recentFilesCount = 0;

    /**
     * Whether content is currently loading.
     *
     * @var bool
     */
    this.isLoadingContent = false;

    /**
     * Indicate whether this is the first load.
     * 
     * @var bool
     */
    this.isFirstLoad = false;

    /**
     * If all the files are loaded.
     * 
     * @var bool
     */
    this.allFilesLoaded = false;

    /**
     * To store the axios cancel instance.
     *
     * @var obj|null
     */
    this.cancel = null;

    /**
     * The parameters for when we are sending off a load request.
     *
     * @var object
     */
    this.requestParameters = {
        page: 1,
        type: null,
        disk: null,
        visibility: null,
        ownership: null,
        section: 'active',
        search: null,
    };

    /**
     * Start the loader.
     *
     * @return void
     */
    this.start = function () {
        this.loadFreshContent();
    }

    /**
     * Set the request parameters.
     *
     * @param  object  parameters
     *
     * @return void
     */
    this.setRequestParameters = function (parameters) {
        if (typeof parameters == 'undefined' || parameters == null || parameters == '') {
            return this;
        }

        if (Object.keys(parameters).length < 1) {
            return this;
        }

        for (var key in parameters) {
            if (this.requestParameters.hasOwnProperty(key)) {
                this.requestParameters[key] = parameters[key];
            }
        }

        return this;
    }

    /**
     * Set the options.
     * 
     * @param  obj  options
     *
     * @return void
     */
    this.setOptions = function (options) {
        this.options = options;
        return this;
    }

    /**
     * Load up content from the start.
     *
     * @return void
     */
    this.loadFreshContent = function () {
        this.cancelRequests();
        this.isFirstLoad = true;

        // Fresh content page should always be the first page
        this.requestParameters.page = 1;

        // Reset some other things
        this.filesQueue = {};
        this.filesRecentQueue = {};
        this.filesCount = 0;
        this.recentFilesCount = 0;

        this.loadContent();
    }

    /**
     * Load up content. This bulds upon the request parameters properties.
     *
     * @return void
     */
    this.loadContent = function () {
        var self = this;

        this.isLoadingContent = true;

        if (this.isFirstLoad) {
            this.events.fire('first_load_begin');
        }

        this.events.fire('loading_begin');

        if (! this.isFirstLoad) {
            this.requestParameters.page += 1;
        }

        // Fire off the request
        window.axios.get(this.getFilesRoute(), {
            cancelToken: new CancelToken((c) => {self.cancel = c}),
            params: self.requestParameters,
        }).then(function (response) {
            self.filesRecentQueue = {};
            self.recentFilesCount = 0;

            response.data.data.forEach(function (file) {
                self.filesRecentQueue[file.uuid] = file;
                self.filesQueue[file.uuid] = file;
                self.filesCount += 1;
                self.recentFilesCount += 1;
                self.events.fire('file_loaded', [file]);
            });

            self.events.fire('files_loaded', [self.filesRecentQueue]);

            if (self.recentFilesCount < self.options.pagination_total) {
                self.allFilesLoaded = true;
            }
        }).catch(function (error) {
            new AxiosError().handleError(error);
        }).then(function () {
            self.events.fire('load_complete', [self.allFilesLoaded]);

            if (self.recentFilesCount < self.options.pagination_total) {
                self.events.fire('last_load_complete');
            }

            self.isLoadingContent = false;

            if (self.isFirstLoad) {
                self.isFirstLoad = false;
            }
        });
    }

    /**
     * Load content from some given parameters.
     *
     * @param  obj  parameters
     *
     * @return void
     */
    this.loadContentFromParameters = function (parameters) {
        this.setRequestParameters(parameters).loadFreshContent();
    }

    /**
     * Cancel all the requests.
     *
     * @return void
     */
    this.cancelRequests = function () {
        if (this.cancel != null) {
            this.cancel();
        }
    }

    /**
     * Get the files route.
     *
     * @return string
     */
    this.getFilesRoute = function () {
        return document.head.querySelector("meta[name='laramedia_files_route']").content;
    }
}
