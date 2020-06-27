module.exports = function Events() {

    /**
     * Hold our events subscribers.
     *
     * @var obj
     */
    this.events = {};

    /**
     * Subscribe to an event.
     *
     * @param  string|array  events
     * @param  callable  callable
     *
     * @return void
     */
    this.on = function (events, callable) {
        var self = this;

        if (! Array.isArray(events)) {
            events = [events];
        }

        events.forEach(function (event) {
            if (! self.events.hasOwnProperty(event)) {
                self.events[event] = [];
            }
            self.events[event].push(callable);
        });
    }

    /**
     * Fire off the event.
     *
     * @param  string  event
     * @param  array  params
     *
     * @return mixed
     */
    this.fire = function (event, params) {

        // Do nothing if no event registered
        if (! this.events.hasOwnProperty(event)) {
            return;
        }

        this.events[event].forEach(function (callable) {
            if (typeof params == 'undefined') {
                callable();
            } else {
                callable(...params);
            }
        });
    }
}
