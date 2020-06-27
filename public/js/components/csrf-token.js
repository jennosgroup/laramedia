module.exports = function CsrfToken() {

    /**
     * Get the CSRF Token.
     *
     * @return string
     */
    this.get = function () {
        return document.head.querySelector("meta[name='csrf-token']").getAttribute('content');
    }
}
