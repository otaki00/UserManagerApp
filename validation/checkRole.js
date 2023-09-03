const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.checkRole = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == undefined) {
        return sendUnauthorized(res);
    }


    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) {
            return sendError(res, err.message);
        }
        if (user.role !== "team leader") {
            return sendUnauthorized(res);
        }
        next();
    });
}


function sendUnauthorized(res) {
    return res.status(401).send('Unauthorized');
}

function sendError(res, errorMessage) {
    return res.status(500).json({ error: errorMessage });
}
