"use client";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white pt-[60px] pb-0 flex flex-col items-center">
      {/* Testimonial */}
      <div className="w-full max-w-[1100px] mx-auto text-center mb-[60px] relative flex flex-col items-center justify-center">
        <h2 className="text-[36px] font-extrabold text-[#17445A] mb-14 tracking-tight">Testimonial</h2>
        {/* Large quotes left/right */}
        <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[72px] text-[#bcd6e6] font-extrabold select-none">“</span>
        <span className="hidden md:block absolute right-0 bottom-1 -translate-y-1/2 text-[72px] text-[#bcd6e6] font-extrabold select-none">”</span>
        {/* Stars */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-[#FFD600] text-[28px] tracking-widest">
            {Array(5).fill(0).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </span>
        </div>
        {/* Testimonial text */}
        <p className="text-[#466178] text-[16px] max-w-[900px] mx-auto mb-4 leading-snug font-medium">
          Let experts handle your technical interviews while your team focuses on building. Let experts handle your technical interviews while your team focuses on building. Let experts handle your technical interviews while your team focuses on building.
        </p>
        {/* Name */}
        <div className="font-extrabold text-[#17445A] text-[18px] mt-2">
          David Smith <span className="font-normal">| Marketing Director</span>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="w-full flex justify-center relative z-10 mt-[90px]">
        <div className="w-[92%] max-w-[1200px] rounded-[24px] flex items-center px-0 py-0 relative overflow-visible min-h-[320px]" style={{ background: 'linear-gradient(90deg, #006080 0%, #0e3c54 100%)' }}>
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center pl-[60px] z-10">
            <h3 className="text-white text-[32px] font-bold mb-7 leading-tight max-w-[420px]">Ready to transform your technical hiring</h3>
            <button className="bg-white text-[#006C86] px-7 py-2 rounded-full font-bold text-[14px] shadow-none hover:bg-[#e6f2f2] transition-colors w-[170px] text-left">
              Request Demo
            </button>
          </div>
          {/* Right: Illustration Layered */}
          <div className="flex-1 relative flex items-end justify-end h-full min-h-[320px]">
            {/* Map background layers */}
            <Image src="/map.png" alt="Map" width={320} height={220} className="absolute top-[40px] right-[280px] z-0" style={{ objectFit: 'contain' }} />
            <Image src="/map-2.png" alt="Map 2" width={120} height={120} className="absolute top-[120px] right-[60px] z-0" style={{ objectFit: 'contain' }} />
            <Image src="/map-3.png" alt="Map 3" width={80} height={80} className="absolute top-[200px] right-[150px] z-0" style={{ objectFit: 'contain' }} />
            {/* Person - shifted more to center and hair popping out */}
            <Image src="/female-interviewer.png" alt="Interviewer" width={280} height={340} className="absolute bottom-0 right-[180px] z-20" style={{ objectFit: 'contain', overflow: 'visible' }} />
            {/* Pins - arranged as per design */}
            <Image src="/pin.png" alt="Pin" width={38} height={38} className="absolute top-[90px] right-[500px] z-30" />
            <Image src="/pin.png" alt="Pin" width={32} height={32} className="absolute top-[120px] right-[120px] z-30" />
            <Image src="/pin.png" alt="Pin" width={28} height={28} className="absolute top-[220px] right-[160px] z-30" />
          </div>
        </div>
      </div>

      {/* Footer - Pixel-perfect and Typography Matched */}
      <footer className="w-full bg-[#eaf3f6] pt-[100px] pb-[30px] flex flex-col items-center mt-0">
        <div className="w-[96%] max-w-[1200px] flex flex-col md:flex-row justify-between items-start gap-10 md:gap-10 lg:gap-20 xl:gap-28">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start min-w-[180px] w-full md:w-auto mb-8 md:mb-0">
            <div className="mb-2">
              <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={180} height={58} />
            </div>
            <p className="text-[#7a8a99] text-[15px] leading-[1.3] font-medium max-w-[220px] mt-2" style={{fontFamily:'Lexend, sans-serif'}}>
              Let experts handle your technical interviews while your team focuses on building, let experts
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-20 lg:gap-20 w-full justify-between">
            <div>
              <div className="font-bold text-[#05445E] mb-2 text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Product</div>
              <ul className="text-[#263238] text-[15px] space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
                <li>Why Mapkie</li>
                <li>Platform</li>
                <li>Services</li>
                <li>Testimonial</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-[#05445E] mb-2 text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Resources</div>
              <ul className="text-[#263238] text-[15px] space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
                <li>Blog</li>
                <li>Help center</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-[#05445E] mb-2 text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Other link</div>
              <ul className="text-[#263238] text-[15px] space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
                <li>Privacy</li>
                <li>Terms of Services</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex flex-row gap-4 mt-8 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <Image src="/social-icons.png" alt="Social Icons" width={200} height={44} />
          </div>
        </div>
      </footer>
    </section>
  );
}