import * as Yup from "yup";
export const registerValidation = Yup.object({
  firstName: Yup.string()
    .trim()
    .required("Name is required")
    .min(2, "must be at least 2 characters")
    .max(10, "must be not biger 10 characters"),
  lastName: Yup.string()
    .trim()
    .required("Name is required")
    .min(2, "must be at least 2 characters")
    .max(10, "must be not biger 10 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});
