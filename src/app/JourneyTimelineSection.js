import PropTypes from 'prop-types';

const DEFAULT_ITEMS = [
  { year: '2021', title: 'Platform Launch', desc: 'Mapkie was founded & officially launched with basic job posting and search features.' },
  { year: '2022', title: 'Growth', desc: 'User base expanded; partnered with institutes to support fresh graduates.' },
  { year: '2023', title: 'Technology Upgrade', desc: 'Introduced AI-driven recommendations and launched the mobile app.' },
  { year: '2024', title: 'Innovation', desc: 'Rolled out video interviews and smart shortlisting; recognized as a fast-growing HR-tech platform.' },
  { year: '2025', title: 'Global Vision', desc: 'Evolved into a complete career and hiring ecosystem with AI, insights, and upskilling resources.' }
];

export default function JourneyTimelineSection({ items = DEFAULT_ITEMS }) {
  return (
    <section className="bg-[#F1F7FA] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <h2 className="heading-42-gradient mb-14 md:mb-20">Our Journey So Far</h2>
        <div className="journey-wrapper overflow-x-auto pb-4">
          <div className="journey-line" aria-hidden="true" />
          <div className="flex justify-between gap-10 md:gap-14 min-w-[880px]">
            {items.map((item, idx) => (
              <div className="journey-item" key={item.year+idx}>
                <span className="journey-item-year">{item.year}</span>
                <span className="journey-marker" style={{left:'50%', transform:'translateX(-50%)'}} aria-hidden="true" />
                <div style={{marginTop:'8px'}}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

JourneyTimelineSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }))
};
