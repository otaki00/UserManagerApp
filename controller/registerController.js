const {registerService }= require('./../services/registerService')


exports.registerController = async (req, res) => {
    try {
        const token = await registerService(req.body)
        token != null ? res.status(200).json({ message: "you are logged-in successfully", accessToken: token }) : res.status(400).json({ status: "faild", message: "this account is already exist" })
    } catch (error) {
        res.status(400).json({status: "failed", message: error.message})
    }
}