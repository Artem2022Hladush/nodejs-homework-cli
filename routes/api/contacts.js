const express = require('express')
const Joi = require("joi")

const contactsOperations = require("../../models/contacts");
const {HttpError} =  require("../../helpers")

const router = express.Router()

const shema = Joi.object({
  name: Joi.string().min(5).max(20).required(),

  email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
   phone: Joi.string().min(5).max(15).required(),     
})

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
  try {
    const {body} = req;
    const {error} = shema.validate(body);
    if(error) {
      throw HttpError(400, error.message)
    }
    const newContact = await contactsOperations.addContact(body);
    res.json({
      status: "success",
      code: 201,
      data: {
        ...newContact
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
