import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useEffect } from "react";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      toast.success("Password reset link sent to your email!");
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
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

      <div className="bg-base-100 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email and we'll send you a link to reset your password.
        </p>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="input-group flex items-center border border-base-300 rounded-lg overflow-hidden focus-within:border-orange-500">
              <span className="px-3 text-gray-400">
                <Mail size={18} />
              </span>
              <input
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

          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-orange-600 text-white w-full focus:outline-none focus:ring-0"
          >
            Send Reset Link
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

export default ForgotPassword;
