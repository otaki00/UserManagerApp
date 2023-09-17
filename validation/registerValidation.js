const { registerSchema } = require('../schema/validationSchema')




exports.registerValidation = (req, res, next) => {
    const { error } = registerSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
}
