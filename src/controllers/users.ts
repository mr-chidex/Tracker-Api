import { RequestHandler } from "express";
import bcrypt from "bcryptjs";

import { User } from "../models/user";
import { UserDoc } from "./../libs/types";
import { ValidateSignIn, ValidateSignUp } from "./../validators/users";
import authToken from "../utils/authToken";

/**
 * @route - POST api/v1/users/signup
 * @access - Public
 * @description - signup a user
 */
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

/**
 * @route - POST api/v1/users/signin
 * @access - Public
 * @description - signin a user
 */
export const signIn: RequestHandler = async (req, res) => {
  const { error, value } = ValidateSignIn(req.body);

  //check for errors
  if (error)
    return res.status(422).json({
      status: "error",
      message: error.details[0].message,
    });

  const { email, password }: UserDoc = value;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(422).json({ message: "email or password is incorrect" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(400).json({ message: "email or password is incorrect" });

  const token = authToken(user);

  res.json({ token, status: "success" });
};
