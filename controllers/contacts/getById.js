const {Contact} = require("../../models");
const {HttpError} = require("../../helpers");

const getById = async (req, res) => {
	const {contactId} = req.params;
	const contact = await Contact.findById(contactId)

if(!contact) {
	throw HttpError(404, "Not found");
};
	res.json({
		status: "success",
		code: 200,
		data: {
			contact,
		},
	});
};

module.exports = getById;