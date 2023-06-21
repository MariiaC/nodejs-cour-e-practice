const fs = require("fs/promises");
const path = require("path");


const contactsPath = path.join(__dirname, "contacts.json");


//функції для роботи з контактами

const listContacts = async () => {
  const allContacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(allContacts);
 };

const getContactById = async (id) => { 
  const contacts = await listContacts();
  const contactById = contacts.find(contact => contact.id === id);
  return contactById || null;
};

const removeContact = (id) => {

};

const addContact=(name, email, phone)=> {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
