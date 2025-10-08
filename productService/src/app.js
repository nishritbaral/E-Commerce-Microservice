import express from "express";
import { productRoutes } from "./5_routes/product.routes";

const app = express();
app.use(express.json());

app.use(productRoutes);

export default app;
