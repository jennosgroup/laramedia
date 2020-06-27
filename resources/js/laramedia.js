const Spinner = require('./components/spinner');
const MediaLoader = require('./media-loader');
const MediaUploader = require('./media-uploader');

let spinner = new Spinner();

/**
 * Start up the spinner to let the user know to wait on the content.
 * The media loader will kill the spinner once it is finished, so we don't need to terminate it here.
 */
spinner.start();

// Send the request to get the upload options
var request = window.axios.get(
    document.head.querySelector("meta[name='media-options-route']").getAttribute('content')
);

// Do your thing once the options have been returned in a response
request.then(function (response) {

    let loader = new MediaLoader();

    // Get the upload options
    var uploadOptions = response.data;

    // Add options to the loader please
    loader.init(uploadOptions);
    loader.loadFreshContent();

    // Upload files when upload button is clicked
    document.getElementById('laramedia-upload-files-button').addEventListener('click', function (event) {
        loader.files_container_is_hidden = true;
        loader.hideFilesContainer();

        let uploader = new MediaUploader();

        uploader.init(uploadOptions);

        uploader.events.on('uploader-closed', function () {
            if (uploader.fileUploaded === true) {
                loader.loadFreshContent();
            }
            loader.files_container_is_hidden = false;
            loader.showFilesContainer();
        });

        uploader.open();
    });
});
