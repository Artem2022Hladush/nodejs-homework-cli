const {Contact} = require("../../models");
const {HttpError} = require("../../helpers");

const remove = async (req, res) => {
	const {contactId} = req.params;
	const deleteContact = await Contact.findByIdAndRemove(contactId)
	if(!deleteContact) {
		throw HttpError(404, "Not found")
	};
	res.json({
		status: "delete contact",
		code: 200,
		data: {
			deleteContact
		},
});
};

module.exports = remove;