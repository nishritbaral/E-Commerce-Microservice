import { comparePassword, hashPassword } from "../6_utils/passwordHash.js";
import userTable from "../3_models/user.schema.js";
import { generateToken } from "../6_utils/jwt.js";

export const registerService = async (newUser) => {
  const user = await userTable.findOne({ email: newUser.email });
  if (user) {
    throw new Error("User Already Exists");
  }

  const hashedPassword = await hashPassword(newUser.password);

  newUser.password = hashedPassword;

  await userTable.create(newUser);
  newUser.password = undefined;
  return { message: "Registered Successfully", userDetails: newUser };
};

export const loginService = async (loginCredentials) => {
  const user = await userTable.findOne({ email: loginCredentials.email });
  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const plainPassword = loginCredentials.password;
  const hashedPassword = user.password;
  const checkPassword = await comparePassword(plainPassword, hashedPassword);
  if (!checkPassword) {
    throw new Error("Password is Incorrect");
  }

  const payload = { email: user.email };
  const token = generateToken(payload);

  user.password = undefined;

  return {
    message: "Logged in Successfully",
    accessToken: token,
    userDetails: user,
  };
};
