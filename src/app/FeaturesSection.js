"use client";
import Image from "next/image";
import { useState } from "react";

export default function FeaturesSection() {
  const [tab, setTab] = useState("enterprise");

  return (
    <section className="w-full bg-[#eaf4fa] py-[60px] flex flex-col items-center">
      {/* Heading */}
      <div className="w-full max-w-[900px] mx-auto text-center mb-12 px-6 md:px-0">
        <h2 className="text-3xl md:text-[42px] font-bold text-[#006C86] mb-2 leading-tight tracking-tight">
          <span className="block md:hidden">The Complete Technical<br />Interview Platform</span>
          <span className="hidden md:block">One Platform for All of Your Technical<br />Assessment & interview Needs</span>
        </h2>
        <p className="text-[#6b7280] text-[17px] mb-7">
          Let experts handle your technical interviews while your team focuses on building
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-5 py-2 rounded-full font-semibold text-[16px] transition-colors border ${
              tab === "enterprise"
                ? "bg-[#007080] text-white border-[#007080]"
                : "bg-white text-[#007080] border-[#007080]"
            }`}
            onClick={() => setTab("enterprise")}
          >
            Enterprise
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold text-[16px] transition-colors border ${
              tab === "candidate"
                ? "bg-[#007080] text-white border-[#007080]"
                : "bg-white text-[#007080] border-[#007080]"
            }`}
            onClick={() => setTab("candidate")}
          >
            Individual
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-[60px] px-4 md:px-0">
        {tab === "enterprise" ? (
          <>
            {/* Enterprise Feature 1 - Live Coding Environment */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
              {/* Illustration */}
              <div className="flex-shrink-0 w-full md:w-[400px] h-[200px] md:h-[260px]">
                <Image src="/live-coding.png" alt="Live Coding Environment" width={300} height={180} className="object-contain w-full h-full md:w-[380px] md:h-[240px]" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left flex flex-col justify-start items-center md:items-start">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-4 leading-tight">Live Coding Environment</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Enterprise Feature 2 - HD Video Interviews */}
            <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-8 md:gap-12">
              {/* Illustration */}
              <div className="flex-shrink-0 w-full md:w-[400px] h-[200px] md:h-[260px]">
                <Image src="/hd-video.png" alt="HD Video Interviews" width={300} height={180} className="object-contain w-full h-full md:w-[380px] md:h-[240px] md:ml-auto" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left flex flex-col justify-start items-center md:items-start">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-4 leading-tight">HD Video Interviews</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Enterprise Feature 3 - Expert Interview Network */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
              {/* Illustration */}
              <div className="flex-shrink-0 w-full md:w-[400px] h-[200px] md:h-[260px]">
                <Image src="/expert-network.png" alt="Expert Interview Network" width={300} height={180} className="object-contain w-full h-full md:w-[380px] md:h-[240px]" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left flex flex-col justify-start items-center md:items-start">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-4 leading-tight">Expert Interview Network</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Individual Feature 1 - Better Resume Writing */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-0">
              {/* Illustration */}
              <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-[400px] h-[200px] md:h-[260px] md:ml-0">
                <Image src="/resume-writing.png" alt="Resume Writing" width={300} height={180} className="object-contain md:w-[380px] md:h-[240px]" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left md:pl-0 pt-4 md:pt-0 flex flex-col justify-center items-center md:items-start px-4 md:px-0">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">Better Resume Writing</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-5 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Individual Feature 2 - References */}
            <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-stretch justify-between gap-4 md:gap-0">
              {/* Illustration */}
              <div className="flex-shrink-0 flex items-center justify-center md:justify-end w-full md:w-[400px] h-[200px] md:h-[260px] md:mr-0">
                <Image src="/references.png" alt="References" width={300} height={180} className="object-contain md:w-[380px] md:h-[240px]" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left md:pr-0 pt-4 md:pt-0 flex flex-col justify-center items-center md:items-start px-4 md:px-0">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">References</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-5 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Individual Feature 3 - Mock Interviews */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-0">
              {/* Illustration */}
              <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-[400px] h-[200px] md:h-[260px] md:ml-0">
                <Image src="/mock-interview.png" alt="Mock Interviews" width={300} height={180} className="object-contain md:w-[380px] md:h-[240px]" />
              </div>
              {/* Content */}
              <div className="flex-1 max-w-[520px] text-center md:text-left md:pl-0 pt-4 md:pt-0 flex flex-col justify-center items-center md:items-start px-4 md:px-0">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">Mock Interviews</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-5 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}