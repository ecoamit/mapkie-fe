import Navbar from "../Navbar";
import Trusted from "../Trusted";
import TestimonialSection from "../TestimonialSection";
import FormSection from "../FormSection";
import PropTypes from "prop-types";

export const metadata = {
  title: "Referral | Mapkie",
  description: "Get referred by trusted professionals. Share your details and we’ll reach out soon.",
};

export default async function ReferralPage({ searchParams }) {
  // In Next.js 15 searchParams can be a Promise-like; await if necessary
  const params = await searchParams;
  const type = params?.type;
  let variant = 'referral';
  if (type === 'resume') variant = 'resume';
  else if (type === 'mock') variant = 'mock';
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FormSection variant={variant} />
      <Trusted />
      <TestimonialSection />
    </div>
  );
}

ReferralPage.propTypes = {
  searchParams: PropTypes.object,
};
