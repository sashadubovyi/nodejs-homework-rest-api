import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";

const userSignupSchama = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const userSigninSchama = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

export default {
  userSignupSchama,
  userSigninSchama,
};
