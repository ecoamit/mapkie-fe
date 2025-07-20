"use client";
import Image from "next/image";
import { useState } from "react";

export default function FeaturesSection() {
  const [tab, setTab] = useState("enterprise");

  return (
    <section className="w-full bg-[#eaf4fa] py-[60px] flex flex-col items-center">
      {/* Heading */}
      <div className="w-full max-w-[900px] mx-auto text-center mb-12">
        <h2 className="text-[42px] md:text-[32px] font-bold text-[##006C86] mb-2 leading-tight tracking-tight">
          One Platform for All of Your Technical<br className="hidden md:block" />
          Assessment & interview Needs
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
            For Enterprise
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold text-[16px] transition-colors border ${
              tab === "candidate"
                ? "bg-[#007080] text-white border-[#007080]"
                : "bg-white text-[#007080] border-[#007080]"
            }`}
            onClick={() => setTab("candidate")}
          >
            For Candidate
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="w-full max-w-[1200px] flex flex-col gap-[60px]">
        {/* Feature 1 */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-0 md:gap-0">
          {/* Illustration */}
          <div className="flex-shrink-0 flex items-center justify-start w-[400px] h-[260px] md:ml-0">
            <Image src="/resume-writing.png" alt="Resume Writing" width={380} height={240} className="object-contain" />
          </div>
          {/* Content */}
          <div className="flex-1 max-w-[520px] text-left md:pl-0 pt-8 md:pt-0 flex flex-col justify-center items-start">
            <h3 className="text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">Better Resume Writing</h3>
            <p className="text-[#555] text-[16px] mb-5 leading-normal">
              With a network of verified interviewers, you can trust the results given by us.<br />
              Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
            </p>
            <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-stretch justify-between gap-0 md:gap-0">
          {/* Illustration */}
          <div className="flex-shrink-0 flex items-center justify-end w-[400px] h-[260px] md:mr-0">
            <Image src="/references.png" alt="References" width={380} height={240} className="object-contain" />
          </div>
          {/* Content */}
          <div className="flex-1 max-w-[520px] text-left md:pr-0 pt-8 md:pt-0 flex flex-col justify-center items-start">
            <h3 className="text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">Refreces</h3>
            <p className="text-[#555] text-[16px] mb-5 leading-normal">
              With a network of verified interviewers, you can trust the results given by us.<br />
              Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
            </p>
            <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-0 md:gap-0">
          {/* Illustration */}
          <div className="flex-shrink-0 flex items-center justify-start w-[400px] h-[260px] md:ml-0">
            <Image src="/mock-interview.png" alt="Mock Interviews" width={380} height={240} className="object-contain" />
          </div>
          {/* Content */}
          <div className="flex-1 max-w-[520px] text-left md:pl-0 pt-8 md:pt-0 flex flex-col justify-center items-start">
            <h3 className="text-[22px] font-bold text-[#1a3c4b] mb-2 leading-tight">Mock Interviews</h3>
            <p className="text-[#555] text-[16px] mb-5 leading-normal">
              With a network of verified interviewers, you can trust the results given by us.<br />
              Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
            </p>
            <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}