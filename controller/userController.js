const { getAllUser, getUserById, createUser, updateUserPatch, updateUserPut, deleteUserById, getUsersWithDelay } = require('../services/userService');
const Response  = require('../utils/responseObject')




// route handlers
exports.getAllUsers = async (req, res) => {
    try {
        const page = req.query.page
        const response = await getAllUser(page)
        res.json(response)
    } catch (error) {
        res.json(Response.jsonResponse("failed", error.message));
    }
}

exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const response = await getUserById(id)
        res.json(response)
    } catch (error) {
        res.json(Response.jsonResponse("failed", error.message));
    }
}

exports.createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const createdUser = await createUser(newUser);
        res.status(201).json(createdUser.data);
    } catch (error) {
        res.status(400).json(Response.jsonResponse("failed", error.message));
    }
};

exports.updateUserPatch = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await updateUserPatch(userId, req.body)
        res.json(response);
    } catch (error) {
        res.status(400).json(Response.jsonResponse("failed", error.message));
    }
};

exports.updateUserPut = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await updateUserPut(userId, req.body)
        res.json(response);
    } catch (error) {
        res.status(400).json(Response.jsonResponse("failed", error.message));
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        await deleteUserById(userId);
        res.status(302).json(Response.jsonResponse("success", "user was deleted successfully"));
    } catch (error) {
        res.status(400).json(Response.jsonResponse("failed", error.message));
    }
};

// exports.getUsersWithDelay = async (req, res) => {
//     try {
//         const delay = req.query.delay;
//         const response = await getUsersWithDelay(delay)
//         res.json(response);
//     } catch (error) {
//         res.status(400).json(Response.jsonResponse("failed", error.message));
//     }
// };



