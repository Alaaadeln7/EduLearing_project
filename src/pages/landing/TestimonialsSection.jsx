import React from "react";

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      author: "Sarah L",
      image: "https://i.pravatar.cc/100",
    },
    {
      text: "The UX/UI design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      author: "Josiah M",
      image: "https://i.pravatar.cc/400",
    },
    {
      text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
      author: "Emily R",
      image: "https://i.pravatar.cc/300",
    },
    {
      text: "I enrolled in the graphic design course as a beginner, and it was the perfect start. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
      author: "Michael K",
      image: "https://i.pravatar.cc/200",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Testimonials</h2>
        <p className="text-gray-600 mb-8">
          Our students' opinions are presented in it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
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
