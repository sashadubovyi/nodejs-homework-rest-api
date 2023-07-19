import contactsService from "../models/contacts.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import Contact from "../models/Contact.js";
import contactsAddSchema from "../schemas/contacts-schemas.js";

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }
//   res.json(result);
// };

// const add = async (req, res) => {
//   const { error } = contactsAddSchema.validate(req.body);
//   if (error) {
//     throw HttpError(
//       400,
//       `Missing required ${error.details[0].context.key} field`
//     );
//   }
//   const result = await contactsService.addContact(req.body);
//   res.status(201).json(result);
// };

// const updateById = async (req, res) => {
//   const { error } = contactsAddSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, `Missing fields`);
//   }
//   const { contactId } = req.params;
//   const result = await contactsService.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }
//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contactsService.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, `Not found`);
//   }
//   res.json({
//     message: "Contact deleted",
//   });
// };

export default {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
