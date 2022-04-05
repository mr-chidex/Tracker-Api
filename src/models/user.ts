import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

import { UserDoc } from "./../libs/types";

type UserDocument = Document & UserDoc;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

//hash password on save to db
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(this.password, salt);
    this.password = hashedPass;
    next();
  } catch (error: any) {
    next(error);
  }
});

export const User = mongoose.model<UserDocument>("User", userSchema);
