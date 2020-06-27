module.exports = function Spinner() {

    /**
     * Start up the spinner.
     *
     * @return void
     */
    this.start = function () {

        this.removeFromDom();

        // Do the html markup on the fly
        var markup = document.createElement('div');
        markup.setAttribute('id', 'laramedia-spinner-overlay');
        markup.innerHTML = "<div id='laramedia-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

        // Show the spinner
        document.querySelector('body').appendChild(markup);
    };

    /**
     * Remove the spinner from view.
     *
     * @return void
     */
    this.stop = function () {
        this.removeFromDom();
    };

    /**
     * Remove the spinner from the dom.
     *
     * @return void
     */
    this.removeFromDom = function () {

        var element = document.getElementById('laramedia-spinner-overlay');

        if (element != null) {
            element.remove();
        }
    }
}
