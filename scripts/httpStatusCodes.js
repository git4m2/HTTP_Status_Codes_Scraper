// List acquired from the following code...
// https://github.com/git4m2/HTTP_Status_Codes_Scraper

// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

class httpStatusCodes {
    constructor() {
        this.CONTINUE = 100;
        this.SWITCHING_PROTOCOL = 101;
        this.PROCESSING = 102;
        this.EARLY_HINTS = 103;
        this.OK = 200;
        this.CREATED = 201;
        this.ACCEPTED = 202;
        this.NON_AUTHORITATIVE_INFORMATION = 203;
        this.NO_CONTENT = 204;
        this.RESET_CONTENT = 205;
        this.PARTIAL_CONTENT = 206;
        this.MULTI_STATUS = 207;
        this.ALREADY_REPORTED = 208;
        this.IM_USED = 226;
        this.MULTIPLE_CHOICE = 300;
        this.MOVED_PERMANENTLY = 301;
        this.FOUND = 302;
        this.SEE_OTHER = 303;
        this.NOT_MODIFIED = 304;
        this.TEMPORARY_REDIRECT = 307;
        this.PERMANENT_REDIRECT = 308;
        this.BAD_REQUEST = 400;
        this.UNAUTHORIZED = 401;
        this.PAYMENT_REQUIRED = 402;
        this.FORBIDDEN = 403;
        this.NOT_FOUND = 404;
        this.METHOD_NOT_ALLOWED = 405;
        this.NOT_ACCEPTABLE = 406;
        this.PROXY_AUTHENTICATION_REQUIRED = 407;
        this.REQUEST_TIMEOUT = 408;
        this.CONFLICT = 409;
        this.GONE = 410;
        this.LENGTH_REQUIRED = 411;
        this.PRECONDITION_FAILED = 412;
        this.PAYLOAD_TOO_LARGE = 413;
        this.URI_TOO_LONG = 414;
        this.UNSUPPORTED_MEDIA_TYPE = 415;
        this.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
        this.EXPECTATION_FAILED = 417;
        this.I_AM_A_TEAPOT = 418;
        this.MISDIRECTED_REQUEST = 421;
        this.UNPROCESSABLE_ENTITY = 422;
        this.LOCKED = 423;
        this.FAILED_DEPENDENCY = 424;
        this.TOO_EARLY = 425;
        this.UPGRADE_REQUIRED = 426;
        this.PRECONDITION_REQUIRED = 428;
        this.TOO_MANY_REQUESTS = 429;
        this.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
        this.UNAVAILABLE_FOR_LEGAL_REASONS = 451;
        this.INTERNAL_SERVER_ERROR = 500;
        this.NOT_IMPLEMENTED = 501;
        this.BAD_GATEWAY = 502;
        this.SERVICE_UNAVAILABLE = 503;
        this.GATEWAY_TIMEOUT = 504;
        this.HTTP_VERSION_NOT_SUPPORTED = 505;
        this.VARIANT_ALSO_NEGOTIATES = 506;
        this.INSUFFICIENT_STORAGE = 507;
        this.LOOP_DETECTED = 508;
        this.NOT_EXTENDED = 510;
        this.NETWORK_AUTHENTICATION_REQUIRED = 511;
    }
}

export { httpStatusCodes };