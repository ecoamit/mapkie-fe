import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import BenefitsSection from "../BenefitsSection";
import TestimonialSection from "../TestimonialSection";
import ResultsSection from "../ResultsSection";
import Image from "next/image";

const aboutContent = {
  headline: (
    <>
      Turning gaps into <br /><span className="font-bold text-[#1D6C86]">Opportunities</span>
    </>
  ),
  subheadline: "At Mapkie, we connect top talent with the right opportunities—bridging skill gaps and empowering businesses to grow with confidence.",
  buttonText: "Connect now"
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F4F8 0%, #F0F8FA 50%, #E0F2F5 100%)",
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#006C86",
      }}
    >
      <Navbar />

      {/* Hero with image */}
      <div className="relative h-[90vh] max-h-[900px] flex flex-col">
        <div className="relative z-10 flex-1 flex items-start pt-20" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
          <HeroSection 
            showTabs={false}
            content={aboutContent}
            hideImageSection={true}
            className="bg-transparent w-full h-full flex items-start py-0"
          />
        </div>
          {/* Independent Hero Image Section - Positioned absolutely within hero container */}
                <div className="absolute top-0 left-0 right-0 bottom-0 overflow-visible pointer-events-none">
                  {/* Main Hero Image - Woman with Laptop - Positioned to show full image */}
                  <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[315px] h-[266px] sm:w-[405px] sm:h-[341px] md:w-[450px] md:h-[300px] lg:w-[450px] lg:h-[300px] xl:w-[650px] xl:h-[639px]">
                    <Image 
                      src="/about-us.svg" 
                      alt="Woman with laptop" 
                      width={450} 
                      height={300} 
                      className="w-full h-full object-contain"
                      priority 
                    />
                  </div>
                </div>
      </div>

      {/* About Mapkie Section (Mission & Vision) */}
      <section className="relative z-10 bg-[#F3F9FC] pt-20 pb-12 md:pt-24 md:pb-20 font-[450]">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          {/* Heading + Intro */}
          <div className="text-center max-w-[980px] mx-auto mb-14 md:mb-20">
            <h2 className="text-[36px] md:text-[40px] font-bold text-[#17445A] mb-3 leading-tight tracking-tight">About Mapkie</h2>
            <p className="text-[#2F4650] text-[16px] sm:text-[14px] md:text-[16px] leading-[1.55] max-w-[880px] mx-auto font-normal">
              At Mapkie, we believe that job preparation shouldn’t feel overwhelming, lonely, or random. That’s why we’ve built a platform that gives job seekers real tools, real experts, and real support — from resume to referral. Whether you’re a fresher starting out, a professional aiming higher, or someone switching industries, Mapkie is your all-in-one career launchpad.
            </p>
          </div>

          {/* Grid Layout (2 rows) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
            {/* Mission Text */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-start">
              <h3 className="text-[28px] tracking-tight font-bold text-[#0C2E3F] mb-8 mt-24">
               <span className="text-[#5E5E5E]">Our</span> <span className="text-[#FEC432]">Mission</span>
              </h3>
              <p className="text-[#273E48] text-[12.5px] sm:text-[13px] md:text-[16px] leading-[1.55] mb-6">
                To become the most trusted career growth platform for candidates—where preparation is personalized, mock interviews are real, and referrals are earned through merit.
              </p>
              <p className="text-[#273E48] text-[12.5px] sm:text-[13px] md:text-[16px] leading-[1.55] m-0">
                We envision a world where every candidate, regardless of background, has access to the same level of preparation and opportunity as top-tier talent.
              </p>
            </div>
            {/* Mission Image */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#D2E3EA] bg-white">
                <Image 
                  src="/mission.svg" 
                  alt="Mission graphic" 
                  fill 
                  className="object-cover object-center" 
                  priority
                />
              </div>
              {/* Accent Bar (two-tone horizontal) */}
              <div className="hidden md:flex absolute -bottom-[31px] left-[-24%] h-[30px] z-20 shadow-sm">
                <div className="h-full bg-[#0D6C86] w-[210px]"></div>
                <div className="h-full bg-[#FEC432] w-[210px]"></div>
              </div>
            </div>

            {/* Vision Image */}
            <div className="lg:col-span-7 order-3 relative">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#D2E3EA] bg-white">
                <Image 
                  src="/vision.svg" 
                  alt="Vision graphic" 
                  fill 
                  className="object-cover object-center" 
                />
              </div>
            </div>
            {/* Vision Text */}
            <div className="lg:col-span-5 order-4 flex flex-col justify-start">
              <h3 className="text-[28px] tracking-tight font-bold text-[#0C2E3F] mb-8 mt-24">
               <span className="text-[#5E5E5E]">Our</span> <span className="text-[#FEC432]">Vision</span>
              </h3>
              <p className="text-[#273E48] text-[12.5px] sm:text-[13px] md:text-[16px] leading-[1.55] mb-6">
                To become the most trusted career growth platform for candidates—where preparation is personalized, mock interviews are real, and referrals are earned through merit.
              </p>
              <p className="text-[#273E48] text-[12.5px] sm:text-[13px] md:text-[16px] leading-[1.55] m-0">
                We envision a world where every candidate, regardless of background, has access to the same level of preparation and opportunity as top-tier talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse existing sections for social proof */}
      <BenefitsSection />
      <ResultsSection />
      <TestimonialSection />
    </div>
  );
}
