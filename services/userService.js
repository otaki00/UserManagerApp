
// services/userService.js
const axios = require('axios');

const apiUrl = 'https://reqres.in/api/users';

const getAllUser = async (page, delay=0) => {
    try {
        const response = await axios.get(`${apiUrl}?page=${page}&delay=${delay}`);
        return await response.data
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (id) => {
    try {
        const response =  await axios.get(`${apiUrl}/${id}`);
        console.log(await response.data);
        return await response.data
    } catch (error) {
        throw new Error(error.message);
    }
};

const createUser = async (newUser) => {
    const respons = await axios.post(apiUrl, newUser).data;
    return await respons.data
};

const updateUserPatch = async (userId, userData) => {
    const response = await axios.patch(`${apiUrl}/${userId}`, userData).data;
    return await response.data
};

const updateUserPut = async (userId, userData) => {
    const response = await axios.put(`${apiUrl}/${userId}`, userData).data;
    return await response.data
};

const deleteUserById = async (userId) => {
    await axios.delete(`${apiUrl}/${userId}`);
};

// const getUsersWithDelay = async (delay) => {
//     const response = await axios.get(`${apiUrl}?delay=${delay}`).data;
//     return await response.data
// };

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserPatch,
    updateUserPut,
    deleteUserById
}