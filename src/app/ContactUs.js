"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Fake async to give feedback; integrate API later
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      className="relative isolate w-full min-h-[calc(100svh-80px)] overflow-hidden bg-[linear-gradient(180deg,#E8F0F3_0%,#E8F0F3_56%,#ffffff_56%,#ffffff_100%)]"
    >
      {/* Subtle dotted matrix background to the right */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hidden md:block absolute right-[-40px] top-[40px] opacity-60">
          <Image src="/dotted-bg.png" alt="" width={260} height={420} priority />
        </div>
        <div className="hidden md:block absolute right-[120px] bottom-[40px] opacity-60">
          <Image src="/dotted-bg.png" alt="" width={260} height={420} priority />
        </div>
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left copy block */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[#0D2A3F] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-[#496276] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[540px]">
              Let’s connect and create meaningful opportunities together. Whether you’re
              growing your team or exploring your next career move—we’re just a message away.
            </p>

            <div className="mt-8 space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-[#E6ECF0] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D2A3F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.09a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[#0D2A3F] text-[15px] md:text-[16px] font-medium">9563258740</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-[#E6ECF0] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D2A3F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </div>
                <span className="text-[#0D2A3F] text-[15px] md:text-[16px] font-medium">support@mapkie.com</span>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="order-1 lg:order-2 relative">
            {/* behind-card dots for depth */}
            <div className="pointer-events-none absolute -left-6 -top-6 opacity-80 hidden sm:block">
              <Image src="/rectangle.png" alt="" width={280} height={200} />
            </div>
            <div className="relative bg-white rounded-2xl shadow-[0_14px_40px_rgba(6,31,52,0.10)] border border-[#E6ECF0] px-5 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-5 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#1D6C86' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[#1D6C86] text-[20px] md:text-[22px] font-semibold">Thanks! We’ll be in touch shortly.</h3>
                  <p className="text-[#496276] text-[13px] md:text-[14px] mt-1">Your message has been received.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0D2A3F]">Let’s Talk</h3>
                    <p className="mt-1 text-[12px] md:text-[13px] text-[#5C7285] max-w-[520px]">
                      Get in touch with us and we will provide a solution that meets your exact requirements
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="mt-5">
                    <label htmlFor="cu_fullName" className="block text-[12px] text-[#39586A] mb-1.5">Full Name</label>
                    <input id="cu_fullName" type="text" placeholder="Enter Your Full Name" required className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>

                  {/* Email + Phone */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cu_email" className="block text-[12px] text-[#39586A] mb-1.5">Email</label>
                      <input id="cu_email" type="email" placeholder="Enter Email" required className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                    </div>
                    <div>
                      <label htmlFor="cu_phone" className="block text-[12px] text-[#39586A] mb-1.5">Phone number</label>
                      <input id="cu_phone" type="tel" placeholder="Enter Phone Number" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label htmlFor="cu_message" className="block text-[12px] text-[#39586A] mb-1.5">Message</label>
                    <textarea id="cu_message" rows={5} placeholder="Enter Message" className="w-full rounded-md border border-[#D5E2EA] px-3.5 py-2 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>

                  {/* Submit */}
                  <div className="mt-6">
                    <button type="submit" disabled={submitting} className="w-full h-[52px] md:h-[54px] rounded-full text-white text-[14px] font-medium disabled:opacity-70" style={{
                      background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                    }}>{submitting ? "Submitting..." : "Submit"}</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
