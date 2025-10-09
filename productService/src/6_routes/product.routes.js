import express from "express";
import {
  addController,
  deleteController,
  updateController,
} from "../7_controller/product.controller.js";

const router = express.Router();

router.post("/add", addController);

router.delete("/delete", deleteController);

router.put("/update", updateController);

export { router as productRoutes };
