"use client";
import React from "react";
import Image from "next/image";

export default function Trusted() {
  const logos = ["/gspann.png", "/HCL.svg", "/datamatics.jpg", "/ebixcash.png"];
  const logoWidth = 200; // px
  const gap = 48; // px
  // Correct width: sum of logo widths + gaps between them (no trailing gap)
  const singleSetWidth = logos.length * logoWidth + (logos.length - 1) * gap;

  return (
    <section className="w-full h-[428px] bg-white flex flex-col items-center justify-center">
      <h2
        className="mb-3 text-center"
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 700,
          fontSize: "42px",
          lineHeight: "125%",
          background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Trusted By Innovation Companies
      </h2>
      <p
        className="text-center mb-15"
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "125%",
          color: "#586977",
        }}
      >
        Let experts handle your technical interviews while your team focuses on building
      </p>

      <div className="w-full overflow-hidden">
        <div
          className="flex items-center"
          style={{
            width: `${singleSetWidth * 2}px`,
            columnGap: `${gap}px`,
            animation: `scrollLogos ${logos.length * 3}s linear infinite`,
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={`original-${i}`}
              className="flex flex-shrink-0 justify-center items-center"
              style={{ width: logoWidth }}
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
          {logos.map((logo, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex flex-shrink-0 justify-center items-center"
              style={{ width: logoWidth }}
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

      <style jsx>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${singleSetWidth}px);
          }
        }
      `}</style>
    </section>
  );
}
