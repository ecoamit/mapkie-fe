import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Trusted from "./Trusted";
import FeaturesSection from "./FeaturesSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialSection from "./TestimonialSection";
import ResultsSection from "./ResultsSection";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#f6f8fa",
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#006C86",
      }}
    >
      <Navbar />
      <HeroSection />
        <div className="hidden md:block">
          <Trusted/>
        </div>
        <FeaturesSection />
        <BenefitsSection />
        <ResultsSection />
        <TestimonialSection />
    </div>
  );
}
