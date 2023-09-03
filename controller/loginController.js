const { loginService } = require('../services/loginService')


const loginController = async (req, res) => {
    try {
        const token = await loginService(req.body)
        if(token){
            res.json({ message: "you are logged-in successfully", accessToken: token })
        }
        res.status(400).json({ status: "faild", message: "the password or username are incorrect" })
    } catch (error) {
        res.status(400).json({ status: "failed", message: error.message })
    }
}

module.exports = loginController