const Joi = require("joi");

const contactShema = Joi.object({
	name: Joi.string().min(5).max(20).required(),
	email: Joi.string()
      	.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
   phone: Joi.string().min(5).max(15).required(),     
});

module.exports = contactShema;