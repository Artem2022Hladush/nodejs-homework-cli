const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require('uuid');

const register = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email});

	if(user) {
		throw HttpError(409, "Email in use")
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const avatarURL = gravatar.url(email);
	const verificationToken = uuidv4()

	const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});

	await sendEmail(email, verificationToken);

	res.status(201).json({
		status: "create",
		code: 201,
		data: {
			newUser
		}
	})
}

module.exports = register;