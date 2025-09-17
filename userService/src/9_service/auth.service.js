import { hashPassword } from "../6_utils/passwordHash.js";
import userTable from "../3_models/user.schema.js";

export const registerService = async (newUser) => {
  const user = await userTable.findOne({ email: newUser.email });
  if (user) {
    throw new Error("User Already Exists");
  }

  const hashedPassword = await hashPassword(newUser.password);

  newUser.password = hashedPassword;

  await userTable.create(newUser);
  return newUser;
};

export const loginService = () => {};
