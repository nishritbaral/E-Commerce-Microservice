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
  category: { type: String, required: true, enum: PRODUCT_CONSTANTS },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, max: 1 },
  freeShipping: { type: Boolean, required: true },
  image: {
    type: String,
    require: true,
  },
  sellerId: { type: mongoose.ObjectId, required: true },
});

const productTable = mongoose.model("product", productSchema);

export default productTable;
