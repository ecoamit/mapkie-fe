
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
      className="w-full px-4 md:px-0 py-16 md:py-20 flex justify-center items-center"
      style={{ minHeight: '420px', background: 'linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)' }}
    >
      <div
        className="w-full mx-auto rounded-xl p-6 md:p-12 md:pt-0 flex flex-col items-center"
        style={{ minWidth: '1239px' }}
      >
        <h2
          className="mb-4"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '125%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          Results our customers have seen
        </h2>
        <p
          className="max-w-2xl mb-20"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '125%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          From faster hiring to better candidate performance, see how Mapkie delivers measurable impact for companies and job seekers alike.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[220px] max-w-[320px] bg-[#97BBC74D] rounded-2xl flex flex-col items-center justify-center px-4 md:px-0 border border-white/10"
              style={{ height: 130 }}
            >
              <span
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 700,
                  fontSize: '42px',
                  lineHeight: '125%',
                  letterSpacing: 0,
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
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: 0,
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
