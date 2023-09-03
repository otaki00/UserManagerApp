const bcrypt = require('bcrypt')
const { generateToken } = require('../utils/authToken')
const { addUserToFile, checkIfUserAlredyExist } = require('./userDataService')
require('dotenv').config();

const hashPassword = async (unhashedPassword) => {
    try {
        const hashedPassword = await bcrypt.hash(unhashedPassword, +process.env.SALT_ROUNDS);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}


const createFinalUser = async (newUser) => {
    const hashedPassword = await hashPassword(newUser.password)
    newUser.password = hashedPassword
    return newUser
}

exports.registerService = async (newUser) => {
    try {
        if(! await checkIfUserAlredyExist(newUser)){
            const user = await createFinalUser(newUser)
            addUserToFile(user)
            return generateToken(user)
        }
        return null
    } catch (error) {
        throw error
    }
}