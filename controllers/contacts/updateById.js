const {Contact} = require("../../models");
const {HttpError} = require("../../helpers");

const updateById = async (req, res) => {
	const {contactId} = req.params;
	const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
	if(!updateContact) {
		throw HttpError(404, "Not found")
	};
	res.json({
		status: "update contact",
		code: 200,
		data: {updateContact},
});
};

module.exports = updateById;