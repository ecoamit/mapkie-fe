"use client";
import Image from "next/image";
import { useState } from "react";

export default function BenefitsSection() {
  const [tab, setTab] = useState("candidate");

  // You can swap content per tab if needed
  const benefits = [
    {
      img: "/resume.png",
      title: "Resume That Stands Out",
      desc: "Get certified technical interview evaluations that add real value to your resume.",
    },
    {
      img: "/feedback.png",
      title: "Real-Time Feedback",
      desc: "Receive instant expert insights to help improve your performance after every interview.",
    },
    {
      img: "/confidence-building.png",
      title: "Confidence Building",
      desc: "Mock interviews in a professional setting help candidates build confidence for real employer interviews.",
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] flex flex-col items-center relative overflow-x-hidden">
      {/* Horizontal divider bar */}
      {/* <div className="absolute left-0 top-[210px] w-full h-[60px] bg-[#eaf4fa] z-0" /> */}
      {/* Heading */}
      <div className="w-full max-w-[1100px] mx-auto text-center mb-2 z-10 relative">
        <h2 className="text-[36px] md:text-[40px] font-extrabold text-[#17445A] mb-3 leading-tight tracking-tight">Key Benefits</h2>
        <p className="text-[#586977] text-[16px] mb-14 font-regular">Your All-in-One Platform to Get Interview-Ready and Get Hired</p>
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-7 py-2 rounded-full font-semibold text-[18px] transition-colors border ${
              tab === "enterprise"
                ? "bg-[#007080] text-white border-[#007080]"
                : "bg-white text-[#007080] border-[#007080]"
            }`}
            onClick={() => setTab("enterprise")}
          >
            For Enterprise
          </button>
          <button
            className={`px-7 py-2 rounded-full font-semibold text-[18px] transition-colors border ${
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