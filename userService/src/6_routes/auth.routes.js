import express from "express";
import {
  registerController,
  loginController,
} from "../7_controller/auth.controller.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

export { router as authRoutes };
