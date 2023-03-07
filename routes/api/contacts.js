const express = require("express")
const router = express.Router();

const {contacts: ctrl} = require("../../controllers");
const {contactShema, updateFavorite} = require("../../shemas");
const {validateBody, isValidId, authenticate} = require("../../middlewars");

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(contactShema), ctrl.add);

router.delete('/:contactId', authenticate, isValidId,  ctrl.remove);

router.put('/:contactId', authenticate, isValidId,   validateBody(contactShema), ctrl.updateById);

router.patch('/:contactId/favorite', authenticate, isValidId,   validateBody(updateFavorite), ctrl.updateFavorite);

module.exports = router;