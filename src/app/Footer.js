import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eaf3f6] pt-[140px] md:pt-[180px] pb-[30px] flex flex-col items-center mt-0">
      <div className="w-[96%] max-w-[1200px] flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 lg:gap-20 xl:gap-28 px-4 md:px-0">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start min-w-[180px] w-full md:w-auto mb-6 md:mb-0">
          <div className="mb-2">
            <Image src="/mapkie-logo.png" alt="Mapkie Logo" width={150} height={48} className="md:w-[180px] md:h-[58px]" />
          </div>
          <p className="text-[#7a8a99] text-sm md:text-[15px] leading-[1.3] font-medium max-w-[280px] md:max-w-[220px] mt-2 text-center md:text-left" style={{fontFamily:'Lexend, sans-serif'}}>
            Let experts handle your technical interviews while your team focuses on building
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-16 lg:gap-20 w-full justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold text-[#05445E] mb-3 text-base md:text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Product</div>
            <ul className="text-[#263238] text-sm md:text-[15px] space-y-2 md:space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
              <li>Why Mapkie</li>
              <li>Platform</li>
              <li>Services</li>
              <li>Testimonial</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <div className="font-bold text-[#05445E] mb-3 text-base md:text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Resources</div>
            <ul className="text-[#263238] text-sm md:text-[15px] space-y-2 md:space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
              <li>Blog</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <div className="font-bold text-[#05445E] mb-3 text-base md:text-[17px]" style={{fontFamily:'Lexend, sans-serif'}}>Other link</div>
            <ul className="text-[#263238] text-sm md:text-[15px] space-y-2 md:space-y-1 font-medium" style={{fontFamily:'Lexend, sans-serif'}}>
              <li>Privacy</li>
              <li>Terms of Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-row gap-4 mt-6 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <Image src="/social-icons.png" alt="Social Icons" width={160} height={36} />
        </div>
      </div>
    </footer>
  );
}
