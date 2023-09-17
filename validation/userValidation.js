const { idParamSchema, createUserSchema, queryParamSchema } = require('../schema/validationSchema')


const validateIdParam = (req, res, next, id) => {
    const { error } = idParamSchema.validate({ id });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateCreateUser = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateQueryParams = (req, res, next) => {
    const { error } = queryParamSchema.validate({
        page: req.query.page,
        per_page: req.query.per_page
    });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = {
    validateIdParam,
    validateCreateUser,
    validateQueryParams
};