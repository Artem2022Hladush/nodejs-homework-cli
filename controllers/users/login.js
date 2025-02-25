const {HttpError} = require("../../helpers");
const {User} = require("../../models");
const {tokenCreate} = require("../../helpers");

const bcrypt = require("bcryptjs")


const login = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email})

	if(!user) {
		throw HttpError(401, "Email or Passwor invalid")
	}

	if(!user.verify) {
		throw HttpError(401, "Email not verify")
	}

	const comparePassword = await bcrypt.compare(password, user.password);
	if(!comparePassword) {
		throw HttpError(401, "Email or Passwor invalid")
	}

	const token = tokenCreate(user);
	await User.findByIdAndUpdate(user._id, {token})

	res.status(200).json({
		status: "success",
		code: 200,
		token,
		data: {
			user
		}
	})
};

module.exports = login;