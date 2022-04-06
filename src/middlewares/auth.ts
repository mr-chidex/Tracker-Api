import { Payload } from "./../libs/types";
import JWT from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import { User } from "../models/user";

export default async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({
        message: "Access denied. You must be logged in",
        status: "error",
      });

    if (!authorization.startsWith("Bearer"))
      return res.status(401).json({
        message: "Access denied. You must be logged in",
        status: "error",
      });

    const token = authorization.replace("Bearer ", "");
    if (!token)
      return res.status(401).json({
        message: "Access denied. You must be logged in",
        status: "error",
      });

    const decodeToken = JWT.verify(token, process.env.SECRET_KEY!);

    // console.log("decodeToken", decodeToken);
    if (!decodeToken)
      return res.status(401).json({ message: "Unauthorized access" });

    const user = await User.findById((decodeToken as Payload)._id);
    req.user = user;
    next();
  } catch (error: any) {
    next(error);
  }
};
