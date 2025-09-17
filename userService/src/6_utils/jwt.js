import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey, { expiresIn: "5d" });
  return token;
};

export const extractPayload = (token) => {
  let payload = null;
  try {
    const secretKey = process.env.SECRET_KEY;
    payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    throw new Error(error.message);
  }
};
