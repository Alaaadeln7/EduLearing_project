import { Zap } from "lucide-react";
import heroImage from "../../assets/landingpage.jpg";

const HeroSection = () => {
  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-orange-100 p-4 rounded-sm mx-2">
            <Zap className="size-6" />
          </span>
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">Unlock</span> Your Creative
            Potential
          </h1>
        </div>
        <p className="text-2xl mb-6 font-semibold">
          with Online Design and Development Courses.
        </p>
        <p className="text-sm">
          Learn from industry experts and enhance your skills.
        </p>
        <button className="btn bg-orange-500 text-white mt-6">
          Explore Courses
        </button>
        <img
          src={heroImage}
          alt="Hero Image"
          className="mt-8 w-full min-h-64 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
