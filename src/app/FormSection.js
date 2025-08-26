"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import PropTypes from "prop-types";

export default function FormSection({ variant = "referral" }) {
  const [submitted, setSubmitted] = useState(false);

  const cfg = useMemo(() => {
    const shared = {
      backdrop: (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hidden md:block absolute left-8 lg:left-16 top-[120px]">
            <Image src="/rectangle.png" alt="" width={220} height={380} className="opacity-70" priority />
          </div>
          <div className="hidden md:block absolute right-8 lg:right-16 top-[260px]">
            <Image src="/rectangle.png" alt="" width={220} height={380} className="opacity-70" priority />
          </div>
        </div>
      ),
    };

    const maps = {
      referral: {
        pageTitle: (
          <>
            Looking for a Referral? Our Team Will
            <br className="hidden sm:block" /> Reach Out Soon!
          </>
        ),
        pageSub: "Increase your chances of landing interviews through trusted employee referrals. Share your profile and we’ll help connect you with the right opportunities.",
        formTitle: "Referral Program Form",
        formSub: "Fill in the details below, our team will reach out to help you get started!",
        fieldsTop: [
          { key: "fullName", label: "Full Name", type: "text", placeholder: "Enter Your Full Name" },
          { key: "email", label: "Email", type: "email", placeholder: "Enter Your Email", col: 1 },
          { key: "phone", label: "Phone number", type: "tel", placeholder: "Enter Phone Number", col: 1 },
          { key: "position", label: "Position Applying For", type: "text", placeholder: "Specify the job title or role" },
        ],
        upload: true,
        extraFields: [
          { key: "jobId", label: "Job Id (Optional)", type: "text", placeholder: "Enter Job Id" },
        ],
      },
      resume: {
        pageTitle: (
          <>
            Want a Stronger Resume? Our Experts
            <br className="hidden sm:block" /> Will Contact You Soon!
          </>
        ),
        pageSub: "Stand out with a resume tailored by industry experts. Whether it’s your first job or your fifth, we’ll help make your resume recruiter-ready.",
        formTitle: "Better Resume Writing",
        formSub: "Fill in the details below, our team will reach out to help you get started.",
        fieldsTop: [
          { key: "fullName", label: "Full Name", type: "text", placeholder: "Enter Your Full Name" },
          { key: "email", label: "Email", type: "email", placeholder: "Enter Your Email", col: 1 },
          { key: "phone", label: "Phone number", type: "tel", placeholder: "Enter Phone Number (optional)", col: 1 },
          { key: "jobRole", label: "Job Role You’re Targeting", type: "text", placeholder: "Specify the job title or role you want your resume to be improved for" },
        ],
        upload: true,
        extraFields: [
          { key: "resumeLink", label: "Example Resume Link (Optional)", type: "url", placeholder: "Paste a link to a resume you like or want to model yours after" },
        ],
      },
      mock: {
        pageTitle: (
          <>
            Ace Your Interviews with
            <br className="hidden sm:block" /> Real-Time Practice
          </>
        ),
        pageSub: "Simulate real interview scenarios with expert interviewers. Get feedback, improve performance, and walk into your next interview with confidence.",
        formTitle: "Mock Interview",
        formSub: "Fill in the details below, our team will reach out to help you get started!",
        fieldsTop: [
          { key: "fullName", label: "Full Name", type: "text", placeholder: "Enter Your Full Name" },
          { key: "email", label: "Email", type: "email", placeholder: "Enter Your Email", col: 1 },
          { key: "phone", label: "Phone number (optional)", type: "tel", placeholder: "Enter Phone Number", col: 1 },
        ],
        upload: true,
        extraFields: [
          { key: "company", label: "Company Name", type: "text", placeholder: "Company You’re Applying To" },
          { key: "position", label: "Position Applying For", type: "text", placeholder: "Specify the job title or role" },
          { key: "jobPosting", label: "Job Posting Link (optional)", type: "url", placeholder: "Paste the URL of the job listing" },
          { key: "interviewType", label: "Interview Type (optional)", type: "select", options: ["DSA / Algorithm", "System Design", "Language / Framework", "Behavioral"], col: 1 },
          { key: "experience", label: "Experience Level (optional)", type: "select", options: ["0-1 years", "1-3 years", "3-5 years", "5+ years"], col: 1 },
        ],
      },
    };

    return { ...shared, ...(maps[variant] || maps.referral) };
  }, [variant]);

  return (
    <section className="relative isolate w-full min-h-[calc(100svh-80px)] overflow-hidden bg-[linear-gradient(to_bottom,#E8F0F3_0%,#E8F0F3_56%,#ffffff_56%,#ffffff_100%)]">
      {cfg.backdrop}

      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 min-h-[calc(100svh-80px)] flex flex-col items-center justify-center">
        {submitted ? (
          <div className="relative w-full max-w-2xl">
            <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 opacity-80">
              <Image src="/rectangle.png" alt="" width={520} height={160} />
            </div>
            <div className="relative bg-white rounded-2xl shadow-[0_14px_40px_rgba(6,31,52,0.10)] border border-[#E6ECF0] px-6 sm:px-10 py-10 text-center">
              <div className="mx-auto mb-6 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#1D6C86" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-[#1D6C86] text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-2">Form Submitted Successfully!</h3>
              <p className="text-[#0D2A3F] text-[14px] md:text-[15px] font-semibold">Thank you for reaching out to Mapkie.</p>
              <p className="text-[#445B6B] text-[13px] md:text-[14px] mt-1">Our team has received your details and will get in touch with you shortly.</p>
              <div className="mt-8">
                <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-[14px] font-medium shadow-lg" style={{
                  background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                }}>
                  Go Back to Home
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-80">
              <Image src="/rectangle.png" alt="" width={520} height={160} />
            </div>
          </div>
        ) : (
          <>
            <div className="text-center max-w-3xl mx-auto">
              <h2
                className="font-bold mb-6 leading-tight text-3xl md:text-4xl lg:text-[38px]"
                style={{
                  background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {cfg.pageTitle}
              </h2>
              <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#496276] leading-relaxed">{cfg.pageSub}</p>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10 mx-auto max-w-3xl w-full">
              <form
                className="bg-white rounded-2xl shadow-[0_14px_40px_rgba(6,31,52,0.10)] border border-[#E6ECF0] px-5 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 max-h-[70vh] overflow-y-auto md:max-h-none"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0D2A3F]">{cfg.formTitle}</h3>
                  <p className="mt-1 text-[12px] md:text-[13px] text-[#5C7285]">{cfg.formSub}</p>
                </div>

                {/* Full-width field */}
                <div className="mt-5">
                  <label htmlFor="fullName" className="block text-[12px] text-[#39586A] mb-1.5">Full Name</label>
                  <input type="text" id="fullName" placeholder="Enter Your Full Name" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                </div>

                {/* Grid row for email + phone if present */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[12px] text-[#39586A] mb-1.5">Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[12px] text-[#39586A] mb-1.5">{variant === "mock" ? "Phone number (optional)" : "Phone number"}</label>
                    <input type="tel" id="phone" placeholder={variant === "mock" ? "Enter Phone Number (optional)" : "Enter Phone Number"} className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>
                </div>

                {/* Variant specific top-after fields */}
                {variant !== "mock" && (
                  <div className="mt-4">
                    <label htmlFor={variant === "resume" ? "jobRole" : "position"} className="block text-[12px] text-[#39586A] mb-1.5">{variant === "resume" ? "Job Role You’re Targeting" : "Position Applying For"}</label>
                    <input type="text" id={variant === "resume" ? "jobRole" : "position"} placeholder={variant === "resume" ? "Specify the job title or role you want your resume to be improved for" : "Specify the job title or role"} className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>
                )}

                {variant === "mock" && (
                  <>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-[12px] text-[#39586A] mb-1.5">Company Name</label>
                        <input type="text" id="company" placeholder="Company You’re Applying To" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-[12px] text-[#39586A] mb-1.5">Position Applying For</label>
                        <input type="text" id="position" placeholder="Specify the job title or role" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="jobPosting" className="block text-[12px] text-[#39586A] mb-1.5">Job Posting Link (optional)</label>
                      <input type="url" id="jobPosting" placeholder="Paste the URL of the job listing" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="interviewType" className="block text-[12px] text-[#39586A] mb-1.5">Interview Type (optional)</label>
                        <select id="interviewType" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] text-[#445B6B] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]">
                          <option>Select Interview Type</option>
                          {cfg.extraFields?.find(f=>f.key==='interviewType')?.options?.map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-[12px] text-[#39586A] mb-1.5">Experience Level (optional)</label>
                        <select id="experience" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] text-[#445B6B] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]">
                          <option>Select Experience Level</option>
                          {cfg.extraFields?.find(f=>f.key==='experience')?.options?.map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Upload */}
                {cfg.upload && (
                  <div className="mt-4">
                    <label htmlFor="resume" className="block text-[12px] text-[#39586A] mb-1.5">Attach Resume (PDF/DOC)</label>
                    <div className="flex items-center gap-3">
                      <label htmlFor="resume" className="flex-1 group cursor-pointer" aria-label="Upload resume">
                        <input id="resume" type="file" className="hidden" />
                        <div className="flex items-center gap-3 h-[54px] rounded-md border border-dashed border-[#C8D7E0] px-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F8FA] border border-[#E6EEF3]">
                            <Image src="/file.svg" alt="file" width={18} height={18} />
                          </div>
                          <div className="flex-1">
                            <p className="text-[13px] text-[#577287] leading-tight">Drag & Drop files here or upload</p>
                            <p className="text-[11px] text-[#8FA4B1] leading-tight">File Size below 20MB</p>
                          </div>
                        </div>
                      </label>
                      <button
                        type="button"
                        className="shrink-0 h-[54px] px-6 rounded-full text-[14px] font-medium focus:outline-none"
                        style={{
                          border: "1px solid transparent",
                          background:
                            "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%) border-box",
                          color: "#006C86",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                        }}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                )}

                {/* Variant extras at end */}
                {variant === "referral" && (
                  <div className="mt-4">
                    <label htmlFor="jobId" className="block text-[12px] text-[#39586A] mb-1.5">Job Id (Optional)</label>
                    <input type="text" id="jobId" placeholder="Enter Job Id" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>
                )}

                {variant === "resume" && (
                  <div className="mt-4">
                    <label htmlFor="resumeLink" className="block text-[12px] text-[#39586A] mb-1.5">Example Resume Link (Optional)</label>
                    <input type="url" id="resumeLink" placeholder="Paste a link to a resume you like or want to model yours after" className="w-full h-11 rounded-md border border-[#D5E2EA] px-3.5 text-[14px] placeholder:text-[#9CB0BD] focus:outline-none focus:ring-2 focus:ring-[#1D6C86]/30 focus:border-[#1D6C86]" />
                  </div>
                )}

                {/* Consent */}
                <p className="mt-5 text-[11px] text-[#6C8494]">
                  By clicking Submit below you confirm that you have read and agree to <span className="text-[#1D6C86] underline">Mapkie Privacy Policy</span>
                </p>

                <div className="mt-6">
                  <button type="submit" className="w-full h-[52px] md:h-[54px] rounded-full text-white text-[14px] font-medium" style={{
                    background: "linear-gradient(99.23deg, #006C86 0%, #061F34 114.48%)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                  }}>Submit</button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

FormSection.propTypes = {
  variant: PropTypes.oneOf(["referral", "resume", "mock"]),
};
