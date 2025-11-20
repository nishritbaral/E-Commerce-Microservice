import express from "express";
import { itemRoutes } from "./5_routes/item.routes";

const app = express();
app.use(express.json());

app.use("/item", itemRoutes);

export default app;
