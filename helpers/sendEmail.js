const nodemailer = require("nodemailer");

require("dotenv").config();

const {META_PASS, BASE_URL} = process.env;

const nodemailerConfig = {
	host: "smtp.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "artemhladush@meta.ua",
		pass: META_PASS,
	}
};

const sendEmail = async (email, verificationToken) => {
	const transport = nodemailer.createTransport(nodemailerConfig);

	const emailOptions = {
		from: "artemhladush@meta.ua",
		to: email,
		subject: "Password Verification",
		html: `<p>Hello. To verify Your email:<a href="${BASE_URL}/api/users/verify/${verificationToken}" target="_blank">
		click here</a></p>`
	}

	try {
		await transport.sendMail(emailOptions)
	} catch (error) {
		console.log(error.message)
	}
};

module.exports = sendEmail;