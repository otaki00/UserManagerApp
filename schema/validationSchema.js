const joi = require('joi')

// Validation schema for :id parameter
const idParamSchema = joi.object({
    id: joi.number().integer().min(1).required()
});

// Validation schema for creating a user
const createUserSchema = joi.object({
    name: joi.string().min(4).required(),
    job: joi.string().valid('team leader', 'developer', 'project manager', 'QA').required()
});

// Validation schema for query parameters
const queryParamSchema = joi.object({
    page: joi.number().integer().min(1),
    per_page: joi.number().integer().min(1).max(6)
});

const registerSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    role: joi.string().valid('developer', 'trainee', 'software enginering', 'team leader').required()
});

const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().valid('developer', 'trainee', 'software enginering', 'team leader')
});

module.exports = {
    idParamSchema,
    createUserSchema,
    queryParamSchema,
    registerSchema,
    loginSchema
};