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

  // Reusable form content
  const formInner = (
    <>
      {submitted ? (
        <div className="text-center py-6">
          <div
            className="mx-auto mb-5 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "#1D6C86" }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-[#1D6C86] text-[20px] md:text-[22px] font-semibold">
            Thanks! We’ll be in touch shortly.
          </h3>
          <p className="text-[#496276] text-[13px] md:text-[14px] mt-1">
            Your message has been received.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <h3 className="cu-form-heading">Let’s Talk</h3>
            <p className="cu-form-desc">
              Get in touch with us and we will provide a solution that meets your exact requirements
            </p>
          </div>
          <div>
            <label htmlFor="cu_fullName" className="cu-label mb-1.5">
              Full Name
            </label>
            <input
              id="cu_fullName"
              type="text"
              placeholder="Enter Your Full Name"
              required
              className="w-full h-11 rounded-md border border-[#D5E2EA] bg-white px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86] transition"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cu_email" className="cu-label mb-1.5">
                Email
              </label>
              <input
                id="cu_email"
                type="email"
                placeholder="Enter Email"
                required
                className="w-full h-11 rounded-md border border-[#D5E2EA] bg-white px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86] transition"
              />
            </div>
            <div>
              <label htmlFor="cu_phone" className="cu-label mb-1.5">
                Phone number
              </label>
              <input
                id="cu_phone"
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full h-11 rounded-md border border-[#D5E2EA] bg-white px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86] transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="cu_message" className="cu-label mb-1.5">
              Message
            </label>
            <textarea
              id="cu_message"
              rows={5}
              placeholder="Enter Message"
              className="w-full rounded-md border border-[#D5E2EA] bg-white px-3.5 py-2 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86] transition resize-none"
            />
          </div>
          <div className="pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-[52px] md:h-[54px] rounded-full text-white text-[14px] font-medium disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D6C86]"
              style={{
                background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
              }}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </>
  );

  return (
    <section className="relative dotted-right-half w-full bg-[#E8F0F3] pb-16">
      <div className="relative mx-auto max-w-[1280px] px-3 sm:px-5 lg:px-6 pt-10 md:pt-14">
        {/* Mobile layout (stacked) */}
        <div className="lg:hidden flex flex-col gap-10">
          <div>
            <h2 className="contact-heading-44">Contact Us</h2>
            <p className="contact-subtext-20 mt-4">
              Let’s connect and create meaningful opportunities together. Whether you’re growing your
              team or exploring your next career move—we’re just a message away.
            </p>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-[0_6px_18px_rgba(6,31,52,0.08)] bg-white/60 backdrop-blur-sm">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/contact-us.svg"
                alt="Contact illustration"
                fill
                className="object-contain p-3"
                priority
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(6,31,52,0.10)] border border-[#E0E8ED] px-5 py-6">
              {formInner}
            </div>
          </div>
        </div>

        {/* Desktop / large layout (unchanged logic, only wrapped in visibility class) */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left section: heading + image */}
          <div
            className="order-2 lg:order-1 flex flex-col lg:gap-[50px] gap-10"
            style={{ width: "100%", maxWidth: "496px", height: "579px" }}
          >
            <div>
              <h2 className="contact-heading-44">Contact Us</h2>
              <p
                className="contact-subtext-20 mt-4"
                style={{ maxWidth: "496px" }}
              >
                Let’s connect and create meaningful opportunities together. Whether you’re growing your
                team or exploring your next career move—we’re just a message away.
              </p>
            </div>
            <div
              className="w-full aspect-[4/3] overflow-hidden shadow-[0_6px_18px_rgba(6,31,52,0.08)] flex items-center justify-center rounded-xl"
              style={{ maxWidth: "496px" }}
            >
              <Image
                src="/contact-us.svg"
                alt="Contact illustration"
                width={800}
                height={600}
                className="!block !mx-auto !w-full !h-full !object-contain"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
                priority
              />
            </div>
          </div>
          {/* Form card */}
            <div
              className="order-1 lg:order-2 relative flex"
              style={{ width: "683px", maxWidth: "683px", height: "589px" }}
            >
              <div className="pointer-events-none absolute -left-6 -top-6 opacity-80 hidden sm:block">
                <Image src="/rectangle.png" alt="" width={280} height={200} />
              </div>
              <div
                className="relative bg-white rounded-2xl shadow-[0_14px_40px_rgba(6,31,52,0.10)] border border-[#E0E8ED] px-5 sm:px-6 md:px-7 lg:px-10 py-6 md:py-8 w-full"
                style={{ height: "100%" }}
              >
                {formInner}
              </div>
            </div>
        </div>

        {/* Info cards row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-10 px-1">
          <div className="bg-white rounded-xl border border-[#E6ECF0] shadow-[0_6px_18px_rgba(6,31,52,0.08)] p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#0D5F78] flex items-center justify-center shadow-sm mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.09a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-[#496276] text-[12px] uppercase tracking-wide font-medium">
              Phone Number
            </p>
            <p className="mt-1 text-[#0D2A3F] text-[15px] font-semibold">+9563258740</p>
          </div>
          <div className="bg-white rounded-xl border border-[#E6ECF0] shadow-[0_6px_18px_rgba(6,31,52,0.08)] p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#0D5F78] flex items-center justify-center shadow-sm mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <p className="text-[#496276] text-[12px] uppercase tracking-wide font-medium">
              Location
            </p>
            <p className="mt-1 text-[#0D2A3F] text-[15px] font-semibold leading-snug">
              Theatre Royal, Catherine Street
              <br /> ,Drury Lane
            </p>
          </div>
            <div className="bg-white rounded-xl border border-[#E6ECF0] shadow-[0_6px_18px_rgba(6,31,52,0.08)] p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0D5F78] flex items-center justify-center shadow-sm mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <p className="text-[#496276] text-[12px] uppercase tracking-wide font-medium">
                Email
              </p>
              <p className="mt-1 text-[#0D2A3F] text-[15px] font-semibold">
                support@mapkie.com
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
