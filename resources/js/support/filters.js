export default function Filters() {
    /**
     * Hold our filters.
     *
     * @var object
     */
    this.filters = {};

    /**
     * Subscribe to a filter.
     *
     * @param  string  filter
     * @param  callable  callable
     *
     * @return void
     */
    this.add = function (filter, callable) {
        if (! this.filters.hasOwnProperty(filter)) {
            this.filters[filter] = [];
        }

        this.filters[filter].push(callable);
    }

    /**
     * Apply the filter.
     *
     * @param  string  filter
     * @param  mixed  value
     * @param  array  params
     *
     * @return mixed
     */
    this.apply = function (filter, value, params) {

        if (! this.filters.hasOwnProperty(filter)) {
            return value;
        }

        this.filters[filter].forEach(function (callable) {
            if (typeof params == 'undefined') {
                value = callable(value);
            } else {
                value = callable(value, ...params);
            }
        });

        return value;
    }
}
