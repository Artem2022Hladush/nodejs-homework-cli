const {Contact} = require("../../models");


const add = async (req, res) => {
	const {body} = req;
		const newContact = await Contact.create(body);
		res.json({
			status: "success",
			code: 201,
			data: {
				newContact
			},
		});
};

module.exports = add;