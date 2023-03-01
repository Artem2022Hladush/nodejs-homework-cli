const Contact = require("../models/contact")
const {ctrlWrapper, HttpError} =  require("../helpers")


const getAll = async (req, res) => {
		const result = await Contact.find();
	res.json({
		status: "success",
		code: 200,
		data: {
			contacts: result
		},
	})
};

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

module.exports = {
	getAll: ctrlWrapper(getAll),
	getById: ctrlWrapper(getById),
	add: ctrlWrapper(add),
	updateById: ctrlWrapper(updateById),
	remove: ctrlWrapper(remove),
	updateFavorite: ctrlWrapper(updateFavorite),
	}