const {HttpError} = require("../helpers");

const contactsValidate = shema => {
	const func = (req, res, next) => {
		const {body} = req;
			const {error} = shema.validate(body);
			if(error) {
				throw HttpError(400, error.message)
			};
			next();
	}
	return func;
};

module.exports = contactsValidate;