import { RequestHandler } from "express";
import { User } from "../models/user";

import { UserDoc } from "./../libs/types";
import { ValidateSignUp } from "./../validators/users";

export const signUp: RequestHandler = async (req, res) => {
  const { error, value } = ValidateSignUp(req.body);

  //check for errors
  if (error)
    return res.status(422).json({
      status: "error",
      message: error.details[0].message,
    });

  const { name, email, password }: UserDoc = value;

  //check if email is already in use
  const isExist = await User.findOne({ email: email });

  if (isExist)
    return res.status(422).json({
      status: "error",
      message: "email already in use.",
    });

  const newUser = new User({ name, email, password });

  newUser.save();

  res.status(201).json({ message: "signup successful", status: "success" });
};
