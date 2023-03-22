const {HttpError, sendEmail} = require("../../helpers");
const {User} = require("../../models");

const resendVerifyEmail = async (req, res) => {
	const {email} = req.body;
	const user = User.findOne({email});
	if(!user) {
		throw HttpError(401, "Email not found")
	};
	if(user.verify) {
		throw HttpError(401, "Email verify")
	};

	await sendEmail(email, user.verificationToken);

	res.json({
		message: "Email resend verify"
	})
};

module.exports = resendVerifyEmail;