import { loginService, registerService } from "../9_service/auth.service.js";

export const registerController = async (req, res) => {
  try {
    const newUser = req.body;
    const response = await registerService(newUser);
    return res
      .status(200)
      .send({ message: "User Registered Successfully", ...response });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "User Registration Failed.", error: error.message });
  }
};

export const loginController = async (req, res, next) => {};
