import JWT from "jsonwebtoken";

import { Payload } from "./../libs/types";

export default (user: Payload) => {
  return JWT.sign(
    {
      iat: Date.now(),
      _id: user._id,
      name: user.name,
      email: user.email,
      iss: "Mr-Chidex",
    },
    process.env.SECRET_KEY!,
    { expiresIn: "24h" }
  );
};
