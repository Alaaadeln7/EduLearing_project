import { testimonialsData } from "../../constants/index";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Testimonials</h2>
        <p className="text-gray-600 mb-8">
          Our students' opinions are presented in it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData?.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-white shadow-md p-6 rounded-lg text-left "
            >
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s photo`}
                className="w-14 h-14 rounded-full mb-4 flex justify-end"
              />
              <div className="flex justify-end">
                <button className="btn btn-sm btn-soft w-fit">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
