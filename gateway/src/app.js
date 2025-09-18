import express from "express";
import userProxy from "./services/user/proxy.js";
import productProxy from "./services/product/proxy.js";
import cartProxy from "./services/cart/proxy.js";
import wishlistProxy from "./services/wishlist/proxy.js";

const app = express();
app.use(express.json());

app.use("/user", userProxy);
app.use("/product", productProxy);
app.use("/cart", cartProxy);
app.use("/wishlist", wishlistProxy);

export default app;
