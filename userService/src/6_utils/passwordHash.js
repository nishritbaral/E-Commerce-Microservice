import bcrypt from "bcrypt";

export const hashPassword = async (hashPassword) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(hashPassword, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (password, hashed) => {
  const check = await bcrypt.compare(password, hashed);
  return check;
};
