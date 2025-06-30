import * as yup from "yup";
export const registerValidation = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  phoneNumber: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  role: yup
    .string()
    .required("Role is required")
    .oneOf(["student", "instructor"], "Invalid role selected"),

  agree: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),

  addressDto: yup.object().shape({
    street: yup
      .string()
      .required("Street address is required")
      .min(5, "Street address must be at least 5 characters"),

    city: yup
      .string()
      .required("City is required")
      .min(2, "City name must be at least 2 characters"),

    country: yup
      .string()
      .required("Country is required")
      .min(2, "Country name must be at least 2 characters"),
  }),
});
