import { loginService, registerService } from "../9_service/auth.service.js";

export const registerController = async (req, res) => {
  try {
    const newUser = req.body;
    const response = await registerService(newUser);
    return res
      .status(200)
      .send({ message: response.message, user: response.userDetails });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "User Registration Failed.", error: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const loginCredentials = req.body;
    const response = await loginService(loginCredentials);
    return res
      .status(200)
      .send({
        message: response.message,
        accessToken: response.accessToken,
        userDetails: response.userDetails,
      });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Login not Successful", error: error.message });
  }
};
