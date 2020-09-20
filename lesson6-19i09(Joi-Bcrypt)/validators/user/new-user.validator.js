const Joi = require('joi');
// const {EMAIL} = require('../../configs/regex.enum')

module.exports = Joi.object().keys({
    name: Joi.string().trim().alphanum().min(2).max(50).required(),
    // email: Joi.string().regex(EMAIL).max(50).required()
    username: Joi.string().trim().min(5).max(50).required(),
    age: Joi.number().greater(18).less(150),
    password: Joi.string().trim().min(5).required(),
    isHandsome: Joi.boolean().optional(),
    girls: Joi.array().items(
        Joi.object().keys({
            name: Joi.string().required()
        })
    )
        .optional()
        // Можна робити умову:
        .when('isHandsome', {is: true, then: Joi.required()})
})
