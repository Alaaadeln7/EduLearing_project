import { techData } from "../../constants/index";
import TechCard from "./TechCard";

const TechSection = () => {
  return (
    <section id="courses" className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Trendy Technology</h2>
        <p className="text-gray-600 mb-8">
          The most used fields in the labor market
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techData?.map((tech, index) => (
            <TechCard key={index} {...tech} index={index} />
          ))}
        </div>
        <button className="btn btn-orange mt-8">View All Courses</button>
      </div>
    </section>
  );
};

export default TechSection;
