import { UserDoc } from "./../libs/types";
const JWT = require("jsonwebtoken");

type userData = UserDoc & { _id: String };

export default (user: userData) => {
  return JWT.sign(
    {
      iat: Date.now(),
      _id: user._id,
      name: user.name,
      email: user.email,
      iss: "Mr-Chidex",
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
};
