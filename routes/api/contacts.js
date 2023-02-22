const express = require('express')

const contactsOperations = require("../../models/contacts");

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contactsList = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      contactsList,
    },
  })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
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
