import Navbar from "../Navbar";
import HeroSection from "../HeroSection";

const enterpriseContent = {
  headline: (
    <>
      Scale Your <span className="font-bold text-[#1D6C86]">Technical Hiring</span>
      <br />
      with Expert <span className="font-bold text-[#1D6C86]">Interviewers</span>
    </>
  ),
  subheadline: "Let our expert technical interviewers handle your hiring process while your team focuses on building great products. Reduce time-to-hire and improve candidate quality.",
  buttonText: "Book a Demo"
};

export default function EnterprisePage() {
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
      <HeroSection 
        showTabs={false}
        content={enterpriseContent}
        heroImage="/interviewer-on-laptop.svg"
        className="bg-gradient-to-br from-blue-50 to-indigo-50"
      />
      {/* You can add more enterprise-specific sections here */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#1D6C86] mb-4">
          Enterprise Solutions
        </h2>
        <p className="text-[#384C5D] max-w-2xl mx-auto">
          This is where you can add more enterprise-specific content, features, and sections.
        </p>
      </div>
    </div>
  );
}
