const express = require('express')

const contactsOperations = require("../../models/contacts");
const {HttpError} =  require("../../helpers")

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contactsList = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      contactsList,
    },
  })
  } catch (error) {
  next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
try {
  const {contactId} = req.params;
  const contact = await contactsOperations.getContactById(contactId)

if(!contact) {
  throw HttpError(404, "Not found");
}

  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  })
} catch (error) {
  next(error)

}
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
