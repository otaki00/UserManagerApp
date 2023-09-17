class ResponseObject {

    static jsonResponse(status, message, token = null) {
        return {
            status: status,
            message: message,
            accessToken: token
        }
    }
}
module.exports = ResponseObject