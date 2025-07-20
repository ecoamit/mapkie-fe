
// Removed duplicate block: import React, stats, and ResultsSection definition (lines 55-108)
import React from "react";

const stats = [
  {
    value: "80%",
    label: "Hiring Rate",
  },
  {
    value: "60%",
    label: "Retention Rate",
  },
  {
    value: "2x",
    label: "Candidates evaluated",
  },
  {
    value: "36",
    label: "Hours Saved Per Hire",
  },
];

export default function ResultsSection() {
  return (
    <section
      className="w-full px-4 md:px-0 py-16 md:py-24 bg-gradient-to-br from-[#0B6A8C] to-[#0B3A4B] flex justify-center items-center"
      style={{ minHeight: '420px' }}
    >
      <div
        className="w-full max-w-6xl mx-auto rounded-xl p-6 md:p-12 flex flex-col items-center"
        // style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08)' }}
      >
        <h2 className="text-white text-center font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4" style={{ fontFamily: 'Lexend, sans-serif' }}>
          Results our customers have seen
        </h2>
        <p className="text-white/80 text-center text-base md:text-lg max-w-2xl mb-10 md:mb-12" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}>
          From faster hiring to better candidate performance, see how Mapkie delivers measurable impact for companies and job seekers alike.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[220px] max-w-[320px] bg-white/10 rounded-2xl flex flex-col items-center justify-center py-8 md:py-10 px-4 md:px-0 border border-white/10"
              style={{ minHeight: 150 }}
            >
              <span className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>{stat.value}</span>
              <span className="text-white text-lg md:text-xl text-center opacity-90" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
