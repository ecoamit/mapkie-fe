// No images used in this snippet

export default function Testimonial() {
  return (
    <div className="w-full max-w-[1100px] mx-auto text-center mb-[60px] relative flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-[36px] font-extrabold text-[#17445A] mb-8 md:mb-14 tracking-tight">Testimonial</h2>
      {/* Large quotes left/right - hidden on mobile */}
      <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[72px] text-[#bcd6e6] font-extrabold select-none">&ldquo;</span>
      <span className="hidden md:block absolute right-0 bottom-1 -translate-y-1/2 text-[72px] text-[#bcd6e6] font-extrabold select-none">&rdquo;</span>
      {/* Stars */}
      <div className="flex items-center justify-center mb-6">
        <span className="text-[#FFD600] text-2xl md:text-[28px] tracking-widest">
          {['s1','s2','s3','s4','s5'].map((id) => (
            <span key={id}>★</span>
          ))}
        </span>
      </div>
      {/* Testimonial text */}
      <p className="text-[#466178] text-sm md:text-[16px] max-w-[900px] mx-auto mb-4 leading-snug font-medium px-4 md:px-0">
        Let experts handle your technical interviews while your team focuses on building. Let experts handle your technical interviews while your team focuses on building. Let experts handle your technical interviews while your team focuses on building.
      </p>
      {/* Name */}
      <div className="font-extrabold text-[#17445A] text-base md:text-[18px] mt-2">
        David Smith <span className="font-normal">| Marketing Director</span>
      </div>
    </div>
  );
}

Testimonial.propTypes = {};
