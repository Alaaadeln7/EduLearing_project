import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import TechSection from "./TechSection";
import TestimonialsSection from "./TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="bg-base-100 text-base-content">
      <HeroSection />
      <TechSection />
      <SkillsSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
