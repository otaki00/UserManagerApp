const express = require('express')
const { registerController } = require('../controller/registerController')
const { registerValidation } = require('../validation/registerValidation')

const registerRouter = express.Router()


/**
 * @swagger
 * tags:
 *   - name: Registration
 *     description: Endpoints for user registration
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Registration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegistration'
 *     responses:
 *       '200':
 *         description: Successful registration
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '400':
 *         description: Bad request or account already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 * components:
 *   schemas:
 *     UserRegistration:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *           type: string
 *       required:
 *         - email
 *         - username
 *         - password
 *         - role
 *       example:
 *         email: ohamed382@gmail.com
 *         username: omar hamed
 *         password: eyad1234
 *         role: developer
 *     AuthResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         accessToken:
 *           type: string
 *       example:
 *         message: You are logged in successfully
 *         accessToken: your_access_token_here
 */



registerRouter.post('/', registerValidation, registerController)

module.exports = registerRouter

