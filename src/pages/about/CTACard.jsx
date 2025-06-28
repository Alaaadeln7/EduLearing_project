import React from "react";

const CTACard = () => {
  return (
    <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        Ready to Start Learning?
      </h2>
      <p className="mb-4">
        Join thousands of students and begin your journey today.
      </p>
      <button className="btn bg-white text-orange-500 hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
};

export default CTACard;
