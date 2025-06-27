// import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Skills from "../components/Skills";
// import Testimonials from "../components/Testimonials";

import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import TechSection from "./TechSection";
import TestimonialsSection from "./TestimonialsSection";

// import FAQ from "../components/FAQ";
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
