import { UserDoc } from "./../libs/types";
import Joi from "joi";

export const ValidateSignUp = (userDetails: UserDoc) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().min(3).required().email().normalize(),
    password: Joi.string().trim().min(3).required(),
  });

  return schema.validate(userDetails);
};

export const ValidateSignIn = (userDetails: UserDoc) => {
  const schema = Joi.object({
    email: Joi.string().trim().required().email().normalize(),
    password: Joi.string().trim().required(),
  });

  return schema.validate(userDetails);
};
