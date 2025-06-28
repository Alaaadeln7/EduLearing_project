import { ArrowRight } from "lucide-react";
import { skillsData } from "../../constants/index";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-base-300">
      <div className="max-w-7xl mx-auto px-14">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 mb-8">
          Skills gained from programming include logical thinking,
          problem-solving, writing code in languages like Python and Java, and
          understanding algorithms and data structures. It also develops
          teamwork, use of development tools, and the ability to build
          real-world applications and software.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData?.map((skill, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md p-6 rounded-lg flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold text-orange-500 mb-4">
                {skill.number}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <button className="btn btn-ghost">
                <ArrowRight className="mx-auto text-orange-500" size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
