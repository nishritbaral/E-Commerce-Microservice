import mongoose from "mongoose";

const productSchema = new mongoose.Schema({});

const productTable = mongoose.model("product", productSchema);

export default productTable;
