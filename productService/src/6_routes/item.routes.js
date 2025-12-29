import express from "express";
import {
  itemAddController,
  itemDeleteController,
  itemUpdateController,
} from "../7_controller/item.controller.js";

const router = express.Router();

router.post("/add", itemAddController);

router.delete("/delete/:id", itemDeleteController);

router.put("/update", itemUpdateController);

export { router as itemRoutes };