const express = require('express')
const loginController = require('../controller/loginController')
const loginValidation = require('../validation/loginValidation')

const loginRouter = express.Router()


loginRouter.use(loginValidation)
/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: This API is responsible for user login and authorization
 * /login:
 *   post:
 *     summary: Login the user
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             example:
 *               username: omar hamed
 *               password: omar1234
 *               role: developer
 *     responses:
 *       200:
 *         description: User logged in
 *         content:
 *           application/json:
 *             example:
 *               message: you are logged-in successfully
 *               accessToken: "access token here"
 *       400:
 *         description: Some server error
 */

loginRouter.post("/", loginController)
module.exports = loginRouter