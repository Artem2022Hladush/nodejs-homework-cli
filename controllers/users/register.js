const { User } = require("../../models");
// const { HttpError } = require("../../helpers");

const register = async (req, res) => {
	const newUser = await User.create(req.body);

	res.status(201).json({
		status: "create",
		code: 201,
		data: {
			newUser
		}
	})
}

module.exports = register;