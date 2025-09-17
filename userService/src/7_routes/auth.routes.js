import express from "express";
import {
  registerController,
  loginController,
} from "../8_controller/auth.controller.js";
import validateReqBody from "../5_middleware/validate.req.body.js";
import { registrationValidationSchema } from "../4_validation/user.validation.js";

const router = express.Router();

router.post(
  "/register",
  validateReqBody(registrationValidationSchema),
  registerController
);

router.post("/login", loginController);

export { router as authRoutes };
