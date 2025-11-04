"use client";
import Image from "next/image";
import { useTab } from "./TabContext";
import PropTypes from "prop-types";


export default function BenefitsSection({ benefits, forceEnterprise = false }) {
  const { selectedTab: tab } = useTab();
  const effectiveTab = forceEnterprise ? 'enterprise' : tab;

  // Default content for Individual/Candidate tab
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

  // Default content for Enterprise tab
  const enterpriseBenefits = [
    {
      img: "/save-time.svg",
      title: "Save Engineering Time",
      desc: "Get detailed candidate reports with hiring recommendations delivered within 2 business days, not weeks or months.",
    },
    {
      img: "/expert-interviewers.svg",
      title: "Expert-Led Interviews",
      desc: "Our certified technical interviewers conduct comprehensive evaluations using proven methodologies, not rushed internal screenings.",
    },
    {
      img: "/evaluation.svg",
      title: "Bias-Free Evaluation",
      desc: "Structured interviews with standardized scoring eliminate unconscious bias and ensure fair assessment for every candidate.",
    },
  ];

  // Use provided benefits prop if present, else fallback to tab logic
  const benefitsToShow = Array.isArray(benefits) && benefits.length > 0
    ? benefits
    : (effectiveTab === "enterprise" ? enterpriseBenefits : candidateBenefits);

  return (
    <section className="w-full bg-white py-[60px] flex flex-col items-center relative overflow-x-hidden">
      {/* Horizontal divider bar */}
      {/* <div className="absolute left-0 top-[210px] w-full h-[60px] bg-[#eaf4fa] z-0" /> */}
      {/* Heading */}
      <div className="w-full max-w-[1100px] mx-auto text-center mb-2 z-10 relative">
        <h2
          className="mb-3"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '125%',
            letterSpacing: 0,
            background: 'linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textAlign: 'center'
          }}
        >
          Key Benefits
        </h2>
        <p
          className="mb-14"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '125%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#586977'
          }}
        >
          Your All-in-One Platform to Get Interview-Ready and Get Hired
        </p>
        {/* Tab selection is now handled in HeroSection. */}
      </div>
      {/* Rectangle background behind image boxes */}
      <div className="w-full max-w-[1200px] relative flex justify-center items-center px-4 md:px-0 z-10" style={{ minHeight: 390 }}>
        {/* Full-viewport background rectangle */}
          <div
            className="absolute top-1/2 -translate-y-[100%] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none w-screen h-[131px]"
            aria-hidden="true"
          >
          <Image
            src="/rectangle.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative place-items-center md:place-items-start">
          {benefitsToShow.map((b) => (
            <div key={b.title} className="flex flex-col items-start md:w-[392px] md:h-[405px] w-full">
              {/* Image Box */}
              <div className="bg-white rounded-[15px] border border-[#B2BAC0] flex items-center justify-center w-full md:w-[392px] md:h-[257px] h-[220px] transition-all overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.title}
                  width={b.title === 'Resume That Stands Out' ? 217 : b.title === 'Real-Time Feedback' ? 199 : b.title === 'Confidence Building' ? 274 : 200}
                  height={b.title === 'Resume That Stands Out' ? 217 : b.title === 'Real-Time Feedback' ? 199 : b.title === 'Confidence Building' ? 182 : 150}
                  className="object-contain"
                  priority
                />
              </div>
              {/* Content */}
              <h3
                className="mt-5 mb-2 w-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '135%',
                  letterSpacing: 0,
                  color: '#000000'
                }}
              >
                {b.title}
              </h3>
              <p
                className="w-full"
                style={{
                  fontFamily: 'Lexend, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '125%',
                  letterSpacing: 0,
                  color: '#586977'
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

BenefitsSection.propTypes = {
  benefits: PropTypes.array,
  forceEnterprise: PropTypes.bool
};