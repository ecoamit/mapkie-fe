"use client";
import Image from "next/image";
import { useTab } from "./TabContext";

export default function HeroSection({ 
  showTabs = true, 
  content = null, 
  heroImage = null,
  className = "",
  hideImageSection = false
}) {
  const { selectedTab: tab, setSelectedTab: setTab } = useTab();

  return (
    <section
      className={`relative w-full min-h-[calc(100svh-80px)] md:min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[850px] max-h-screen bg-[#E8F0F3] overflow-hidden flex items-center py-6 md:py-8 xl:py-10 2xl:py-12 pl-4 md:pl-6 xl:pl-10 pr-0 md:pt-0 ${className}`}
    >

      {/* Background Image */}
      <div className="absolute bottom-[-600px] md:bottom-[-380px] xl:bottom-[-460px] inset-0 z-0">
        <Image src="/wave.svg" alt="Wave background" fill style={{objectFit:'stretch', opacity:0.60}} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1600px] flex flex-col md:flex-row items-start z-10 mx-4 sm:mx-8 md:mx-8 xl:mx-16 2xl:mx-32 px-4 md:px-0">
        {/* Text Block */}
        <div className="w-full md:max-w-[600px] xl:max-w-[800px] pt-0 text-center md:text-left">
          {/* Tabs - Only show if showTabs is true */}
          {showTabs && (
            <div className="w-full max-w-[420px] mx-auto md:mx-0 mb-6">
              <div className="flex relative text-base md:text-[16px] font-medium items-center select-none">
                <button
                  className={`flex-1 text-center pb-2 transition-colors ${
                    tab === "enterprise" ? "text-[#1D6C86]" : "text-[#030D16]"
                  }`}
                  style={{ position: 'relative', zIndex: 2 }}
                  onClick={() => setTab("enterprise")}
                >
                  ENTERPRISE
                  {/* Inactive underline */}
                  {tab !== "enterprise" && (
                    <span className="block absolute left-1 -translate-x-1 bottom-0 h-[1.5px] bg-[#C4D3DB]" style={{width: '90%', zIndex: 5, left: '50%', transform: 'translateX(-50%)'}} />
                  )}
                </button>
                <button
                  className={`flex-1 text-center pb-2 transition-colors ${
                    tab === "candidate" ? "text-[#1D6C86]" : "text-[#030D16]"
                  }`}
                  style={{ position: 'relative', zIndex: 2 }}
                  onClick={() => setTab("candidate")}
                >
                  CANDIDATE
                  {/* Inactive underline */}
                  {tab !== "candidate" && (
                    <span className="block absolute left-1 -translate-x-1 bottom-0 h-[1.5px] bg-[#C4D3DB]" style={{width: '90%', zIndex: 5, left: '50%', transform: 'translateX(-50%)'}} />
                  )}
                </button>
                {/* Active tab underline */}
                <div
                  className="absolute bottom-0 h-[3px] bg-[#1D6C86] z-10 transition-all duration-300"
                  style={{
                    left: tab === "enterprise" ? "5%" : "55%",
                    width: "40%"
                  }}
                />
              </div>
            </div>
          )}
          {/* Headline & Subheadline - Switch by Tab or use custom content */}
          {content ? (
            <div>
              <h1 className="text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2">
                {content.headline}
              </h1>
              <p className="text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]">
                {content.subheadline}
              </p>
            </div>
          ) : showTabs ? (
            tab === "enterprise" ? (
              <>
                <h1 className="text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2 ">
                  The Best Platform for
                  <br />
                  <span className="font-bold md:text-[38px] xl:text-[50px] text-[#1D6C86]">Technical Interviews</span>
                </h1>
                <p className="text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]">
                  Let experts handle your technical interviews while your team focuses on building
                </p>
              </>
            ) : (
              <>
                <h1
                  className="text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2 "
                  style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: 0 }}
                >
                  Stand Out to Top <span className="font-semibold md:text-[38px] xl:text-[50px] text-[#154D5F]">Companies</span><br />
                  with Proven <span className="font-semibold md:text-[38px] xl:text-[50px] text-[#154D5F]">Skills</span>
                </h1>
                <p
                  className="text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                >
                  Mapkie empowers companies to build stronger teams and individuals to reach their potential.
                </p>
              </>
            )
          ) : null}
          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="text-white px-8 py-3 md:px-10 md:py-3 rounded-full font-medium text-sm md:text-[14px] shadow-lg transition-colors w-auto md:w-[190] h-auto md:h-[54px] flex items-center justify-center bg-transparent border border-solid"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                letterSpacing: "0.5px",
                borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                color: "#fff"
              }}
            >
              {content?.buttonText || "Request Demo"}
            </button>
          </div>
        </div>

        {/* Illustration and Cards - Switch by Tab or use custom image */}
        {!hideImageSection && (
          <>
            {/* Mobile Illustration */}
            <div className="block mb-2 md:hidden w-full mt-8 mb-4">
              {heroImage ? (
                <div className="relative w-full h-[280px] sm:h-[320px] flex items-center justify-center">
                  <Image 
                    src={heroImage} 
                    alt="Hero Image" 
                    width={280} 
                    height={200} 
                    className="object-contain" 
                    priority 
                  />
                </div>
              ) : showTabs ? (
                tab === "enterprise" ? (
                  <div className="relative w-full h-[280px] sm:h-[320px] flex items-end justify-center pb-4">
                    {/* Main interviewer illustration - aligned to bottom */}
                    <div className="relative">
                      <Image 
                        src="/interviewer-on-laptop.svg" 
                        alt="Interviewer" 
                        width={220} 
                        height={170} 
                        className="sm:w-[260px] sm:h-[200px] object-contain" 
                        priority 
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-[300px] flex items-center justify-center">
                    {/* Man running for candidate tab */}
                    <div className="relative">
                      <Image src="/man-running.png" alt="Man running" width={280} height={200} priority />
                    </div>
                    {/* Mapkie logo circle for mobile */}
                    <div className="absolute bottom-8 left-8 bg-white rounded-full flex items-center justify-center shadow-lg w-16 h-16">
                      <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={40} height={40} />
                    </div>
                    {/* Company logos for mobile */}
                    <div className="absolute top-4 right-8 flex flex-col gap-3">
                      <div className="bg-white rounded-full shadow-md flex items-center justify-center w-10 h-10">
                        <Image src="/amazon.png" alt="Amazon" width={24} height={24} />
                      </div>
                      <div className="bg-white rounded-full shadow-md flex items-center justify-center w-10 h-10">
                        <Image src="/google.png" alt="Google" width={24} height={24} />
                      </div>
                    </div>
                  </div>
                )
              ) : null}
            </div>
            
            {/* Desktop Illustration */}
            <div className="hidden md:block relative flex-1 min-w-[500px] xl:min-w-[700px] h-[450px] lg:h-[500px] xl:h-[550px] right-0" style={{background: 'url(/dotted-bg.png) left top / cover no-repeat',marginTop: '40px', marginBottom: '-40px'}}>
              {heroImage ? (
                <div className="absolute left-[0px] bottom-[-60px] md:bottom-[-80px] lg:bottom-[-100px] xl:bottom-[-140px] z-10 flex items-center justify-center w-full h-full">
                  <Image 
                    src={heroImage} 
                    alt="Hero Image" 
                    width={500} 
                    height={575} 
                    className="object-contain" 
                    priority 
                  />
                </div>
              ) : showTabs ? (
                tab === "enterprise" ? (
                  <>
                    {/* Person illustration - positioned on the left with better spacing and bottom alignment */}
                    <div className="absolute left-[-522px] md:left-[-446px] lg:left-[-490px] xl:left-[-657px] bottom-[-106px] md:bottom-[-106] lg:bottom-[-106px] xl:bottom-[-106px] z-10">
                      <Image 
                        src="/interviewer-on-laptop.svg" 
                        alt="Interviewer" 
                        width={380} 
                        height={240} 
                        className="md:w-[420px] md:h-[265px] lg:w-[500px] lg:h-[315px] xl:w-[562px] xl:h-[352px] object-contain" 
                        priority 
                      />
                    </div>

                    {/* Job Profiles Card */}
                    <div className="absolute left-[80px] xl:left-[130px] top-[-20px] xl:top-[-40px] z-20 overflow-hidden">
                      <Image src="/job-profiles-card.png" alt="Job Profiles" width={550} height={480} className="xl:w-[700px] xl:h-[620px]" />
                    </div>

                    {/* Pipeline Status Card (replacing small status card) */}
                    <div className="absolute right-[20px] xl:right-[35px] top-[-40px] xl:top-[-60px] z-30 overflow-hidden">
                      <Image src="/pipeline-status-card.png" alt="Pipeline Status" width={280} height={220} className="xl:w-[350px] xl:h-[280px]" />
                    </div>

                    {/* Upload Resume Card (replacing metrics card) */}
                    <div className="absolute left-[10px] xl:left-[20px] bottom-[60px] xl:bottom-[100px] z-30 overflow-hidden">
                      <Image src="/upload-resume-card.png" alt="Upload Resume" width={320} height={260} className="xl:w-[400px] xl:h-[320px]" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Man running illustration */}
                    <div className="absolute left-[0px] bottom-[-60px] md:bottom-[-80px] lg:bottom-[-100px] xl:bottom-[-140px] z-10">
                      <Image 
                        src="/man-running.png" 
                        alt="Man running" 
                        width={400} 
                        height={460} 
                        className="lg:w-[500px] lg:h-[575px] xl:w-[570px] xl:h-[655px] object-contain" 
                        priority 
                      />
                    </div>
                    {/* Mapkie logo circle */}
                    <div className="absolute left-[-150px] xl:left-[-200px] bottom-[80px] xl:bottom-[120px] z-20 bg-white rounded-full flex items-center justify-center shadow-lg w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                      <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={48} height={48} className="xl:w-[60px] xl:h-[60px]" />
                    </div>
                    {/* Company avatars */}
                    <div className="absolute left-[420px] lg:left-[500px] xl:left-[580px] top-[50px] xl:top-[70px] z-30 flex flex-col gap-4 xl:gap-6 items-center">
                      <div className="bg-white rounded-full shadow-md flex items-center justify-center w-[56px] h-[56px] xl:w-[64px] xl:h-[64px]">
                        <Image src="/amazon.png" alt="Amazon" width={32} height={32} className="xl:w-[40px] xl:h-[40px]" />
                      </div>
                      <div className="bg-white rounded-full shadow-md flex items-center justify-center w-[56px] h-[56px] xl:w-[64px] xl:h-[64px]">
                        <Image src="/amazon.png" alt="Amazon" width={32} height={32} className="xl:w-[40px] xl:h-[40px]" />
                      </div>
                    </div>
                  </>
                )
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  );
}