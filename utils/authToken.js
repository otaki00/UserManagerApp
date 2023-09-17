const jwt  = require('jsonwebtoken')
require('dotenv').config();


exports.generateToken = (user) => {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: process.env.JWT_EXPIRE })
    return token
}