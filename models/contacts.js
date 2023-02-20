const fs = require("fs/promises");
const path = require("path");
const nanoid = require('nanoid')
const contactPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactPath);
	return JSON.parse(data);
}

const getContactById = async (contactId) => {const contacts = await listContacts();
	const contact = contacts.find(item => item.contactId === contactId);
	return contact || null;}

const removeContact = async (contactId) => {
  const contacts = await listContacts();
 const index = contacts.findIndex(item => item.contactId === contactId);
 if (index === -1) {
	return null;
 };
const [remove] = contacts.splice(index, 1)

await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
return remove;
}

const addContact = async (body) => {
  const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		...body,
	}
	contacts.push(newContact);

await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
return newContact;
}

const updateContact = async (contactId, body) => {
  const contactsList = await listContacts();
  const index = contactsList.findIndex((item) => item.id === contactId);

  if (index === -1) {
      return null;
  }

  contactsList[index] = { id: contactId, ...body };
  await fs.writeFile(contactPath, JSON.stringify(contactsList, null, 2));
  return contactsList[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
