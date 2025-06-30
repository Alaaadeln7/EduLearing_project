import { User, CreditCard, ChevronDown } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^[\d\s-]+$/, "Invalid card number format")
    .required("Card number is required"),
  cardName: Yup.string().required("Name on card is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date (MM/YY)")
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
});

export default function PaymentPage() {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "Esther Howard",
      expiryDate: "",
      cvv: "",
      selectedCard: "mastercard",
    },
    validationSchema: paymentSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Order placed successfully!");
    },
  });

  const orderItems = [
    { name: "Programming Basics", price: 21.45 },
    { name: "Machine Learning", price: 15.0 },
    { name: "Data Science", price: 88.05 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const discount = 12.25;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Payment Method */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Payment method</h2>

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-800 p-2 rounded-lg">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium">NBank</p>
              <p className="text-sm text-gray-500">1,234 5b 76 7b 54 32</p>
              <p className="text-sm text-gray-500">1234 95+ 127/56</p>
              <p className="text-sm text-gray-500">CARD HOLDER</p>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Use saved card:
              </label>
              <div className="relative">
                <select
                  name="selectedCard"
                  className="appearance-none w-full p-3 border border-gray-300 rounded-lg pr-10"
                  onChange={formik.handleChange}
                  value={formik.values.selectedCard}
                >
                  <option value="mastercard">Mastercard</option>
                  <option value="visa">VISA</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="cardName"
                className="block text-sm font-medium mb-1"
              >
                Name on card:
              </label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                className={`w-full p-3 border ${
                  formik.errors.cardName && formik.touched.cardName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardName}
              />
            </div>

            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium mb-1"
              >
                Card number:
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="123-456-789"
                className={`w-full p-3 border ${
                  formik.errors.cardNumber && formik.touched.cardNumber
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium mb-1"
                >
                  Expiry date:
                </label>
                <input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  placeholder="MM / YY"
                  className={`w-full p-3 border ${
                    formik.errors.expiryDate && formik.touched.expiryDate
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.expiryDate}
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                  CVV:
                </label>
                <div className="relative">
                  <input
                    id="cvv"
                    name="cvv"
                    type="password"
                    placeholder="•••"
                    className={`w-full p-3 border ${
                      formik.errors.cvv && formik.touched.cvv
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-lg`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvv}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Order summary</h2>

          <div className="space-y-4 mb-6">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-700">{item.name}</span>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Product total</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Discount</span>
              <span className="text-green-600">
                %6 (${discount.toFixed(2)})
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => formik.handleSubmit()}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            VISA Order
          </button>
        </div>
      </div>
    </div>
  );
}
