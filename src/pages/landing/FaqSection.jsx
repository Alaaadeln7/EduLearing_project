import { faqData } from "../../constants/index";

const FaqSection = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-1 bg-base-200 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-content mb-4">
              Still have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <p className="text-content">See All FAQs</p>
          </div>

          {/* Right Content */}
          <div className="col-span-2">
            <div className="space-y-4">
              {faqData?.map((faq, index) => (
                <div
                  key={index}
                  className="collapse collapse-plus bg-base-200 p-4 rounded-lg border border-base-300"
                >
                  <input type="checkbox" />
                  <div className="collapse-title text-lg font-medium text-gray-800">
                    {faq.question}
                  </div>
                  <div className="collapse-content text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
