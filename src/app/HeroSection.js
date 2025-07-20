"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [tab, setTab] = useState("candidate");

  return (
    <section className="relative w-full min-h-[700px] bg-[#E8F0F3] overflow-hidden flex items-center">
      {/* Main Content Container */}
      <div className="relative w-full max-w-[1600px] mx-auto pl-[90px] pt-[60px] flex items-start z-10">
        {/* Text Block */}
        <div className="max-w-[800px] pt-[40px]">
          {/* Tabs */}
          <div className="flex gap-8 mb-2 text-[20px] font-bold items-center select-none">
            <button
              className={`transition-colors pb-1 ${
                tab === "candidate"
                  ? "text-[#007080] border-b-2 border-[#007080]"
                  : "text-[#8a8a8a]"
              }`}
              onClick={() => setTab("candidate")}
            >
              FOR CANDIDATE
            </button>
            <button
              className={`transition-colors pb-1 ${
                tab === "enterprise"
                  ? "text-[#007080] border-b-2 border-[#007080]"
                  : "text-[#8a8a8a]"
              }`}
              onClick={() => setTab("enterprise")}
            >
              FOR ENTERPRISE
            </button>
          </div>
          {/* Headline & Subheadline - Switch by Tab */}
          {tab === "enterprise" ? (
            <>
              <h1 className="text-[54px] leading-[62px] font-extrabold mb-4 mt-2 text-[#263238]">
                The Best Platform for
                <br />
                <span className="text-[#007080]">Technical Interviews</span>
              </h1>
              <p className="text-[#555] text-[22px] leading-[34px] mb-8 font-normal max-w-[520px]">
                Mapkie empowers companies to build stronger teams and individuals to reach their potential.
              </p>
            </>
          ) : (
            <>
              <h1
                className="mb-4 mt-8 text-[#1D6C86] text-[28px] md:text-[50px] leading-[1.13] font-normal md:font-normal"
                style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: 0 }}
              >
                Stand Out to Top <span className="font-bold text-[#05445E]">Companies</span><br />
                with Proven <span className="font-bold text-[#05445E]">Skills</span>
              </h1>
              <p
                className="text-[#263238] text-[18px] md:text-[20px] leading-[1.5] mb-8 font-normal max-w-[600px]"
                style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}
              >
                Mapkie empowers companies to build stronger teams and individuals to reach their potential.
              </p>
            </>
          )}
          {/* CTA Button */}
          <button
            className="bg-[#007080] text-white px-10 py-3 rounded-full font-normal text-[14px] shadow-lg hover:bg-[#005a5a] transition-colors w-[210px] h-[54px] flex items-center justify-center"
            style={{
              boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
              letterSpacing: "0.5px",
            }}
          >
            Request Demo
          </button>
        </div>

        {/* Illustration and Cards - Switch by Tab */}
        <div className="relative flex-1 min-w-[700px] h-[600px]">
          {tab === "enterprise" ? (
            <>
              {/* Background wave image */}
              <div className="absolute left-[-120px] bottom-0 w-[900px] h-[140px] z-0 pointer-events-none select-none">
                <Image src="/wave.png" alt="Wave background" fill style={{objectFit:'cover', opacity:0.45}} />
              </div>
              {/* Interviewer illustration */}
              <div className="absolute left-[0px] bottom-[60px] z-10">
                <Image src="/interviewer-on-laptop.svg" alt="Interviewer" width={260} height={220} priority />
              </div>
              {/* Job Profiles Card */}
              <div className="absolute left-[180px] bottom-[0px] z-20 shadow-xl rounded-2xl overflow-hidden">
                <Image src="/job-profiles-card.png" alt="Job Profiles" width={520} height={260} />
              </div>
              {/* Upload Resume Card */}
              <div className="absolute left-[340px] bottom-[160px] z-30 shadow-lg rounded-xl overflow-hidden">
                <Image src="/upload-resume-card.png" alt="Upload Resume" width={220} height={100} />
              </div>
              {/* Pipeline Status Card */}
              <div className="absolute left-[600px] bottom-[220px] z-30 shadow-lg rounded-xl overflow-hidden">
                <Image src="/pipeline-status-card.png" alt="Pipeline Status" width={170} height={100} />
              </div>
            </>
          ) : (
            <>
              {/* Background wave svg - start aligned with Request Demo button */}
              <div className="absolute right-[0px] bottom-0 w-[calc(100vw-90px)] h-[340px] z-0 pointer-events-none select-none">
                <Image src="/wave.svg" alt="Wave background" fill style={{objectFit:'stretch', opacity:0.60}} />
              </div>
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