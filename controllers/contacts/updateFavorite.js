const {Contact} = require("../../models");
const {HttpError} = require("../../helpers");

const updateFavorite = async (req, res) => {
	const {contactId} = req.params;
	const {favorite} = req.body;

	if(!favorite) {
		throw HttpError(400, "missing field favorite")
	}

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

module.exports = updateFavorite;