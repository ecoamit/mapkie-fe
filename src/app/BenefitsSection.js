"use client";
import Image from "next/image";
import { useTab } from "./TabContext";

export default function BenefitsSection() {

  const { selectedTab: tab } = useTab();

  // Content for Individual/Candidate tab
  const candidateBenefits = [
    {
      img: "/resume.svg",
      title: "Resume That Stands Out",
      desc: "Get certified technical interview evaluations that add real value to your resume.",
    },
    {
      img: "/feedback.svg",
      title: "Real-Time Feedback",
      desc: "Receive instant expert insights to help improve your performance after every interview.",
    },
    {
      img: "/confidence-building.svg",
      title: "Confidence Building",
      desc: "Mock interviews in a professional setting help candidates build confidence for real employer interviews.",
    },
  ];

  // Content for Enterprise tab
  const enterpriseBenefits = [
    {
      img: "/save-time.svg",
      title: "Save Engineering Time",
      desc: "Let experts handle your technical interviews while your team focuses on building.",
    },
    {
      img: "/expert-interviewers.svg",
      title: "Expert Interviewers",
      desc: "Let experts handle your technical interviews while your team focuses on building.",
    },
    {
      img: "/evaluation.svg",
      title: "Comprehensive Evaluation",
      desc: "Let experts handle your technical interviews while your team focuses on building.",
    },
  ];

  // Select benefits based on active tab
  const benefits = tab === "enterprise" ? enterpriseBenefits : candidateBenefits;

  return (
    <section className="w-full bg-white py-[60px] flex flex-col items-center relative overflow-x-hidden">
      {/* Horizontal divider bar */}
      {/* <div className="absolute left-0 top-[210px] w-full h-[60px] bg-[#eaf4fa] z-0" /> */}
      {/* Heading */}
      <div className="w-full max-w-[1100px] mx-auto text-center mb-2 z-10 relative">
        <h2 className="text-[36px] md:text-[40px] font-extrabold text-[#17445A] mb-3 leading-tight tracking-tight">Key Benefits</h2>
        <p className="text-[#586977] text-[16px] mb-14 font-regular">Your All-in-One Platform to Get Interview-Ready and Get Hired</p>
        {/* Tab selection is now handled in HeroSection. */}
      </div>
      {/* Rectangle background behind image boxes */}
      <div className="w-full max-w-[1200px] relative flex justify-center items-center px-4 md:px-0 z-10" style={{ minHeight: 390 }}>
        <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 z-0 flex justify-center pointer-events-none select-none" style={{ width: '100%', height: '260px' }}>
          <Image src="/rectangle.png" alt="Rectangle Background" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
          {benefits.map((b, i) => (
            <div key={b.title} className="flex flex-col items-center">
              {/* Image Card */}
              <div
                className="bg-white rounded-[18px] border border-[#bcd6e6] flex items-center justify-center px-8 py-10 transition-all relative min-h-[270px] w-full"
              >
                <Image
                  src={b.img}
                  alt={b.title}
                  width={180}
                  height={140}
                  className="object-contain mx-auto"
                  priority
                />
              </div>
              {/* Content below the card */}
              <h3 className="text-[22px] font-extrabold text-[#17445A] mt-7 mb-2 leading-tight w-full">{b.title}</h3>
              <p className="text-[#586977] text-[14px] w-full font-normal leading-snug">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}