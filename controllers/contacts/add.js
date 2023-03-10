const {Contact} = require("../../models");


const add = async (req, res) => {
	const {_id: owner } =req.user;
	const {body} = req;
		const newContact = await Contact.create({...body, owner});
		res.json({
			status: "success",
			code: 201,
			data: {
				newContact
			},
		});
};

module.exports = add;