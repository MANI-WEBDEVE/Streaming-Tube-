class ApiEorror extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.errors = errors;
        this.success = false;

        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.costructor);
        }
    }
}

export { ApiEorror };
