"use client";
import PropTypes from "prop-types";
import Testimonial from "./Testimonial";
import CTABanner from "./CTABanner";
import Footer from "./Footer";

export default function TestimonialSection({ showIllustration = true }) {
  return (
    <section className="w-full bg-white pt-[60px] pb-0 flex flex-col items-center px-4 md:px-0">
      <Testimonial />
      <CTABanner showIllustration={showIllustration} />

  <Footer />
    </section>
  );
}

TestimonialSection.propTypes = {
  showIllustration: PropTypes.bool,
};