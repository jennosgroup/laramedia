export default function Events() {
    /**
     * Hold our events subscribers.
     *
     * @var object
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
    this.fire = function (events, params) {
        var self = this;

        if (! Array.isArray(events)) {
            events = [events];
        }

        events.forEach(function (event) {
            if (! self.events.hasOwnProperty(event)) {
                return;
            }

            self.events[event].forEach(function (callable) {
                if (typeof params == 'undefined') {
                    callable();
                } else {
                    callable(...params);
                }
            });
        });
    }
}
