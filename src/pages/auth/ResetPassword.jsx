// ResetPassword.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Lock, Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      toast.success("Password reset successfully!");
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  React.useEffect(() => {
    if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
      toast.error("Please fix the errors in the form");
    }
  }, [formik.submitCount, formik.errors]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center py-6 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .input-group input:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>

      <Toaster position="top-right" />
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Reset Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create a new password for your account.
        </p>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* New Password Input */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="input-group flex items-center border rounded-lg overflow-hidden focus-within:border-orange-500">
              <span className="px-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input
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
                onClick={() => setShowPassword(!showPassword)}
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

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="input-group flex items-center border rounded-lg overflow-hidden focus-within:border-orange-500">
              <span className="px-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                placeholder="••••••••"
                className="flex-1 py-2 px-1 focus:outline-none"
              />
              <button
                type="button"
                className="px-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-orange-600 text-white w-full focus:outline-none focus:ring-0"
          >
            Reset Password
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            className="btn w-full gap-2 focus:outline-none focus:ring-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.664-4.153-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-sm text-center">
            Remember your password?{" "}
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
  );
};

export default ResetPassword;
