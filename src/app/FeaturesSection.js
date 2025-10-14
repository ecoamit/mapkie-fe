"use client";
import Image from "next/image";
import Link from "next/link";
import { useTab } from "./TabContext";
import PropTypes from "prop-types";

// Reusable feature block using 50/50 layout styling
function FeatureBlock({ image, alt, title, body, reverse = false, index = 0, href }) {
  const isSvg = image?.toLowerCase().endsWith('.svg');
  const isReference = title === 'References';
  const isResume = title === 'Better Resume Writing';
  const isMock = title === 'Mock Interviews';
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-[200px] items-center ${reverse ? 'lg:direction-rtl' : ''} ${isReference ? 'lg:h-[444px]' : isResume ? 'lg:h-[379px]' : isMock ? 'lg:h-[424px]' : ''}`}
    >
      {/* Illustration / Image */}
      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div
          className={`w-full h-auto inline-flex justify-center lg:justify-start items-center ${isReference ? 'lg:w-[525px] lg:h-[444px]' : isResume ? 'lg:w-[531px] lg:h-[379px]' : isMock ? 'lg:w-[477px] lg:h-[424px]' : 'lg:w-[542px] lg:h-[408px]'}`}
        >
          <Image
            src={image}
            alt={alt}
            width={isReference ? 525 : isResume ? 531 : isMock ? 477 : 542}
            height={isReference ? 444 : isResume ? 379 : isMock ? 424 : 408}
            className={`max-w-full max-h-full ${isSvg ? 'object-contain' : 'object-cover'} object-center lg:object-left`}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes={
              isReference
                ? "(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 525px"
                : isResume
                ? "(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 531px"
                : isMock
                ? "(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 477px"
                : "(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 542px"
            }
          />
        </div>
      </div>
      {/* Content */}
      <div
        className={`flex flex-col gap-4 sm:gap-5 ${isReference ? 'justify-center lg:h-[444px]' : isResume ? 'justify-center lg:h-[379px]' : isMock ? 'justify-center lg:h-[424px]' : 'justify-center lg:h-[408px]'} lg:w-[567px] ${reverse ? 'lg:order-1' : ''}`}
      >
        <h3
          className="mb-2 sm:mb-3"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(22px, 5.2vw, 28px)',
            lineHeight: '1.25',
            letterSpacing: 0,
            background: 'linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </h3>
        <p
          className="mb-4 sm:mb-6"
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: 0,
            color: '#384C5D'
          }}
        >
          {body}
        </p>
        <div>
          {href ? (
            <Link
              href={href}
              className="text-white px-7 py-3 rounded-full font-medium text-sm shadow-lg transition-colors inline-flex items-center justify-center bg-transparent border border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006C86] hover:opacity-90"
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
              className="text-white px-7 py-3 rounded-full font-medium text-sm shadow-lg transition-colors inline-flex items-center justify-center bg-transparent border border-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006C86]"
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

export default function FeaturesSection({ forceEnterprise = false }) {
  const { selectedTab: tab } = useTab();
  const effectiveTab = forceEnterprise ? 'enterprise' : tab;

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

  const features = effectiveTab === "enterprise" ? enterpriseFeatures : candidateFeatures;

  return (
    <section className="relative z-10 bg-[#E8F0F3] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1237px] mx-auto px-6 sm:px-8 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-[30px]">
          <h2
            className="mb-4 sm:mb-6"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 7vw, 42px)',
              lineHeight: '125%',
              letterSpacing: 0,
              background: 'linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {effectiveTab === 'enterprise' ? (
              <>One Platform for All of Your Technical<br className="hidden sm:block" />Assessment & Interview Needs</>
            ) : (
              <>Everything You Need to Get Hired —<br className="hidden sm:block" />All in One Platform</>
            )}
          </h2>
          <p
            className="mx-auto max-w-3xl sm:max-w-4xl mb-0 px-1"
            style={{
              fontFamily: 'Lexend, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: '#586977'
            }}
          >
            Let experts handle your technical interviews while your team focuses on building
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-24">
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

FeaturesSection.propTypes = {
  forceEnterprise: PropTypes.bool
};