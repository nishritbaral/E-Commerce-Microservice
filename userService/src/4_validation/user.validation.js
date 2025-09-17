import yup from "yup";
import USER_CONSTANTS from "../2_constants/user.constants.js";

export const registrationValidationSchema = yup.object({
  email: yup.string().required().email().lowercase().trim().max(255),
  password: yup.string().required().trim().min(8).max(30),
  firstName: yup.string().required().trim().max(30),
  lastName: yup.string().required().trim().max(30),
  dob: yup.date().required().max(new Date()),
  gender: yup.string().required().oneOf(USER_CONSTANTS.GENDERS),
  role: yup.string().required().oneOf(USER_CONSTANTS.ROLES),
  address: yup.string().required().trim(),
});
