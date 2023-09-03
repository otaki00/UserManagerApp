const { loginSchema } = require('../schema/validationSchema')


const loginValidation = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}

module.exports = loginValidation
