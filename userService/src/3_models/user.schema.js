import mongoose from "mongoose";
import USER_CONSTANTS from "../2_constants/user.constants.js";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  dob: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  gender: {
    type: String,
    required: true,
    enum: USER_CONSTANTS.GENDERS,
  },
  role: {
    type: String,
    required: true,
    enum: USER_CONSTANTS.ROLES,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

const userTable = mongoose.model("user", userSchema);

export default userTable;
