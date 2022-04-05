import { RequestHandler } from "express";

export const signUp: RequestHandler = async (req, res) => {
  console.log(req.body);
  res.json({ message: "signup" });
};
