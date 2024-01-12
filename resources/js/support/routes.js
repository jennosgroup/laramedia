export default function Routes() {
    /**
     * Get the options route.
     * 
     * @return string
     */
    this.getOptionsRoute = function () {
        return document.head.querySelector("meta[name='laramedia_options_route']").content;
    }

    /**
     * Get the files route.
     * 
     * @return string
     */
    this.getFilesRoute = function () {
        return document.head.querySelector("meta[name='laramedia_files_route']").content;
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
