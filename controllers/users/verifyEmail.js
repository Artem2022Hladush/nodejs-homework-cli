const {HttpError} = require("../../helpers");
const {User} = require("../../models");

const verifyEmail = async (req, res) => {
	const {verificationToken} = req.params;
	const user = await User.findOne({verificationToken});
	if(!user) {
		throw HttpError(401, "Email not found")
	};

	await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});

	res.status(200).json({
		code: 200,
		status: "Email verifycation success"
	})
};

module.exports = verifyEmail;