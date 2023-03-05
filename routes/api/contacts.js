const express = require("express")
const router = express.Router();

const {contacts: ctrl} = require("../../controllers");
const {contactShema, updateFavorite} = require("../../shemas");
const {validateBody, isValidId} = require("../../middlewars");

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(contactShema), ctrl.add);

router.delete('/:contactId', isValidId,  ctrl.remove);

router.put('/:contactId', isValidId,   validateBody(contactShema), ctrl.updateById);

router.patch('/:contactId/favorite', isValidId,   validateBody(updateFavorite), ctrl.updateFavorite);

module.exports = router;