import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import Image from "next/image";
import FeaturesSection from "../FeaturesSection";
import BenefitsSection from "../BenefitsSection";
import Trusted from "../Trusted";
import ResultsSection from "../ResultsSection";
import TestimonialSection from "../TestimonialSection";
import EnterpriseWorkflow from "../EnterpriseWorkflow";

const enterpriseContent = {
  headline: (
    <>
      Bridge the Gap Between
      <br />
      <span className="font-bold text-[#1D6C86]">Screening</span> and <span className="font-bold text-[#1D6C86]">Hiring</span>
    </>
  ),
  subheadline: "Mapkie empowers companies to build stronger teams and individuals to reach their potential.",
  buttonText: "Request Demo"
};

export default function EnterprisePage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#f6f8fa",
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#006C86",
      }}
    >
      <Navbar />
     <div className="relative h-[100vh] max-h-[100vh] flex flex-col">
             {/* Hero Section with only text content */}
             <div className="relative z-10 flex-1 flex items-start pt-20" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
               <HeroSection 
                 showTabs={false}
                 content={enterpriseContent}
                 hideImageSection={true}
                 className="bg-transparent w-full h-full flex items-start py-0"
               />
             </div>
             
             {/* Independent Hero Image Section - Positioned absolutely within hero container */}
             <div className="absolute top-0 left-0 right-0 bottom-0 overflow-visible pointer-events-none">
               {/* Main Hero Image - Woman with Laptop - Positioned to show full image */}
               <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[315px] h-[266px] sm:w-[405px] sm:h-[341px] md:w-[540px] md:h-[456px] lg:w-[675px] lg:h-[570px] xl:w-[700px] xl:h-[639px]">
                 <Image 
                   src="/candidate-hero.svg" 
                   alt="Woman with laptop" 
                   width={700} 
                   height={639} 
                   className="w-full h-full object-contain"
                   priority 
                 />
               </div>
             </div>
           </div>
           {/* <EnterpriseWorkflow /> */}
           <Trusted />
           <FeaturesSection forceEnterprise />
           <BenefitsSection forceEnterprise />
            <ResultsSection />
            <TestimonialSection />
    </div>
  );
}
