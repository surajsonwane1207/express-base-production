class ApiError extends Error{
    constructor(statusCode,messgae="Somwting went wrong",
    errors = [],stack=""){
        super(messgae)
        this.statusCode = this.statusCode
        this.data = null
        this.success = false
        this.errors = errors
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(stack,this.constructor)
        }
    }
}

export {ApiError}