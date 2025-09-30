import Image from 'next/image';
import PropTypes from 'prop-types';

// Simple, extensible news / press coverage logo strip.
// If an item lacks a src, its name is rendered as styled text fallback.
export default function NewsCoverageSection({ items }) {
  const logos = items?.length ? items : DEFAULT_ITEMS;
  return (
    <section className="relative z-10 bg-white py-20 md:py-24 font-[450]">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-42-gradient mb-3">We are in the News sometimes</h2>
          <p className="text-[#586977] text-[14px] md:text-[16px] leading-[1.5] m-0">or more than sometimes</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-7">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="news-logo-card w-[175px] md:w-[195px] h-[60px] flex items-center justify-center bg-white border border-[#0D6C86]/60 rounded-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-shadow duration-200 px-4"
              title={logo.name}
            >
              <Image 
                src={logo.src} 
                alt={logo.name} 
                width={logo.width || 160} 
                height={logo.height || 40} 
                className="object-contain max-h-[40px] w-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ordered per user instruction using actual svg asset filenames in /public
const DEFAULT_ITEMS = [
  { name: 'Google News', src: '/google-news.svg' },
  { name: 'dailyhunt', src: '/dailyhunt.svg' },
  { name: 'Indian Economic Observer', src: '/indian-economic.svg' },
  { name: 'US WORLD TODAY', src: '/us-world.svg' },
  { name: 'The Print', src: '/the-print.svg' },
  { name: 'England News', src: '/england-news.svg' },
  { name: 'BBC News', src: '/bbc-news.svg' },
  { name: 'US WORLD TODAY', src: '/us-world.svg' }, // duplicate intentionally
  { name: 'NBC', src: '/nbc.svg' },
];

NewsCoverageSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }))
};
