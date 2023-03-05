const Joi = require("joi")

const registerSchema = Joi.object({
	email: Joi.string().email(
		{ minDomainSegments: 2, 
			tlds: { allow: ['com', 'net'] } })
			.required(),
	password: Joi.string().alphanum().min(5).required(),
})

module.exports = registerSchema;