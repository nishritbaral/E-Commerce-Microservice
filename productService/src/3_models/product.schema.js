import mongoose from "mongoose";
import PRODUCT_CONSTANTS from "../2_constants/product.constants.js";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 50 },
  description: {
    type: String,
    required: true,
    tirm: true,
    maxlength: 300,
  },
  price: { type: Number, required: true },
  category: { type: String, required: true, enum: PRODUCT_CONSTANTS },
  image: {
    type: String,
    require: true,
  },
});

const productTable = mongoose.model("product", productSchema);

export default productTable;
