const { checkIfUserAlredyExistForLogin } = require('./userDataService')
const { generateToken } = require('../utils/authToken')


exports.loginService = async (loggedUser) => {
    try {
        if (await checkIfUserAlredyExistForLogin(loggedUser)){
            return generateToken(loggedUser)
        }
        return null
    } catch (error) {
        throw error
    }
}