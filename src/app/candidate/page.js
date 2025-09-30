
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import BenefitsSection from "../BenefitsSection";
import ResultsSection from "../ResultsSection";
import TestimonialSection from "../TestimonialSection";
import Image from "next/image";
import Link from "next/link";

const candidateBenefits = [
  {
    img: "/candidate-benefit-1.svg",
    title: "Resume That Stands Out",
    desc: "Get certified technical interview evaluations that add real value to your resume.",
  },
  {
    img: "/candidate-benefit-2.svg",
    title: "Real-Time Feedback",
    desc: "Receive instant expert insights to help improve your performance after every interview.",
  },
  {
    img: "/candidate-benefit-3.svg",
    title: "Confidence Building",
    desc: "Mock interviews in a professional setting help candidates build confidence for real employer interviews.",
  },
];

const candidateContent = {
  headline: (
    <>
      <span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">All-in-One</span> <span className="hero-headline-44">Platform to Showcase Your </span><span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">Skills</span><span className="hero-headline-44"> and </span><span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">Stand Out</span><span className="hero-headline-44"> to Top Companies</span>
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
            contentMaxWidth="654px"
            scrollTargetId="candidate-benefits"
          />
        </div>
        
        {/* Independent Hero Image Section - Positioned absolutely within hero container */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-visible pointer-events-none">
          {/* Main Hero Image - Woman with Laptop - Positioned to show full image */}
          <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[315px] h-[266px] sm:w-[405px] sm:h-[341px] md:w-[540px] md:h-[456px] lg:w-[675px] lg:h-[570px] xl:w-[758px] xl:h-[639px]">
            <Image 
              src="/candidate-hero.svg" 
              alt="Woman with laptop" 
              width={758} 
              height={639} 
              className="w-full h-full object-contain"
              priority 
            />
          </div>
        </div>
      </div>
      
  <div id="candidate-benefits" className="relative z-10 py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-4">

          <div className="text-center mb-16">
            <h2
              className="heading-42-gradient mb-6 mx-auto"
              style={{ maxWidth: '942px' }}
            >
              Why Most Candidates Get Stuck — And How Mapkie Helps You Break Through
            </h2>
            <p
              className="max-w-7xl mx-auto mb-0"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                letterSpacing: 0,
                textAlign: 'center',
                color: '#586977'
              }}
            >
              Sharpen your skills, reduce anxiety, and prepare for real technical interviews with expert-led mock sessions.
            </p>
          </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-items-center" style={{height: '320px'}}>
              {/* Referrals Card */}
              <div className="candidate-card">
                <div className="candidate-card-icon p-0" style={{background:'transparent'}}>
                  <Image src="/referral-icon.svg" alt="Referral icon" width={50} height={50} className="w-[50px] h-[50px] object-contain" />
                </div>
                <h3 className="candidate-card-title">Referrals</h3>
                <p className="candidate-card-text">
                  Access hidden opportunities at top companies through our trusted interviewer community.
                </p>
                <div className="flex justify-start mt-auto">
                  <Link href="/referral" className="btn-request-demo text-sm">
                    Find Reference
                  </Link>
                </div>
              </div>

              {/* Better Resume Writing Card */}
              <div className="candidate-card">
                <div className="candidate-card-icon p-0" style={{background:'transparent'}}>
                  <Image src="/resume-writing-icon.svg" alt="Resume writing icon" width={50} height={50} className="w-[50px] h-[50px] object-contain" />
                </div>
                <h3 className="candidate-card-title">Better Resume Writing</h3>
                <p className="candidate-card-text">
                  Your resume is guided by experienced professionals — not auto-filled by generic AI
                </p>
                <div className="flex justify-start mt-auto">
                  <Link href="/referral?type=resume" className="btn-request-demo text-sm">
                    Create Resume
                  </Link>
                </div>
              </div>

              {/* Mock Interviews Card */}
              <div className="candidate-card">
                <div className="candidate-card-icon p-0" style={{background:'transparent'}}>
                  <Image src="/mock-interview-icon.svg" alt="Mock interview icon" width={50} height={50} className="w-[50px] h-[50px] object-contain" />
                </div>
                <h3 className="candidate-card-title">Mock Interviews</h3>
                <p className="candidate-card-text">
                  Every session is conducted by professionals who have interviewed candidates at top firms
                </p>
                <div className="flex justify-start mt-auto">
                  <Link href="/referral?type=mock" className="btn-request-demo text-sm">
                    Practice Daily
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>

  {/* Feature Sections Wrapper */}
  <div className="relative z-10 bg-[#E8F0F3] pt-24">
    <div className="space-y-[10px]">
      {/* New Feature Section - 50/50 Layout (Feature 1) */}
      <div className="max-w-7xl mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="heading-42-gradient mb-6 mx-auto"
              style={{ maxWidth: '942px' }}
            >
              Everything You Need to Get Hired —<br />
              All in One Platform
            </h2>
            <p
              className="max-w-7xl mx-auto mb-0"
              style={{
                fontFamily: 'Lexend, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                letterSpacing: 0,
                textAlign: 'center',
                color: '#586977'
              }}
            >
              Sharpen your skills, reduce anxiety, and prepare for real technical interviews with expert-led mock sessions.
            </p>
          </div>

          {/* 50-50 Layout - Full Width (Feature 1) */}
          <div className="feature-layout">
            <div>
              <Image src="/candidate-feature1.svg" alt="Trusted referrals illustration" width={542} height={408} priority />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Trusted Referrals — Get Noticed by the Right Companies</h3>
              <p className="feature-desc">Mapkie connects you with interviewers who&apos;ve assessed your skills. Their trusted referrals give your profile credibility and visibility.</p>
              <div className="feature-points">
                <div className="feature-point">
                  <div className="feature-point-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"></polyline></svg>
                  </div>
                  <p className="feature-point-text">Referrals by professionals who&apos;ve interviewed and assessed you</p>
                </div>
                <div className="feature-point">
                  <div className="feature-point-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"></polyline></svg>
                  </div>
                  <p className="feature-point-text">Get referred by trusted professionals in your field</p>
                </div>
                <div className="feature-point">
                  <div className="feature-point-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"></polyline></svg>
                  </div>
                  <p className="feature-point-text">Boost your visibility and credibility for serious roles</p>
                </div>
              </div>
              <div style={{marginTop:'32px'}}>
                <button className="btn-request-demo text-sm px-8">Contact Us</button>
              </div>
            </div>
          </div>
      </div>

      {/* Second Feature Section - Resume Build (Feature 2) */}
      <div className="max-w-7xl mx-auto ">
          {/* Feature 2 (Resume Build) reverse layout */}
          <div className="feature-layout reverse">
            <div className="feature-content">
              <h3 className="feature-title">Resume Build with Expert Guidance</h3>
              <p className="feature-desc">Mapkie helps job seekers create, polish, and optimize resumes to help you craft a resume that reflects your true potential.</p>
              <div className="feature-points">
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">Tailored, personalized, section support from experienced</p></div>
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">ATS-friendly formatting with role-specific language</p></div>
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">Real feedback to refine tone, structure, and impact</p></div>
              </div>
              <div style={{marginTop:'32px'}}><button className="btn-request-demo text-sm px-8">Contact Us</button></div>
            </div>
            <div>
              <Image src="/candidate-feature2.svg" alt="Resume building illustration" width={542} height={408} priority />
            </div>
          </div>
      </div>

      {/* Third Feature Section - Mock Interviews (Feature 3) */}
      <div className="max-w-7xl  mx-auto">
          {/* Feature 3 (Mock Interviews) */}
          <div className="feature-layout">
            <div>
              <Image src="/candidate-feature3.svg" alt="Mock interview illustration" width={542} height={408} priority />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Mock Interviews — Practice with Experts</h3>
              <p className="feature-desc">You work in confidential, practiced, and ready to handle live questions without the stress of being unprepared.</p>
              <div className="feature-points">
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">Practice real interview formats in a low-stress setting</p></div>
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">Receive expert feedback on strengths and improvement areas</p></div>
                <div className="feature-point"><div className="feature-point-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg></div><p className="feature-point-text">Be better prepared for coding and behavioral questions</p></div>
              </div>
              <div style={{marginTop:'32px'}}><button className="btn-request-demo text-sm px-8">Contact Us</button></div>
            </div>
          </div>
      </div>
    </div>
  </div>

      {/* Benefits Section */}
      <BenefitsSection benefits={candidateBenefits} />
      {/* Results Section */}
      <ResultsSection />
      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
