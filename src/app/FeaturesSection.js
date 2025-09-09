"use client";
import Image from "next/image";
import Link from "next/link";
import { useTab } from "./TabContext";
import PropTypes from "prop-types";

// Reusable feature block using 50/50 layout styling
function FeatureBlock({ image, alt, title, body, reverse = false, index = 0, href }) {
  const isSvg = image?.toLowerCase().endsWith('.svg');
  return (
    <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? 'lg:direction-rtl' : ''}`}> {/* direction-rtl helper not tailwind; visual reverse handled below */}
      {/* Illustration / Image */}
      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div className="w-full h-auto lg:w-[542px] lg:h-[408px] inline-flex items-center">
          <Image
            src={image}
            alt={alt}
            width={542}
            height={408}
            className={`max-w-full max-h-full ${isSvg ? 'object-contain' : 'object-cover'} object-left`}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      </div>
      {/* Content */}
      <div className={`flex flex-col justify-center lg:w-[567px] lg:h-[408px] ${reverse ? 'lg:order-1' : ''}`}>
        <h3 className="text-[24px] font-bold text-[#1D6C86] mb-6 leading-tight">{title}</h3>
        <p className="text-gray-600 text-[16px] leading-relaxed mb-6">{body}</p>
        <div>
          {href ? (
            <Link
              href={href}
              className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto inline-flex items-center justify-center bg-transparent border border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006C86] hover:opacity-90"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                letterSpacing: "0.5px",
                borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                color: "#fff"
              }}
            >
              Learn More
            </Link>
          ) : (
            <button
              className="text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg transition-colors w-auto h-auto flex items-center justify-center bg-transparent border border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006C86]"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
                letterSpacing: "0.5px",
                borderImageSource: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) padding-box, #fff border-box",
                color: "#fff"
              }}
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { selectedTab: tab } = useTab();

  const enterpriseFeatures = [
    {
      image: "/live-coding.svg",
      alt: "Live Coding Environment",
      title: "Live Coding Environment",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end."
    },
    {
      image: "/hd-video.svg",
      alt: "HD Video Interviews",
      title: "HD Video Interviews",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end."
    },
    {
      image: "/expert-network.svg",
      alt: "Expert Interview Network",
      title: "Expert Interview Network",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end."
    }
  ];

  const candidateFeatures = [
    {
      image: "/references.svg",
      alt: "References",
      title: "References",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.",
      href: "/referral"
    },
    {
      image: "/resume-writing.svg",
      alt: "Better Resume Writing",
      title: "Better Resume Writing",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.",
      href: "/referral?type=resume"
    },
    {
      image: "/mock-interview.svg",
      alt: "Mock Interviews",
      title: "Mock Interviews",
      body: "With a network of verified interviewers, you can trust the results given by us. Candidates recommended by us after the interview have more than a 70% chance to be selected at your end.",
      href: "/referral?type=mock"
    }
  ];

  const features = tab === "enterprise" ? enterpriseFeatures : candidateFeatures;

  return (
    <section className="relative z-10 py-20 bg-[#E8F0F3]">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className="font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-[38px]"
            style={{
              background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {tab === 'enterprise' ? (
              <>One Platform for All of Your Technical<br />Assessment & Interview Needs</>
            ) : (
              <>Everything You Need to Get Hired —<br />All in One Platform</>
            )}
          </h2>
          <p
            className="text-lg md:text-xl font-normal text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontSize: "18px", fontWeight: 400, fontStyle: "normal" }}
          >
            Let experts handle your technical interviews while your team focuses on building
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((f, idx) => (
            <FeatureBlock key={f.title} {...f} reverse={idx % 2 === 1} index={idx} href={f.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

FeatureBlock.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  index: PropTypes.number,
  href: PropTypes.string
};