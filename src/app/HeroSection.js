"use client";
import Image from "next/image";
import { useTab } from "./TabContext";

export default function HeroSection() {
  const { selectedTab: tab, setSelectedTab: setTab } = useTab();

  return (
    <section className="relative w-full min-h-screen md:min-h-[850px] bg-[#E8F0F3] overflow-hidden flex items-center py-8 md:pb-50 pl-10 pr-0 md:pt-0">

      {/* Background Image */}
      <div className="absolute bottom-[-600px] md:bottom-[-460px] inset-0 z-0">
        <Image src="/wave.svg" alt="Wave background" fill style={{objectFit:'stretch', opacity:0.60}} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1600px] flex flex-col md:flex-row items-start z-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 px-4 md:px-0">
        {/* Text Block */}
        <div className="w-full md:max-w-[800px] pt-0 md:pt-[40px] text-center md:text-left">
          {/* Tabs */}
          <div className="w-full max-w-[420px] mx-auto md:mx-0 mb-6">
            <div className="flex relative text-base md:text-[16px] font-medium items-center select-none">
              <button
                className={`flex-1 text-center pb-2 transition-colors ${
                  tab === "enterprise" ? "text-[#1D6C86]" : "text-[#030D16]"
                }`}
                style={{ position: 'relative', zIndex: 2 }}
                onClick={() => setTab("enterprise")}
              >
                FOR ENTERPRISE
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
                FOR CANDIDATE
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
          {/* Headline & Subheadline - Switch by Tab */}
          {tab === "enterprise" ? (
            <>
              <h1 className="text-3xl md:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2 ">
                The Best Platform for
                <br />
                <span className="font-bold md:text-[50px] text-[#1D6C86]">Technical Interviews</span>
              </h1>
              <p className="text-base md:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]">
                Let experts handle your technical interviews while your team focuses on building
              </p>
            </>
          ) : (
            <>
              <h1
                className="text-3xl md:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2 "
                style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: 0 }}
              >
                Stand Out to Top <span className="font-semibold md:text-[50px] text-[#154D5F]">Companies</span><br />
                with Proven <span className="font-semibold md:text-[50px] text-[#154D5F]">Skills</span>
              </h1>
              <p
                className="text-base md:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]"
                style={{ fontFamily: 'Lexend, sans-serif' }}
              >
                Mapkie empowers companies to build stronger teams and individuals to reach their potential.
              </p>
            </>
          )}
          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="text-white px-8 py-3 md:px-10 md:py-3 rounded-full font-medium text-sm md:text-[16px] shadow-lg transition-colors w-auto md:w-[190] h-auto md:h-[54px] flex items-center justify-center bg-transparent border border-solid"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                letterSpacing: "0.5px",
                borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                color: "#fff"
              }}
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Illustration and Cards - Switch by Tab */}
        {/* Mobile Illustration */}
        <div className="block mb-2 md:hidden w-full mt-8 mb-4">
          {tab === "enterprise" ? (
            <div className="relative w-full h-[300px] flex items-center justify-center">
              {/* Main interviewer illustration */}
              <div className="relative">
                <Image src="/interviewer-on-laptop.svg" alt="Interviewer" width={240} height={200} priority />
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
          )}
        </div>
        
        {/* Desktop Illustration */}
        <div className="hidden md:block relative flex-1 min-w-[700px] h-[500px] right-0" style={{background: 'url(/dotted-bg.png) left top / cover no-repeat',marginTop: '100px'}}>
          {tab === "enterprise" ? (
            <>
              {/* Person illustration - positioned on the left */}
              <div className="absolute left-[-730px] bottom-[-220px] z-10 ">
                <Image src="/interviewer-on-laptop.svg" alt="Interviewer" width={562} height={352} priority />
              </div>

              {/* Job Profiles Card */}
              <div className="absolute left-[130px] top-[30px] z-20 overflow-hidden">
                <Image src="/job-profiles-card.png" alt="Job Profiles" width={700} height={620} />
              </div>

              {/* Pipeline Status Card (replacing small status card) */}
              <div className="absolute right-[35px] top-[0px] z-30 overflow-hidden">
                <Image src="/pipeline-status-card.png" alt="Pipeline Status" width={350} height={280} />
              </div>

              {/* Pipeline Status Card (replacing metrics card) */}
              <div className="absolute left-[20px]  bottom-[100px] z-30 overflow-hidden">
                <Image src="/upload-resume-card.png" alt="Pipeline Status" width={400} height={320} />
              </div>
            </>
          ) : (
            <>
              {/* Man running illustration */}
              <div className="absolute left-[0px] bottom-[-150px] z-10">
                <Image src="/man-running.png" alt="Man running" width={570} height={655} priority />
              </div>
              {/* Mapkie logo circle */}
              <div className="absolute left-[-200px] bottom-[120px] z-20 bg-white rounded-full flex items-center justify-center shadow-lg" style={{width:100, height:100}}>
                <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={60} height={60} />
              </div>
              {/* Company avatars */}
              <div className="absolute left-[350px] top-[70px] z-30 flex flex-col gap-6 items-center">
                <div className="bg-white rounded-full shadow-md flex items-center justify-center" style={{width:64, height:64}}>
                  <Image src="/amazon.png" alt="Amazon" width={40} height={40} />
                </div>
                <div className="bg-white rounded-full shadow-md flex items-center justify-center" style={{width:64, height:64}}>
                  <Image src="/google.png" alt="Google" width={40} height={40} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}