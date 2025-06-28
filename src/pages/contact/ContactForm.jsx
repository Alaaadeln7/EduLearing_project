import { useFormik } from "formik";

import toast from "react-hot-toast";
import { contactValidation } from "../../utils/contactValidation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: (values, { resetForm }) => {
      console.log("Form values:", values);
      toast.success("Message sent successfully!");
      resetForm();
    },
    onError: (errors) => {
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    },
  });

  return (
    <div className="bg-base-100 p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className={`input input-bordered w-full ${
              formik.touched.firstName && formik.errors.firstName
                ? "input-error"
                : ""
            }`}
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className={`input input-bordered w-full ${
              formik.touched.lastName && formik.errors.lastName
                ? "input-error"
                : ""
            }`}
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.lastName}
            </p>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className={`input input-bordered w-full ${
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }`}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            className={`input input-bordered w-full ${
              formik.touched.phone && formik.errors.phone ? "input-error" : ""
            }`}
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter your Subject"
            className={`input input-bordered w-full ${
              formik.touched.subject && formik.errors.subject
                ? "input-error"
                : ""
            }`}
            {...formik.getFieldProps("subject")}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
          ) : null}
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Enter your Message here..."
            className={`textarea textarea-bordered w-full h-32 ${
              formik.touched.message && formik.errors.message
                ? "textarea-error"
                : ""
            }`}
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="btn bg-orange-500 text-white mt-6"
      >
        Send Your Message
      </button>
    </div>
  );
};

export default ContactForm;
