"use client";
import React from "react";
import Image from "next/image";

export default function Trusted() {
  // Number of logos and gap in px
  const logos = [
    "/gspann.png",
    "/gspann.png",
    "/gspann.png",
    "/gspann.png",
    "/gspann.png"
  ];
  const logoWidth = 200; // px
  const gap = 48; // px (gap between logos)
  const totalSetWidth = logos.length * (logoWidth + gap);

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

      {/* Rotating logos - works on all screen sizes */}
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center"
          style={{
            width: `${totalSetWidth * 2}px`,
            animation: `scrollLogos ${logos.length * 3}s linear infinite` // speed scales with number of logos
          }}
        >
          {/* Original logos */}
          {logos.map((logo, i) => (
            <div
              key={`original-${i}`}
              className="flex flex-shrink-0 justify-center items-center"
              style={{ width: logoWidth, marginRight: i === logos.length - 1 ? 0 : gap }}
            >
              <Image
                src={logo}
                alt="Trusted company logo"
                width={160}
                height={48}
                className="h-12 md:h-16 object-contain"
                style={{ maxWidth: 160 }}
              />
            </div>
          ))}
          {/* Duplicated logos for seamless loop */}
          {logos.map((logo, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex flex-shrink-0 justify-center items-center"
              style={{ width: logoWidth, marginRight: i === logos.length - 1 ? 0 : gap }}
            >
              <Image
                src={logo}
                alt="Trusted company logo"
                width={160}
                height={48}
                className="h-12 md:h-16 object-contain"
                style={{ maxWidth: 160 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation style for scrolling logos */}
      <style jsx>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalSetWidth}px); }
        }
      `}</style>
    </section>
  );
}
