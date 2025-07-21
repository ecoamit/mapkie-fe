"use client";
import React from "react";
import Image from "next/image";

export default function Trusted() {
  const logos = [
    "/gspann.png",
    "/amazon.png", 
    "/google.png",
    "/gspann.png",
    "/amazon.png"
  ];

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
      
      {/* Desktop version - static logos */}
      <div className="hidden md:flex w-full max-w-5xl flex-row justify-between items-center px-2 md:px-0 gap-x-20">
        {logos.map((logo, i) => (
          <div key={i} className="flex flex-shrink-0 justify-center min-w-[120px]">
            <Image
              src={logo}
              alt="Trusted company logo"
              width={180}
              height={64}
              className="h-12 md:h-16 object-contain"
              style={{ maxWidth: 180 }}
            />
          </div>
        ))}
      </div>

      {/* Mobile version - scrolling animation */}
      <div className="md:hidden w-full overflow-hidden">
        <div 
          className="flex"
          style={{
            width: 'calc(200px * 10)', // 10 logos (5 original + 5 duplicated)
            animation: 'scrollLogos 15s infinite linear'
          }}
        >
          {/* Original logos */}
          {logos.map((logo, i) => (
            <div key={`original-${i}`} className="flex flex-shrink-0 justify-center w-[200px]">
              <Image
                src={logo}
                alt="Trusted company logo"
                width={160}
                height={48}
                className="h-12 object-contain"
                style={{ maxWidth: 160 }}
              />
            </div>
          ))}
          {/* Duplicated logos for seamless loop */}
          {logos.map((logo, i) => (
            <div key={`duplicate-${i}`} className="flex flex-shrink-0 justify-center w-[200px]">
              <Image
                src={logo}
                alt="Trusted company logo"
                width={160}
                height={48}
                className="h-12 object-contain"
                style={{ maxWidth: 160 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
