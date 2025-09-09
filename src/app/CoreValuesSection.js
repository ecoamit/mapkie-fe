"use client";
import React from "react";

// Placeholder icons will be replaced later; using simple divs with border to reserve space.
const values = [
  {
    key: "people-first",
    icon: "/core-values1.svg",
    title: "People First",
    desc: "We prioritize people in every decision—valuing relationships, listening deeply, and treating both clients and candidates with respect and care.",
  },
  {
    key: "integrity",
    icon: "/core-values2.svg",
    title: "Integrity",
    desc: "Transparency, honesty, and trust are at the core of everything we do. We build connections that are genuine and lasting.",
  },
  {
    key: "precision",
    icon: "/core-values3.svg",
    title: "Precision",
    desc: "We believe in quality over quantity. Every recommendation, every placement is driven by thoughtful strategy and attention to detail.",
  },
  {
    key: "innovation",
    icon: "/core-values4.svg",
    title: "Innovation",
    desc: "We embrace technology and fresh thinking to improve hiring outcomes, streamline processes, and adapt to the ever‑changing world of work.",
  },
  {
    key: "growth-minded",
    icon: "/core-values5.svg",
    title: "Growth-Minded",
    desc: "We’re passionate about helping people and companies grow. Whether it’s a career move or a business expansion, we’re in it for the long haul.",
  },
  {
    key: "collaboration",
    icon: "/core-values6.svg",
    title: "Collaboration",
    desc: "We work closely with our partners—internal teams, clients, and candidates—because the best results come from working together.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="w-full bg-[#EBF3F6] py-16 md:py-24 flex justify-center px-4 md:px-0" style={{ fontFamily: 'Lexend, sans-serif' }}>
      <div className="w-full max-w-[1180px] mx-auto">
        <h2 className="text-[34px] md:text-[40px] font-bold text-[#0C2E3F] mb-12 text-center leading-tight tracking-tight">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {values.map(v => (
            <div
              key={v.key}
              className="bg-white rounded-md border border-[#D2E3EA] p-6 md:p-7 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              style={{ minHeight: 200 }}
            >
              {/* Icon (expects files core-values1.svg .. core-values6.svg in /public). */}
              <div className="mb-5 w-10 h-10 flex items-center justify-center text-[#0D6C86]" aria-hidden>
                {/* If icons are not yet added, this will render empty alt area. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.icon} alt="" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-[17px] md:text-[18px] font-extrabold text-[#0C2E3F] mb-3 leading-snug tracking-tight">{v.title}</h3>
              <p className="text-[#273E48] text-[13px] md:text-[14px] leading-[1.5] font-normal">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
