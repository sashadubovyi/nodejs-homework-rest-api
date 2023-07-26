import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchamas from "../../schemas/users-schamas.js";
import authControllers from "../../controllers/auth-controllers.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(usersSchamas.userSignupSchama),
  authControllers.signup
);

authRouter.post(
  "/signin",
  validateBody(usersSchamas.userSigninSchama),
  authControllers.signin
);

export default authRouter;
