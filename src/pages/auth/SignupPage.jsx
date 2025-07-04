import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
  Bookmark,
  Check,
  MoveLeft,
  MoveRight,
  Building2,
  MapPin,
  Globe,
} from "lucide-react";
import { registerValidation } from "../../utils/authValidation";
import { useAuthStore } from "../../stores/useAuthStore";

const SignupPage = () => {
  const { register } = useAuthStore((state) => state);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "",
      agree: false,
      addressDto: {
        street: "",
        city: "",
        country: "",
      },
    },
    validationSchema: registerValidation,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        console.log(values);
        let res = await register({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: values.password,
          role: values.role,
          addressDto: {
            street: values.addressDto.street,
            city: values.addressDto.city,
            country: values.addressDto.country,
          },
        });
        console.log(res);
        toast.success("Registration successful!");
        resetForm();
      } catch (error) {
        toast.error(error.message || "Registration failed");
      } finally {
        setSubmitting(false);
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          toast.error("Please fix the errors in the form");
        }
        formik.handleSubmit(e);
      });
    },
    [formik]
  );

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center py-6 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Testimonials */}
        <div className="hidden lg:block space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Students Testimonials
            </h2>
            <p className="text-sm text-gray-500 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-600">
              The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive, and the interactive
              learning environment was engaging. I highly recommend it!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/100" alt="student" />
                  </div>
                </div>
                <span className="font-medium">Sarah L.</span>
              </div>
              <button className="btn btn-sm">Read More</button>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-circle"
              aria-label="Previous testimonial"
            >
              <MoveLeft className="size-4" />
            </button>
            <button className="btn btn-circle" aria-label="Next testimonial">
              <MoveRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
            Sign Up
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Create an account to unlock exclusive features.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                  <span className="px-3 text-gray-400">
                    <User size={18} />
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="John"
                    className="flex-1 py-2 px-1 focus:outline-none"
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                  <span className="px-3 text-gray-400">
                    <User size={18} />
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Doe"
                    className="flex-1 py-2 px-1 focus:outline-none"
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                <span className="px-3 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="john@example.com"
                  className="flex-1 py-2 px-1 focus:outline-none"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                <span className="px-3 text-gray-400">
                  <Phone size={18} />
                </span>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="+1234567890"
                  className="flex-1 py-2 px-1 focus:outline-none"
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            {/* Address Fields */}
            <div className="space-y-1">
              <label
                htmlFor="street"
                className="text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                <span className="px-3 text-gray-400">
                  <MapPin size={18} />
                </span>
                <input
                  id="street"
                  name="addressDto.street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressDto?.street}
                  placeholder="123 Main St"
                  className="flex-1 py-2 px-1 focus:outline-none"
                />
              </div>
              {formik.touched.addressDto?.street &&
                formik.errors.addressDto?.street && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.addressDto?.street}
                  </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                  <span className="px-3 text-gray-400">
                    <Building2 className="size-5" />
                  </span>
                  <input
                    id="city"
                    name="addressDto.city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.addressDto?.city}
                    placeholder="New York"
                    className="flex-1 py-2 px-1 focus:outline-none"
                  />
                </div>
                {formik.touched.addressDto?.city &&
                  formik.errors.addressDto?.city && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.addressDto?.city}
                    </div>
                  )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="country"
                  className="text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                  <span className="px-3 text-gray-400">
                    <Globe size={18} />
                  </span>
                  <input
                    id="country"
                    name="addressDto.country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.addressDto?.country}
                    placeholder="United States"
                    className="flex-1 py-2 px-1 focus:outline-none"
                  />
                </div>
                {formik.touched.addressDto?.country &&
                  formik.errors.addressDto?.country && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.addressDto?.country}
                    </div>
                  )}
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
                <span className="px-3 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="••••••••"
                  className="flex-1 py-2 px-1 focus:outline-none"
                />
                <button
                  type="button"
                  className="px-3 text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Role selection */}
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-gray-700">
                Register as
              </legend>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 p-2 rounded-lg border border-transparent hover:bg-gray-50 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="role"
                      value="student"
                      onChange={formik.handleChange}
                      checked={formik.values.role === "student"}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                        formik.values.role === "student"
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-300"
                      }`}
                      aria-hidden="true"
                    >
                      {formik.values.role === "student" && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-gray-600" />
                    <span className="text-sm sm:text-base">Student</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg border border-transparent hover:bg-gray-50 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="role"
                      value="instructor"
                      onChange={formik.handleChange}
                      checked={formik.values.role === "instructor"}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                        formik.values.role === "instructor"
                          ? "bg-orange-500 border-orange-500"
                          : "border-gray-300"
                      }`}
                      aria-hidden="true"
                    >
                      {formik.values.role === "instructor" && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bookmark size={16} className="text-gray-600" />
                    <span className="text-sm sm:text-base">Instructor</span>
                  </div>
                </label>
              </div>
              {formik.touched.role && formik.errors.role && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.role}
                </div>
              )}
            </fieldset>

            {/* Terms */}
            <div className="space-y-1">
              <label className="flex items-start gap-2 p-2 rounded-lg border border-transparent hover:bg-gray-50 cursor-pointer">
                <div className="relative mt-1">
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.agree}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border rounded-md flex items-center justify-center ${
                      formik.values.agree
                        ? "bg-orange-500 border-orange-500"
                        : "border-gray-300"
                    }`}
                    aria-hidden="true"
                  >
                    {formik.values.agree && (
                      <Check size={14} className="text-white" />
                    )}
                  </div>
                </div>
                <span className="label-text text-sm sm:text-base">
                  I agree with{" "}
                  <Link
                    to="/terms-of-use"
                    className="text-orange-500 underline"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-orange-500 underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {formik.touched.agree && formik.errors.agree && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.agree}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="divider">OR</div>

            <button type="button" className="btn w-full gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.664-4.153-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z" />
              </svg>
              Sign Up with Google
            </button>

            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-orange-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
