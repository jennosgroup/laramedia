import AxiosError from './support/axios-error';
import Events from './support/events';
import Handler from './support/loader-handler';
import Routes from './support/routes';
import Lodash from 'lodash';

const CancelToken = window.axios.CancelToken;

export default function FilesLoader() {
    /**
     * The events instance.
     *
     * @var object
     */
    this.events = new Events;

    /**
     * The queue to store the loaded files.
     *
     * @var object
     */
    this.filesQueue = {};

    /**
     * The queue that would contain the most recently loaded files.
     *
     * @var object
     */
    this.recentFilesQueue = {};

    /**
     * The files count.
     *
     * @var int
     */
    this.filesCount = 0;

    /**
     * The recent files count.
     *
     * @var int
     */
    this.recentFilesCount = 0;

    /**
     * The number of recent loads completed.
     * 
     * @var int
     */
    this.recentLoadsCompleted = 0;

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
     * The options.
     * 
     * @var obj
     */
    this.options = {};

    /**
     * The store the cancel tokens.
     * 
     * @var array
     */
    this.cancelTokens = [];

    /**
     * Start the loader.
     *
     * @return void
     */
    this.start = function () {
        var self = this;

        window.axios.get(new Routes().getOptionsRoute()).then(function (response) {
            // We are going to take the system options and set it into our options queue.
            // However, the options that were set through the loader should take precedence.
            self.setOptions(Lodash.assign(response.data, self.options));

            // Let's load fresh content, that will take the set options into consideration.
            self.loadFreshContent();
        }).catch(function (response) {
            new AxiosError.handleError(response);
        });
    }

    /**
     * Set the options.
     * 
     * @param  obj  options
     *
     * @return void
     */
    this.setOptions = function (options) {
        if (typeof options == 'undefined' || options == null || options == '') {
            return this;
        }

        if (Object.keys(options).length < 1) {
            return this;
        }

        for (var option in options) {
            this.options[option] = options[option];

            // Add the user option to the request parameter if it's an option
            if (this.requestParameters.hasOwnProperty(option)) {
                this.requestParameters[option] = options[option];
            }
        }

        return this;
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
     * Load fresh content.
     * 
     * This will disregard all previous loads.
     *
     * @return void
     */
    this.loadFreshContent = function () {
        // Cancel all previous load requests
        this.cancelRequests();

        // Reset some things
        this.filesQueue = {};
        this.recentFilesQueue = {};
        this.filesCount = 0;
        this.recentFilesCount = 0;
        this.recentLoadsCompleted = 0;

        // Set flags
        this.isFirstLoad = true;
        this.allFilesLoaded = false;

        // Fresh content page should always be the first page
        this.requestParameters.page = 1;

        // Load up the content now
        this.loadContent();
    }

    /**
     * Load up content.
     * 
     * This bulds upon the request parameters properties and previous loads.
     *
     * @return void
     */
    this.loadContent = function () {
        var self = this;

        // Fire first load begin events
        if (this.isFirstLoad) {
            this.events.fire('first_load_begin');
        }

        // Fire load begin event
        this.events.fire('load_begin');

        // If not first load, increment the page
        if (! this.isFirstLoad) {
            this.requestParameters.page += 1;
        }

        // Reset the recent metrics
        this.recentFilesQueue = {};
        this.recentFilesCount = 0;
        this.recentLoadsCompleted = 0;

        // Load files individually instead of in bulk so we get a response faster
        for (var iteration = 1; iteration <= this.options.pagination_total; iteration++) {
            // Here we get an axios cancel token. 
            // This will allow us to cancel requests that isn't needed anymore.
            var token = new CancelToken(function (token) {
                self.cancelTokens.push(token);
            });

            this.loadFile(iteration, token);
        }
    }

    /**
     * Load an individual file.
     * 
     * @param  int  iteration
     * @param  obj  cancelToken
     * 
     * @return void
     */
    this.loadFile = function (iteration, cancelToken) {
        var self = this;

        var handler = new Handler();
        var parameters = Lodash.clone(this.requestParameters);

        if (this.isFirstLoad) {
            parameters.page = parameters.page * iteration;
        } else {
            parameters.page = ((parameters.page - 1) * this.options.pagination_total) + iteration;
        }

        parameters.pagination_total = 1;

        // Event for when file is loaded by the handler
        handler.events.on('file_loaded', function (file) {
            self.filesQueue[file.uuid] = file;
            self.recentFilesQueue[file.uuid] = file;
            self.filesCount += 1;
            self.recentFilesCount += 1;

            self.events.fire('file_loaded', [file]);
        });

        // Event for when file error by handler
        handler.events.on('file_error', function (response) {
            new AxiosError().handleError(response);
        });

        // Event for when the load is complete
        handler.events.on('load_complete', function () {

            self.recentLoadsCompleted += 1;

            if (self.recentLoadsCompleted == self.options.pagination_total) {
                self.isFirstLoad = false;
                self.allFilesLoaded = self.recentFilesCount < self.recentLoadsCompleted;

                self.events.fire('files_loaded', [self.recentFilesQueue, self.recentFilesCount]);
                self.events.fire('load_complete', [self.allFilesLoaded, self.recentFilesQueue, self.recentFilesCount]);
            }
        });

        // Event for when last load is completed
        handler.events.on('last_load_complete', function () {
            self.isFirstLoad = false;
            self.allFilesLoaded = true;

            self.events.fire('last_load_complete');
        });

        handler.start(parameters, cancelToken);
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
        if (this.cancelTokens.length < 1) {
            return;
        }

        this.cancelTokens.forEach(function (request) {
            if (request != null) {
                request();
            }
        });
    }
}
