const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.tokenAuth = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == undefined) res.status(401).send('Unauthorized')
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) {
            res.json(err.message) 
        }
    })
    next()
}

