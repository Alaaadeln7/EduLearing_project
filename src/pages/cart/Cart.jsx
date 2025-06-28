import { useState } from "react";
import image_1 from "../../assets/techImageOne.jpg";
import { X, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: image_1,
      title: "Programming Basics",
      author: "John Smith",
      duration: "4 WEEKS",
      level: "Beginner",
      description:
        "Programming Basics requires understanding variables, data types, conditionals, loops, and functions. It focuses on building logical thinking and writing structured code.",
      price: 0.999,
    },
    {
      id: 2,
      image: image_1,
      title: "Advanced React",
      author: "Sarah Johnson",
      duration: "6 WEEKS",
      level: "Intermediate",
      description:
        "Master React hooks, context API, and performance optimization techniques for building modern web applications.",
      price: 1.499,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <ShoppingCart className="mr-3" size={28} />
            My Learning Cart
          </h1>
          <Link
            to="/profile"
            className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200"
          >
            <span>My Account</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {cartItems.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 md:flex">
                  {/* Course Image */}
                  <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="md:w-2/4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">By {item.author}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex space-x-4 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.level}
                      </span>
                    </div>

                    <p className="mt-3 text-gray-600">{item.description}</p>
                  </div>

                  {/* Price Section */}
                  <div className="md:w-1/4 mt-4 md:mt-0 md:pl-6 md:border-l md:border-gray-200">
                    <div className="flex flex-col items-end">
                      <p className="text-2xl font-bold text-gray-900">
                        £E{item.price.toFixed(3)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Summary Section */}
              <div className="bg-gray-50 p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">
                      Total {cartItems.length} courses
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      £E{totalPrice}
                    </p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-200 flex items-center">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Browse our courses and start adding to your learning journey!
              </p>
              <Link
                to="/courses"
                className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow transition-all duration-200"
              >
                Explore Courses
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
