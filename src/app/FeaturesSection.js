"use client";
import Image from "next/image";
import { useTab } from "./TabContext";

export default function HeroSection() {

  const { selectedTab: tab } = useTab();

  return (
    <section className="w-full bg-[#eaf4fa] py-[80px] md:py-[100px] flex flex-col items-center md:px-32 xl:px-48">
      {/* Heading */}
      <div className="w-full max-w-[900px] mx-auto text-center mb-12 px-6 md:px-0">
        <h2 className="text-3xl md:text-[42px] font-bold text-[#006C86] mb-2 leading-tight tracking-tight">
          <span className="block md:hidden">The Complete Technical<br />Interview Platform</span>
          <span className="hidden md:block">One Platform for All of Your Technical<br />Assessment & interview Needs</span>
        </h2>
        <p className="text-[#586977] text-[17px] mb-7">
          Let experts handle your technical interviews while your team focuses on building
        </p>
        {/* Tab selection is now handled in HeroSection. */}
      </div>

      {/* Features */}
      <div className="w-full max-w-[1200px] xl:max-w-[1400px] flex flex-col gap-12 md:gap-16 px-4 md:px-0 mx-auto">
        {tab === "enterprise" ? (
          <>
            {/* Enterprise Feature 1 - Live Coding Environment */}
            <div className="w-full flex flex-col md:flex-row md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center md:pr-4 xl:pr-8">
                <Image src="/live-coding.png" alt="Live Coding Environment" width={680} height={550} className="max-w-full h-auto object-contain" priority />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-6 md:p-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>Live Coding Environment</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Enterprise Feature 2 - HD Video Interviews */}
            <div className="w-full flex flex-col md:flex-row-reverse md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center md:pl-4 xl:pl-8">
                <Image src="/hd-video.png" alt="HD Video Interviews" width={680} height={550} className="max-w-full h-auto object-contain" priority />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-6 md:p-8 md:mr-4 xl:mr-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>HD Video Interviews</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Enterprise Feature 3 - Expert Interview Network */}
            <div className="w-full flex flex-col md:flex-row md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center md:pr-4 xl:pr-8">
                <Image src="/expert-network.png" alt="Expert Interview Network" width={680} height={550} className="max-w-full h-auto object-contain" priority />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-6 md:p-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>Expert Interview Network</h3>
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
            <div className="w-full flex flex-col md:flex-row md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center  pr-8">
                <Image src="/resume-writing.png" alt="Resume Writing" width={557} height={447} className="max-w-full h-auto" />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>Better Resume Writing</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Individual Feature 2 - References */}
            <div className="w-full flex flex-col md:flex-row-reverse md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center  pl-8">
                <Image src="/references.png" alt="References" width={557} height={447} className="max-w-full h-auto" />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>References</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
                  With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.
                </p>
                <button className="bg-[#007080] text-white px-7 py-2.5 rounded-full font-semibold text-[16px] shadow hover:bg-[#005a5a] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Individual Feature 3 - Mock Interviews */}
            <div className="w-full flex flex-col md:flex-row md:items-center gap-8">
              {/* Illustration */}
              <div className="flex-1 flex justify-center items-center  pr-8">
                <Image src="/mock-interview.png" alt="Mock Interviews" width={557} height={447} className="max-w-full h-auto" />
              </div>
              {/* Content */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start p-8">
                <h3 className="font-bold text-[28px] leading-[50px] text-[#006C86] mb-4" style={{fontFamily: 'Lexend', fontWeight: 700, letterSpacing: '0%'}}>Mock Interviews</h3>
                <p className="text-[#555] text-sm md:text-[16px] mb-6 leading-normal text-center md:text-left">
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