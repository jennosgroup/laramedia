export default function Routes() {
    this.getRoutes = function () {
        return JSON.parse(document.head.querySelector("meta[name='laramedia_routes']").content);
    }

    /**
     * Get the options route.
     * 
     * @return string
     */
    this.getOptionsRoute = function () {
        var routes = this.getRoutes();
        return routes['options'];
    }

    /**
     * Get the files route.
     * 
     * @return string
     */
    this.getFilesRoute = function () {
        var routes = this.getRoutes();
        return routes['files'];
    }

    /**
     * Get the upload route.
     * 
     * @return string
     */
    this.getUploadRoute = function () {
        var routes = this.getRoutes();
        return routes['upload'];
    }
}
