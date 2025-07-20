import React from "react";

export default function Trusted() {
  return (
    <section className="w-full py-12 md:py-20 bg-white flex flex-col items-center justify-center">
      <h2
        className="text-[#05445E] text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-3"
        style={{ fontFamily: 'Lexend, sans-serif', letterSpacing: 0 }}
      >
        Trusted By Innovation Companies
      </h2>
      <p
        className="text-[#4B5C6B] text-center text-base md:text-lg mb-10"
        style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 400 }}
      >
        Let experts handle your technical interviews while your team focuses on building
      </p>
      <div className="w-full max-w-5xl flex flex-row justify-between items-center px-2 md:px-0 gap-x-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-shrink-0 justify-center min-w-[120px]">
            <img
              src="/gspann.png"
              alt="Trusted company logo"
              className="h-12 md:h-16 object-contain"
              style={{ maxWidth: 180 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
