"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [tab, setTab] = useState("enterprise");

  return (
    <section className="relative w-full min-h-screen md:min-h-[700px] bg-[#E8F0F3] overflow-hidden flex items-center py-8 md:pt-0">

      {/* Background Image */}
      <div className="absolute bottom-[-600px] md:bottom-[-312px] inset-0 z-0">
        <Image src="/wave.svg" alt="Wave background" fill style={{objectFit:'stretch', opacity:0.60}} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1600px] flex flex-col md:flex-row items-start z-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 px-4 md:px-0">
        {/* Text Block */}
        <div className="w-full md:max-w-[800px] pt-0 md:pt-[40px] text-center md:text-left">
          {/* Tabs */}
          <div className="flex justify-center md:justify-start gap-4 md:gap-8 mb-2 text-base md:text-[20px] font-bold items-center select-none">
            <button
              className={`transition-colors pb-1 ${
                tab === "enterprise"
                  ? "text-[#007080] border-b-2 border-[#007080]"
                  : "text-[#8a8a8a]"
              }`}
              onClick={() => setTab("enterprise")}
            >
              
              ENTERPRISE
            </button>
            <button
              className={`transition-colors pb-1 ${
                tab === "candidate"
                  ? "text-[#007080] border-b-2 border-[#007080]"
                  : "text-[#8a8a8a]"
              }`}
              onClick={() => setTab("candidate")}
            >
            INDIVIDUAL  
            </button>
          </div>
          {/* Headline & Subheadline - Switch by Tab */}
          {tab === "enterprise" ? (
            <>
              <h1 className="text-3xl md:text-[54px] leading-tight md:leading-[62px] font-normal mb-4 mt-2 ">
                The Best Platform for
                <br />
                <span className="font-bold text-[#007080]">Technical Interviews</span>
              </h1>
              <p className="text-base md:text-[22px] leading-relaxed md:leading-[34px] mb-8 font-normal max-w-full md:max-w-[520px] mx-auto md:mx-0 text-[#555]">
                Let experts handle your technical interviews while your team focuses on building
              </p>
            </>
          ) : (
            <>
              <h1
                className="mb-4 mt-4 md:mt-8 text-[#1D6C86] text-3xl md:text-[50px] leading-tight md:leading-[1.13] font-normal"
                style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: 0 }}
              >
                Stand Out to Top <span className="font-bold text-[#05445E]">Companies</span><br />
                with Proven <span className="font-bold text-[#05445E]">Skills</span>
              </h1>
              <p
                className="text-[#263238] text-base md:text-[20px] leading-relaxed md:leading-[1.5] mb-8 font-normal max-w-full md:max-w-[600px] mx-auto md:mx-0"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}
              >
                Mapkie empowers companies to build stronger teams and individuals to reach their potential.
              </p>
            </>
          )}
          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="bg-[#007080] text-white px-8 py-3 md:px-10 md:py-3 rounded-full font-normal text-sm md:text-[14px] shadow-lg hover:bg-[#005a5a] transition-colors w-auto md:w-[210px] h-auto md:h-[54px] flex items-center justify-center"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                letterSpacing: "0.5px",
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
        <div className="hidden md:block relative flex-1 min-w-[700px] h-[600px]">
          {tab === "enterprise" ? (
            <>
              {/* Person illustration - positioned on the left */}
              <div className="absolute left-[-750px] bottom-[-60px] z-10">
                <Image src="/interviewer-on-laptop.svg" alt="Interviewer" width={360} height={320} priority />
              </div>

              {/* Job Profiles Card */}
              <div className="absolute left-[130px] top-[40px] z-20 overflow-hidden">
                <Image src="/job-profiles-card.png" alt="Job Profiles" width={700} height={520} />
              </div>

              {/* Pipeline Status Card (replacing small status card) */}
              <div className="absolute right-[50px] top-[0px] z-30 overflow-hidden">
                <Image src="/pipeline-status-card.png" alt="Pipeline Status" width={240} height={200} />
              </div>

              {/* Pipeline Status Card (replacing metrics card) */}
              <div className="absolute left-[25px] bottom-[180px] z-30 overflow-hidden">
                <Image src="/upload-resume-card.png" alt="Pipeline Status" width={280} height={200} />
              </div>
            </>
          ) : (
            <>
              {/* Man running illustration */}
              <div className="absolute left-[180px] bottom-[0px] z-10">
                <Image src="/man-running.png" alt="Man running" width={520} height={340} priority />
              </div>
              {/* Mapkie logo circle */}
              <div className="absolute left-[60px] bottom-[60px] z-20 bg-white rounded-full flex items-center justify-center shadow-lg" style={{width:100, height:100}}>
                <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={60} height={60} />
              </div>
              {/* Company avatars */}
              <div className="absolute left-[600px] top-[40px] z-30 flex flex-col gap-6 items-center">
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