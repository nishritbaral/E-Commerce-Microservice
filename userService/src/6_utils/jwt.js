import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey, { expiresIn: "5d" });
  return token;
};
