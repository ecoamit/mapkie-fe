import Navbar from "../Navbar";
import ContactUs from "../ContactUs";
import TestimonialSection from "../TestimonialSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f6f8fa" }}>
      <Navbar />
      <ContactUs />
    <TestimonialSection />
    </div>
  );
}
