const express = require('express')
const { getAllUsers, createUser, getUsersWithDelay, getUserById, updateUserPatch, updateUserPut, deleteUserById } = require('../controller/userController')

const {
    validateIdParam,
    validateCreateUser,
    validateQueryParams
} = require('../validation/userValidation')

const { tokenAuth } = require('./../validation/tokenAuth')
const { checkRole } = require('../validation/checkRole')
const usersRouter = express.Router()



usersRouter.use(tokenAuth)
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints for user management
 * /users:
 *   get:
 *     summary: Get a list of all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Successful response containing a list of users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsersResponse'
 *       400:
 *         description: Bad request or server error
 */
usersRouter.get("/", validateQueryParams, getAllUsers)

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Endpoints for user management
 * /users/:id:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         description: user id 
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Successful response containing a user information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsersResponse'
 *       400:
 *         description: Bad request or server error
 */
usersRouter.get('/:id', validateIdParam, getUserById)
// usersRouter.get('/', getUsersWithDelay)


usersRouter.use(checkRole)
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUser'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       '400':
 *         description: Failed to create user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         jobTitle:
 *           type: string
 *     UserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         user:
 *           $ref: '#/components/schemas/NewUser'
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 */

usersRouter.post("/", validateCreateUser, createUser)
/**
 * @swagger
 * /users/:id:
 *   patch:
 *     summary: patch a user by id
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUser'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       '400':
 *         description: Failed to create user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         jobTitle:
 *           type: string
 *     UserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         user:
 *           $ref: '#/components/schemas/NewUser'
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 */
usersRouter.patch('/:id', validateIdParam, updateUserPatch)
/**
 * @swagger
 * /users/:id:
 *   put:
 *     summary: put a user by id
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUser'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 *       '400':
 *         description: Failed to create user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         jobTitle:
 *           type: string
 *     UserResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         user:
 *           $ref: '#/components/schemas/NewUser'
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 */
usersRouter.put('/:id', validateIdParam, updateUserPut)

/**
 * @swagger
 * /users/:id:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

usersRouter.delete('/:id', validateIdParam, deleteUserById)

module.exports = usersRouter


/**
 * @swagger
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 *     description: Use the value 'Bearer {token}' (with no quotes) in the Authorization header to authenticate
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         role:
 *           type: string
 *     UsersResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *       example:
 *         status: success
 *         message: Users retrieved successfully
 *         users:
 *           - id: 1
 *             username: user1
 *             email: user1@example.com
 *             role: user
 *           - id: 2
 *             username: user2
 *             email: user2@example.com
 *             role: admin
 */