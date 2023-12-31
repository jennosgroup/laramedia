import Swal from 'sweetalert2';

export default function AxiosError() {

    /**
     * Error status and their text.
     *
     * @var object
     */
    this.errorTexts = {
        100: 'Continue',
        101: 'Switching Protocols',
        102: 'Processing',
        200: 'OK',
        201: 'Created',
        202: 'Accepted',
        203: 'Non-Authoritative Information',
        204: 'No Content',
        205: 'Reset Content',
        206: 'Partial Content',
        207: 'Multi-Status',
        208: 'Already Reported',
        226: 'IM Used',
        300: 'Multiple Choices',
        301: 'Moved Permanently',
        302: 'Found',
        303: 'See Other',
        304: 'Not Modified',
        305: 'Use Proxy',
        307: 'Temporary Redirect',
        308: 'Permanent Redirect',
        400: 'Bad Request',
        401: 'Unauthorized',
        402: 'Payment Required',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed',
        406: 'Not Acceptable',
        407: 'Proxy Authentication Required',
        408: 'Request Timeout',
        409: 'Conflict',
        410: 'Gone',
        411: 'Length Required',
        412: 'Precondition Failed',
        413: 'Payload Too Large',
        414: 'URI Too Long',
        415: 'Unsupported Media Type',
        416: 'Range Not Satisfiable',
        417: 'Expectation Failed',
        418: 'I\'m a teapot',
        421: 'Misdirected Request',
        422: 'Unprocessable Entity',
        423: 'Locked',
        424: 'Failed Dependency',
        425: 'Reserved for WebDAV advanced collections expired proposal',
        426: 'Upgrade Required',
        428: 'Precondition Required',
        429: 'Too Many Requests',
        431: 'Request Header Fields Too Large',
        451: 'Unavailable For Legal Reasons',
        500: 'Internal Server Error',
        501: 'Not Implemented',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: 'Gateway Timeout',
        505: 'HTTP Version Not Supported',
        506: 'Variant Also Negotiates',
        507: 'Insufficient Storage',
        508: 'Loop Detected',
        510: 'Not Extended',
        511: 'Network Authentication Required',
    }

    /**
     * Handle the error.
     *
     * @param  object  axiosError
     *
     * @return void
     */
    this.handleError = function (axiosError) {
        if (! axiosError.hasOwnProperty('response')) {
            return;
        }

        var error = axiosError.response;

        if (axiosError.statusText == 'abort') {
            return;
        }

        if (axiosError.status == 422) {
            return this.handleValidationErrors(error);
        }

        if (axiosError.status == 401) {
            return this.handleInvalidatedSessionError(error);
        }

        if (axiosError.status == 403) {
            return this.handleUnauthorizedError(error);
        }

        return this.handleOtherErrors(error);
    }

    /**
     * Handle the validation errors.
     *
     * @param  obj  error
     *
     * @return void
     */
    this.handleValidationErrors = function (error) {

        var errors = [];

        var validationErrors = error.request.responseJSON.errors;

        for (var key in validationErrors) {
            if (! validationErrors.hasOwnProperty(key)) {
                return;
            }
            validationErrors[key].forEach(function (value) {
                errors.push(value);
            });
        };

        return Swal.fire({
            title: 'Validation Errors',
            text: errors.join('<br>'),
            icon: 'error',
        });
    }

    /**
     * Handle the unauthenticated session error.
     *
     * @param  obj  error
     *
     * @return void
     */
    this.handleInvalidatedSessionError = function (error) {
        return Swal.fire({
            title: 'Unauthenticated Session',
            text: 'Your session has been invalidated due to inactivity. Please refresh the page and re-login.',
            icon: 'error',
        });
    }

    /**
     * Handle unauthorized error.
     *
     * @param  obj  error
     *
     * @return void
     */
    this.handleUnauthorizedError = function (error) {
        return Swal.fire({
            title: 'Unauthorized Action',
            text: 'You are not authorized to perform that action.',
            icon: 'error',
        });
    }

    /**
     * Handle errors that are not explicitly defined above.
     *
     * @param  obj  error
     *
     * @return void
     */
    this.handleOtherErrors = function (error) {
        var message = [];
        var text = null;

        if (this.errorTexts.hasOwnProperty(error.status)) {
            text = this.errorTexts[error.status]
        }

        message.push('Oops, something went wrong!')
        message.push('Refresh the page and try again or contact your website administrator if the problem persists.');

        if (text != null) {
            message.push(error.status + ' - ' + text + '.');
        }

        return Swal.fire({
            title: 'Error',
            text: message.join(' '),
            icon: 'error',
        });
    }
}
