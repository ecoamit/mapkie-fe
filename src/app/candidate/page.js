import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import BenefitsSection from "../BenefitsSection";
import ResultsSection from "../ResultsSection";
import TestimonialSection from "../TestimonialSection";
import Image from "next/image";

const candidateContent = {
  headline: (
    <>
      All-in-One <span className="font-bold text-[#1D6C86]">Platform to Showcase Your Skills</span> and <span className="font-bold text-[#1D6C86]">Stand Out</span> to Top Companies
    </>
  ),
  subheadline: "Get step-by-step guidance from industry interviewers to craft a resume.",
  buttonText: "Explore More"
};

export default function CandidatePage() {
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
      
      {/* Hero Section Container - 80% Viewport Height */}
      <div className="relative h-[100vh] max-h-[100vh] flex flex-col">
        {/* Hero Section with only text content */}
        <div className="relative z-10 flex-1 flex items-start pt-20" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
          <HeroSection 
            showTabs={false}
            content={candidateContent}
            hideImageSection={true}
            className="bg-transparent w-full h-full flex items-start py-0"
          />
        </div>
        
        {/* Independent Hero Image Section - Positioned absolutely within hero container */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-visible pointer-events-none">
          {/* Main Hero Image - Woman with Laptop - Positioned to show full image */}
          <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[315px] h-[266px] sm:w-[405px] sm:h-[341px] md:w-[540px] md:h-[456px] lg:w-[675px] lg:h-[570px] xl:w-[758px] xl:h-[639px]">
            <Image 
              src="/candidate-hero.png" 
              alt="Woman with laptop" 
              width={758} 
              height={639} 
              className="w-full h-full object-contain"
              priority 
            />
          </div>
        </div>
      </div>
      
        <div className="relative z-10 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-4">

          <div className="text-center mb-16">
            <h2
                className="font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-[38px]"
                style={{
                  background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
            >
                Why Most Candidates Get Stuck — And How<br />
                Mapkie Helps You Break Through
            </h2>
            <p
              className="text-lg md:text-xl font-normal text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                fontStyle: "normal"
              }}
            >
                Sharpen your skills, reduce anxiety, and prepare for real technical interviews with expert-led mock.
            </p>
          </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
            {/* Referrals Card */}
            <div className="bg-[#E8F4F8] rounded-2xl p-8 border border-[#B8D4E0] w-full md:w-[386px] md:h-[275px] flex flex-col">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-[#1D6C86] rounded-lg mb-6 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex-shrink-0">Referrals</h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                Access hidden opportunities at top companies through our trusted interviewer community.
              </p>
              
              <div className="flex justify-start mt-auto">
                <button
                  className="text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Find Reference
                </button>
              </div>
            </div>

            {/* Better Resume Writing Card */}
            <div className="bg-[#E8F4F8] rounded-2xl p-8 border border-[#B8D4E0] w-full md:w-[386px] md:h-[275px] flex flex-col">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-[#1D6C86] rounded-lg mb-6 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex-shrink-0">Better Resume Writing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                Your resume is guided by experienced professionals — not auto-filled by generic AI
              </p>
              
              <div className="flex justify-start mt-auto">
                <button
                  className="text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Create Resume
                </button>
              </div>
            </div>

            {/* Mock Interviews Card */}
            <div className="bg-[#E8F4F8] rounded-2xl p-8 border border-[#B8D4E0] w-full md:w-[386px] md:h-[275px] flex flex-col">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-[#1D6C86] rounded-lg mb-6 flex items-center justify-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex-shrink-0">Mock Interviews</h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                Every session is conducted by professionals who have interviewed candidates at top firms
              </p>
              
              <div className="flex justify-start mt-auto">
                <button
                  className="text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Practice Daily
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Feature Section - 50/50 Layout */}
      <div className="relative z-10 py-20 bg-[#E8F0F3]">
        <div className="max-w-7xl mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
                className="font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-[38px]"
                style={{
                  background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
            >
                Everything You Need to Get Hired —<br />
                All in One Platform
            </h2>
            <p
              className="text-lg md:text-xl font-normal text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                fontStyle: "normal"
              }}
            >
                Mapkie helps job seekers prepare, improve, and connect with top opportunities through expert-led support.
            </p>
          </div>

          {/* 50-50 Layout - Full Width */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side - Image */}
            <div className="relative">
              <Image 
                src="/candidate-feature1.png" 
                alt="Feature illustration" 
                width={542} 
                height={408} 
                className="w-full h-auto lg:w-[542px] lg:h-[408px] object-cover"
                priority 
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center lg:w-[567px] lg:h-[408px]">
              <h3 className="text-[24px] font-bold text-[#1D6C86] mb-6 leading-tight">
                Trusted Referrals — Get Noticed by the Right Companies
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Mapkie connects you with interviewers who&apos;ve assessed your skills. Their trusted referrals give your profile credibility and visibility.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Referrals by professionals who&apos;ve interviewed and assessed you
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Get referred by trusted professionals in your field
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Boost your visibility and credibility for serious roles
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start mt-8">
                <button
                  className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Feature Section - Resume Build */}
      <div className="relative z-10 py-16 bg-[#E8F0F3]">
        <div className="max-w-7xl mx-auto ">
          {/* 50-50 Layout - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center lg:w-[567px] lg:h-[408px]">
              <h3 className="text-[24px] font-bold text-[#1D6C86] mb-6">
                Resume Build with Expert guidance
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                Mapkie helps job seekers create, polish, and optimize resumes to help you craft a resume that reflects your true potential.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Tailored, personalized, section-by-section support from experienced professionals beyond AI Experts
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    ATS-friendly formatting with role-specific language
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Real feedback to refine your tone, structure, and impact
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start mt-8">
                <button
                  className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <Image 
                src="/candidate-feature2.png" 
                alt="Resume building illustration" 
                width={542} 
                height={408} 
                className="w-full h-auto lg:w-[542px] lg:h-[408px] object-cover"
                priority 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Feature Section - Mock Interviews */}
      <div className="relative z-10 py-16 bg-[#E8F0F3]">
        <div className="max-w-7xl  mx-auto">
          {/* 50-50 Layout - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Image */}
            <div className="relative">
              <Image 
                src="/candidate-feature3.png" 
                alt="Mock interview illustration" 
                width={542} 
                height={408} 
                className="w-full h-auto lg:w-[542px] lg:h-[408px] object-cover"
                priority 
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center lg:w-[567px] lg:h-[408px]">
              <h3 className="text-[24px] font-bold text-[#1D6C86] mb-6">
                Mock Interviews — Practice with Experts
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                You work in confidential, practiced, and ready to handle live questions without the stress of being unprepared.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Practice real interview formats in a low-stress setting
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Receive expert feedback on strengths and improvement areas
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[16px]">
                    Be better prepared for coding rounds, and behavioral questions
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start mt-8">
                <button
                  className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid"
                  style={{
                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                    letterSpacing: "0.5px",
                    borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                    color: "#fff"
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Results Section */}
      <ResultsSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
