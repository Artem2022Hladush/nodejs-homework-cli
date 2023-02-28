const express = require('express');
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const {contactShema} = require("../../shemas");
const {contactsValidate} = require("../../middlewars");

router.get('/', ctrl.getAll);

// router.get('/:contactId', ctrl.getById);

router.post('/', contactsValidate(contactShema), ctrl.add);

// router.delete('/:contactId', ctrl.remove);

// router.put('/:contactId', contactsValidate(contactShema), ctrl.updateById);

module.exports = router;