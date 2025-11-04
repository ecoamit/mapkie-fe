"use client";
import Image from "next/image";
import Link from "next/link";
import { useTab } from "./TabContext";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation"; // ADDED

export default function HeroSection({ 
  showTabs = true, 
  content = null, 
  heroImage = null,
  className = "",
  hideImageSection = false,
  hideBackgroundWave = false,
  contentMaxWidth = null,
  scrollTargetId = null
}) {
  const { selectedTab: tab, setSelectedTab: setTab } = useTab();
  const pathname = usePathname();                 // ADDED
  const isHome = pathname === "/" || pathname === ""; // ADDED
  const isExploreMore = content?.buttonText === 'Explore More' && scrollTargetId;
  const isEnterpriseTab = showTabs && tab === 'enterprise';

  // REPLACED: remove invalid global URL usage; apply mobile bg ONLY on homepage
  const mobileBgClass = isHome
    ? (showTabs
        ? (tab === 'enterprise' ? 'mobile-hero-enterprise-bg' : 'mobile-hero-candidate-bg')
        : 'mobile-hero-candidate-bg')
    : '';

  const handleExploreClick = (e) => {
    if (!isExploreMore) return; // fallback safety
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const el = document.getElementById(scrollTargetId);
      if (el) {
        try {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (_) {
          // graceful fallback
          console.error('Smooth scroll failed, using manual scroll');
          const top = el.getBoundingClientRect().top + window.scrollY - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section
      className={`relative w-full ${isHome ? 'hero-mobile-min-height' : ''} md:min-h-[calc(100svh-80px)] bg-[#E8F0F3] overflow-hidden flex items-start pt-10 md:pt-12 xl:pt-14 2xl:pt-16 pb-6 md:pb-4 xl:pb-6 2xl:pb-6 md:pl-4 md:pl-6 xl:pl-10 pr-0 ${mobileBgClass} ${className}`}
    >

      {/* Background Image / Wave (desktop & tablet only now) */} 
  {!hideBackgroundWave && (
      <div className="hidden md:block absolute bottom-[-520px] md:bottom-[-340px] xl:bottom-[-570px] inset-0 z-0">
        <Image src="/wave.svg" alt="Wave background" fill style={{objectFit:'stretch', opacity:0.60}} />
      </div>
  )}

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1600px] flex flex-col md:flex-row items-start z-10 mx-4 sm:mx-8 md:mx-8 xl:mx-16 2xl:mx-32 md:px-4 md:px-0">
        {/* Text Block */}
        <div className="w-full md:max-w-[600px] xl:max-w-[800px] pt-0 text-center md:text-left" style={contentMaxWidth ? { maxWidth: contentMaxWidth } : undefined}>
          {/* Tabs - Only show if showTabs is true */}
          {showTabs && (
            <div className="w-full max-w-[420px] mx-auto md:mx-0 mb-6">
              <div className="flex relative text-base md:text-[16px] font-medium items-center select-none">
                {/* Candidate on the left */}
                <button
                  className={`flex-1 text-center pb-2 transition-colors ${
                    tab === "candidate" ? "text-[#1D6C86]" : "text-[#030D16]"
                  }`}
                  style={{ position: 'relative', zIndex: 2 }}
                  onClick={() => setTab("candidate")}
                >
                  CANDIDATE
                  {/* Inactive underline */}
                  {tab !== "candidate" && (
                    <span className="block absolute left-1 -translate-x-1 bottom-0 h-[1.5px] bg-[#C4D3DB]" style={{width: '90%', zIndex: 5, left: '50%', transform: 'translateX(-50%)'}} />
                  )}
                </button>
                {/* Enterprise on the right */}
                <button
                  className={`flex-1 text-center pb-2 transition-colors ${
                    tab === "enterprise" ? "text-[#1D6C86]" : "text-[#030D16]"
                  }`}
                  style={{ position: 'relative', zIndex: 2 }}
                  onClick={() => setTab("enterprise")}
                >
                  ENTERPRISE
                  {/* Inactive underline */}
                  {tab !== "enterprise" && (
                    <span className="block absolute left-1 -translate-x-1 bottom-0 h-[1.5px] bg-[#C4D3DB]" style={{width: '90%', zIndex: 5, left: '50%', transform: 'translateX(-50%)'}} />
                  )}
                </button>
                {/* Active tab underline */}
                <div
                  className="absolute bottom-0 h-[3px] bg-[#1D6C86] z-10 transition-all duration-300"
                  style={{
                    left: tab === "candidate" ? "5%" : "55%",
                    width: "40%"
                  }}
                />
              </div>
            </div>
          )}
          {/* Headline & Subheadline - Switch by Tab or use custom content */}
          {content ? (
            <div>
              <h1 className={`mb-4 ${typeof content.headline === 'string' || (content.headline?.props && !/hero-headline-44/.test(JSON.stringify(content.headline.props)) ) ? 'text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug font-light' : ''}`}>
                {content.headline}
              </h1>
              <p className="text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]">
                {content.subheadline}
              </p>
            </div>
          ) : showTabs && isEnterpriseTab ? (
            <>
              <h1 className="text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug font-light mb-4 mt-2 ">
                Real Human Interviewers
                <br />
                <span className="font-bold md:text-[38px] xl:text-[50px] text-[#1D6C86]">Zero Wasted Time</span>
              </h1>
              <p className="text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-[#384C5D]">
               Mapkie ensures you never compromise on talent quality with seasoned interview
experts.
              </p>
            </>
          ) : showTabs ? (
            <>
              {/* Candidate tab: MOBILE uses enterprise styling (desktop unchanged via md: classes) */}
              <h1
                className="candidate-mobile-enterprise-style mb-4 mt-2 font-light text-3xl md:text-[38px] xl:text-[50px] leading-tight md:leading-snug"
              >
                Transform Your&nbsp;
                <span className="font-semibold text-[#154D5F]">
                   Interview Performance
                </span>
                <br />
                into Top Company&nbsp;
                <span className="font-semibold text-[#154D5F]">
                  Offers.
                </span>
              </h1>
              <p
                className="candidate-mobile-enterprise-paragraph mb-8 font-normal max-w-full md:max-w-[480px] xl:max-w-[520px] mx-auto md:mx-0 text-base md:text-[18px] xl:text-[20px] leading-relaxed md:leading-tight text-[#384C5D]"
              >
                Mapkie revolutionary Real Human interview platform gives you the edge you need to
land your dream job at Fortune 500 companies.
              </p>
            </>
          ) : null}
          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mt-3 md:mt-10">
            {isExploreMore ? (
              <button
                type="button"
                onClick={handleExploreClick}
                className="btn-request-demo text-sm md:text-[14px] px-8 md:px-10 md:py-5"
                aria-label="Explore more content"
              >
                {content?.buttonText}
              </button>
            ) : (
              <Link
                href="/referral?type=resume"
                className="btn-request-demo text-sm md:text-[14px] px-8 md:px-10 md:py-5"
              >
                {content?.buttonText || "Request Demo"}
              </Link>
            )}
          </div>
        </div>

        {/* Illustration and Cards - Switch by Tab or use custom image */}
        {!hideImageSection && (
          <>
            {/* Desktop Illustration (unchanged) */}
            <div className="hidden md:block relative flex-1 min-w-[500px] xl:min-w-[800px] h-[400px] lg:h-[460px] xl:h-[500px] right-0" style={{background: 'url(/dotted-bg.svg) left top / cover no-repeat',marginTop: '32px', marginBottom: '-20px', marginRight: '-126px' }}>
              {heroImage ? (
                <div className="absolute left-[0px] bottom-[-60px] md:bottom-[-80px] lg:bottom-[-100px] xl:bottom-[-140px] z-10 flex items-center justify-center w-full h-full">
                  <Image 
                    src={heroImage} 
                    alt="Hero Image" 
                    width={500} 
                    height={575} 
                    className="object-contain" 
                    priority 
                  />
                </div>
              ) : showTabs ? (
                tab === "enterprise" ? (
                  <>
                    {/* Person illustration - positioned on the left with better spacing and bottom alignment */}
                    <div className="absolute left-[-522px] md:left-[-446px] lg:left-[-490px] xl:left-[-567px] bottom-[-72px] md:bottom-[-72px] lg:bottom-[-72px] xl:bottom-[-134px] z-10">
                      <Image 
                        src="/interviewer-on-laptop.svg" 
                        alt="Interviewer" 
                        width={380} 
                        height={240} 
                        className="md:w-[420px] md:h-[265px] lg:w-[500px] lg:h-[315px] xl:w-[562px] xl:h-[350px] object-contain" 
                        priority 
                      />
                    </div>

                    {/* Job Profiles Card */}
                    <div className="absolute left-[80px] xl:left-[130px] top-[-10px] xl:top-[-24px] z-20 overflow-hidden">
                      <Image src="/job-profiles-card.svg" alt="Job Profiles" width={550} height={480} className="xl:w-[700px] xl:h-[620px]" />
                    </div>

                    {/* Pipeline Status Card (replacing small status card) */}
                    <div className="absolute right-[20px] xl:right-[35px] top-[-30px] xl:top-[-45px] z-30 overflow-hidden">
                      <Image src="/pipeline-status-card.svg" alt="Pipeline Status" width={280} height={220} className="xl:w-[350px] xl:h-[280px]" />
                    </div>

                    {/* Upload Resume Card (replacing metrics card) */}
                    <div className="absolute left-[10px] xl:left-[20px] bottom-[40px] xl:bottom-[70px] z-30 overflow-hidden">
                      <Image src="/upload-resume-card.svg" alt="Upload Resume" width={320} height={260} className="xl:w-[400px] xl:h-[320px]" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Man running illustration */}
                    <div className="absolute left-[0px] bottom-[-40px] md:bottom-[-60px] lg:bottom-[-70px] xl:bottom-[-90px] z-10">
                      <Image 
                        src="/man-running.svg" 
                        alt="Man running" 
                        width={400} 
                        height={460} 
                        className="lg:w-[500px] lg:h-[575px] xl:w-[570px] xl:h-[655px] object-contain" 
                        priority 
                      />
                    </div>
                    {/* Mapkie logo (SVG already includes background) */}
                    <div className="absolute left-[-150px] xl:left-[-175px] bottom-[200px] xl:bottom-[72px] z-20">
                      <Image src="/mapkie-logo.svg" alt="Mapkie Logo" width={92} height={92} className="xl:w-[135px] xl:h-[135px]" priority />
                    </div>
                    {/* Company logos (desktop) */}
                    <div className="absolute left-[420px] lg:left-[520px] xl:left-[600px] top-[40px] xl:top-[70px] z-30 flex flex-col gap-6 items-center">
                      <Image src="/amazon-logo.svg" alt="Amazon" width={64} height={64} className="xl:w-[72px] xl:h-[72px]" priority />
                      <Image src="/google-logo.svg" alt="Google" width={64} height={64} className="xl:w-[72px] xl:h-[72px]" priority />
                      <Image src="/headshot.svg" alt="Headshot" width={64} height={64} className="xl:w-[72px] xl:h-[72px]" priority />
                    </div>
                  </>
                )
              ) : null}
            </div>
          </>
        )}
      </div>

      {isHome && (
        <style jsx>{`
          @media (max-width: 767px) {
            .mobile-hero-candidate-bg,
            .mobile-hero-enterprise-bg {
              background-size: 100% auto;
              background-position: center bottom;
              background-repeat: no-repeat;
            }
            .mobile-hero-candidate-bg {
              background-image: url('/mobile-homepage-candidate.svg');
            }
            .mobile-hero-enterprise-bg {
              background-image: url('/mobile-homepage-enterprise.svg');
            }
            .hero-mobile-min-height {
              min-height: 740px;
            }
          }
        `}</style>
      )}
    </section>
  );
}

HeroSection.propTypes = {
  showTabs: PropTypes.bool,
  content: PropTypes.shape({
    headline: PropTypes.node,
    subheadline: PropTypes.node,
    buttonText: PropTypes.node,
  }),
  heroImage: PropTypes.string,
  className: PropTypes.string,
  hideImageSection: PropTypes.bool,
  hideBackgroundWave: PropTypes.bool,
  contentMaxWidth: PropTypes.string,
  scrollTargetId: PropTypes.string,
};