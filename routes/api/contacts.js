const express = require("express")
const router = express.Router();

const {contacts: ctrl} = require("../../controllers");
const {contactShema, updateFavorite} = require("../../shemas");
const {contactsValidate, isValidId} = require("../../middlewars");

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', contactsValidate(contactShema), ctrl.add);

router.delete('/:contactId', isValidId,  ctrl.remove);

router.put('/:contactId', isValidId,   contactsValidate(contactShema), ctrl.updateById);

router.patch('/:contactId/favorite', isValidId,   contactsValidate(updateFavorite), ctrl.updateFavorite);

module.exports = router;