import express from "express";
import contactsControllers from "../../controllers/contacts-controllers.js";
import { authenticate, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", isValidId, contactsControllers.getById);

contactsRouter.post(
  "/",
  validateBody(contactsSchemas.contactsAddSchema),
  contactsControllers.add
);

contactsRouter.delete("/:contactId", isValidId, contactsControllers.deleteById);

contactsRouter.put(
  "/:contactId",
  isValidId,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsControllers.updateById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  contactsControllers.updateFavorite
);

export default contactsRouter;
