import Image from "next/image";
import PropTypes from "prop-types";

export default function CTABanner({ showIllustration = true }) {
  return (
    <div className="w-full flex justify-center relative z-20 mt-10 md:mt-16 mb-[-90px] md:mb-[-120px] px-4 md:px-0">
      <div
        className="w-full md:w-[92%] max-w-[1200px] rounded-[24px] flex flex-col md:flex-row items-center px-6 md:px-0 py-8 md:py-0 relative overflow-visible min-h-[280px] md:min-h-[320px]"
        style={{ background: "linear-gradient(90deg, #006080 0%, #0e3c54 100%)", boxShadow: "0 14px 40px rgba(6,31,52,0.10)" }}
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-[60px] z-10 mb-6 md:mb-0">
          <h3 className="text-white text-2xl md:text-[32px] font-bold mb-6 md:mb-7 leading-tight max-w-[420px]">
            Ready to transform your technical hiring
          </h3>
          <button className="bg-white text-[#006C86] px-7 py-2 rounded-full font-bold text-[14px] shadow-none hover:bg-[#e6f2f2] transition-colors w-[170px] text-center">
            Request Demo
          </button>
        </div>

        {/* Right: Illustration Layered - toggled by prop */}
        {showIllustration && (
          <div className="hidden md:flex flex-1 relative items-end justify-end h-full min-h-[320px]">
            <Image src="/map.png" alt="Map" width={320} height={220} className="absolute top-[40px] right-[280px] z-0" style={{ objectFit: "contain" }} />
            <Image src="/map-2.png" alt="Map 2" width={120} height={120} className="absolute top-[120px] right-[60px] z-0" style={{ objectFit: "contain" }} />
            <Image src="/map-3.png" alt="Map 3" width={80} height={80} className="absolute top-[200px] right-[150px] z-0" style={{ objectFit: "contain" }} />
            <Image src="/female-interviewer.png" alt="Interviewer" width={280} height={340} className="absolute bottom-0 right-[180px] z-20" style={{ objectFit: "contain", overflow: "visible" }} />
            <Image src="/pin.png" alt="Pin" width={38} height={38} className="absolute top-[90px] right-[500px] z-30" />
            <Image src="/pin.png" alt="Pin" width={32} height={32} className="absolute top-[120px] right-[120px] z-30" />
            <Image src="/pin.png" alt="Pin" width={28} height={28} className="absolute top-[220px] right-[160px] z-30" />
          </div>
        )}
      </div>
    </div>
  );
}

CTABanner.propTypes = {
  showIllustration: PropTypes.bool,
};

