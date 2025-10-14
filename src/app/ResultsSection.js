// Removed duplicate block: import React, stats, and ResultsSection definition (lines 55-108)
import React from "react";

const stats = [
  { value: "80%", label: "Hiring Rate" },
  { value: "60%", label: "Retention Rate" },
  { value: "2x",  label: "Candidates evaluated" },
  { value: "36",  label: "Hours Saved Per Hire" },
];

export default function ResultsSection() {
  return (
    <section
      className="w-full flex justify-center items-center px-5 sm:px-8 md:px-0 py-14 sm:py-16 md:py-20"
      style={{ minHeight: '420px', background: 'linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)' }}
    >
      <div className="w-full max-w-[1239px] mx-auto flex flex-col items-center">
        <h2
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 5.2vw, 42px)',
            lineHeight: '125%',
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          Results our customers have seen
        </h2>
        <p
          className="mb-14 md:mb-20 px-1 max-w-[780px]"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px, 3.2vw, 20px)',
            lineHeight: '145%',
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          From faster hiring to better candidate performance, see how Mapkie delivers measurable impact for companies and job seekers alike.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center md:justify-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 w-full md:min-w-[220px] md:max-w-[320px] bg-[#97BBC74D] rounded-2xl flex flex-col items-center justify-center px-6 py-6 md:px-0 border border-white/10"
              style={{ height: 'auto', ...(typeof window === 'undefined' ? {} : {}) }}
            >
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(34px, 6vw, 42px)',
                  lineHeight: '120%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 4vw, 20px)',
                  lineHeight: '115%',
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
