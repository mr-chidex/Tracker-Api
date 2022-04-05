const JWT = require("jsonwebtoken");

type userData = {
  name: string;
  email: string;
  password: string;
  _id: string;
};

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
