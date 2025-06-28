import AboutHeader from "./AboutHeader";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";
import CTACard from "./CTACard";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <AboutHeader />
      <MissionSection />
      <TeamSection />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CTACard />
      </div>
    </div>
  );
};

export default About;
