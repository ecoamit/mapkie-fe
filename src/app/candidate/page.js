import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import BenefitsSection from "../BenefitsSection";
import ResultsSection from "../ResultsSection";
import TestimonialSection from "../TestimonialSection";
import Image from "next/image";
import Link from "next/link";

const candidateBenefits = [
	{
		img: "/candidate-benefit-1.svg",
		title: "Resume That Stands Out",
		desc: "Get certified technical interview evaluations that add real value to your resume.",
	},
	{
		img: "/candidate-benefit-2.svg",
		title: "Real-Time Feedback",
		desc: "Receive instant expert insights to help improve your performance after every interview.",
	},
	{
		img: "/candidate-benefit-3.svg",
		title: "Confidence Building",
		desc: "Mock interviews in a professional setting help candidates build confidence for real employer interviews.",
	},
];

const candidateContent = {
	headline: (
		<>
			<span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">
				All-in-One
			</span>
			<span className="hero-headline-44">Platform to <br/>Showcase Your </span>
			<span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">
				Skills
			</span>
			<span className="hero-headline-44"> and <br/></span>
			<span className="hero-headline-44 hero-headline-44-strong text-[#061F34]">
				Stand Out
			</span>
			<span className="hero-headline-44"> to Top Companies</span>
		</>
	),
	subheadline:
		"Get step-by-step guidance from industry interviewers to craft a resume.",
	buttonText: "Explore More",
};

export default function CandidatePage() {
	return (
		<div
			className="min-h-screen relative overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #E8F4F8 0%, #F0F8FA 50%, #E0F2F5 100%)",
				fontFamily: "Lexend, sans-serif",
				fontWeight: 500,
				fontStyle: "normal",
				fontSize: "16px",
				lineHeight: "100%",
				letterSpacing: "0%",
				color: "#006C86",
			}}
		>
			<Navbar />

			{/* Hero Section */}
			<div className="relative">
                {/* Mobile Hero (reworked to show full background image */}
                <div className="md:hidden bg-no-repeat"
                    style={{
                        backgroundImage: "url('/mobile-candidate-herobg.svg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center 140px",
                        minHeight: "clamp(880px,115vh,1080px)",
                        paddingBottom: "6rem"
                    }}
                >
                    <div className="px-6 pt-24 pb-0 max-w-[430px] mx-auto text-center">
                        <h1
                            className="font-bold text-[#061F34]"
                            style={{
                                fontFamily: "Lexend, sans-serif",
                                fontSize: "32px",            // changed from clamp(...)
                                lineHeight: "1.18",
                                margin: 0
                            }}
                        >
                            {candidateContent.headline}
                        </h1>
                        <p
                            className="mt-5"
                            style={{
                                fontFamily: "Lexend, sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",            // changed from clamp(...)
                                lineHeight: "150%",
                                color: "#1E3A4A",
                                marginBottom: 0
                            }}
                        >
                            {candidateContent.subheadline}
                        </p>
                        <div className="mt-7">
                            <a
                                href="#candidate-benefits"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006C86]"
                                style={{
                                    minHeight: "48px",
                                    background: "linear-gradient(99.23deg,#006C86 0%,#061F34 114.48%)",
                                    boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
                                    fontFamily: "Lexend, sans-serif",
                                    letterSpacing: "0.4px"
                                }}
                            >
                                {candidateContent.buttonText}
                            </a>
                        </div>
                        <div style={{ height: "48px" }} />
                    </div>
                </div>

                {/* DESKTOP / TABLET (restored layout) */}
               <div className="relative flex flex-col min-h-[calc(100svh-80px)]">
					  <div className="relative z-10 flex-1 flex items-start pt-20" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
						<HeroSection 
						  showTabs={false}
						  content={candidateContent}
						  hideImageSection={true}
						  className="bg-transparent w-full h-full flex items-start py-0"
						/>
					  </div>
					  {/* Positioned hero artwork per spec (layered above wave but below text) */}
					  <div className="pointer-events-none absolute inset-0">
						<div
						  aria-hidden="true"
						  style={{
							position:'absolute',
							width:'821px',
							height:'709px',
							top:'0px',
							left:'848.48px',
							opacity:1,
							zIndex:99,
							backgroundImage:"url('/candidate-hero.svg')",
							backgroundRepeat:'no-repeat',
							backgroundSize:'contain',
							backgroundPosition:'center',
						  }}
						/>
					  </div>
					</div>
            </div>
            {/* End Hero Section */}

			{/* Candidate Benefits */}
			<div
				id="candidate-benefits"
				className="relative z-10 py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
			>
				<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-4">
					<div className="text-center mb-12 sm:mb-16">
						<h2
							className="heading-42-gradient mb-6 mx-auto"
							style={{ maxWidth: "942px" }}
						>
							Why Most Candidates Get Stuck — And How Mapkie Helps You Break
							Through
						</h2>
						<p
							className="mx-auto mb-0"
							style={{
								fontFamily: "Lexend, sans-serif",
								fontWeight: 400,
								fontSize: "clamp(16px,3.6vw,20px)",
								textAlign: "center",
								color: "#586977",
								maxWidth: "940px",
								lineHeight: "150%",
							}}
						>
							Sharpen your skills, reduce anxiety, and prepare for real technical
							interviews with expert-led mock sessions.
						</p>
					</div>

					<div className="grid gap-6 sm:gap-8 md:grid-cols-3 justify-items-stretch">
						{/* Card 1 */}
						<div className="candidate-card h-full">
							<div
								className="candidate-card-icon p-0"
								style={{ background: "transparent" }}
							>
								<Image
									src="/referral-icon.svg"
									alt="Referral icon"
									width={50}
									height={50}
									className="w-[50px] h-[50px] object-contain"
								/>
							</div>
							<h3 className="candidate-card-title">Referrals</h3>
							<p className="candidate-card-text">
								Access hidden opportunities at top companies through our trusted
								interviewer community.
							</p>
							<div className="flex justify-start mt-auto">
								<Link
									href="/referral"
									className="btn-request-demo text-sm"
								>
									Find Reference
								</Link>
							</div>
						</div>

						{/* Card 2 */}
						<div className="candidate-card h-full">
							<div
								className="candidate-card-icon p-0"
								style={{ background: "transparent" }}
							>
								<Image
									src="/resume-writing-icon.svg"
									alt="Resume writing icon"
									width={50}
									height={50}
									className="w-[50px] h-[50px] object-contain"
								/>
							</div>
							<h3 className="candidate-card-title">Better Resume Writing</h3>
							<p className="candidate-card-text">
								Your resume is guided by experienced professionals — not auto-filled
								by generic AI
							</p>
							<div className="flex justify-start mt-auto">
								<Link
									href="/referral?type=resume"
									className="btn-request-demo text-sm"
								>
									Create Resume
								</Link>
							</div>
						</div>

						{/* Card 3 */}
						<div className="candidate-card h-full">
							<div
								className="candidate-card-icon p-0"
								style={{ background: "transparent" }}
							>
								<Image
									src="/mock-interview-icon.svg"
									alt="Mock interview icon"
									width={50}
									height={50}
									className="w-[50px] h-[50px] object-contain"
								/>
							</div>
							<h3 className="candidate-card-title">Mock Interviews</h3>
							<p className="candidate-card-text">
								Every session is conducted by professionals who have interviewed
								candidates at top firms
							</p>
							<div className="flex justify-start mt-auto">
								<Link
									href="/referral?type=mock"
									className="btn-request-demo text-sm"
								>
									Practice Daily
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Feature Sections Wrapper */}
			<div className="relative z-10 bg-[#E8F0F3] pt-20 sm:pt-24">
				<div className="space-y-8 sm:space-y-10">
					{/* Section Header */}
					<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0">
						<div className="text-center mb-12 sm:mb-16">
							<h2
								className="heading-42-gradient mb-6 mx-auto"
								style={{ maxWidth: "942px" }}
							>
								Everything You Need to Get Hired —<br className="hidden sm:block" />
								All in One Platform
							</h2>
							<p
								className="mx-auto mb-0"
								style={{
									fontFamily: "Lexend, sans-serif",
									fontWeight: 400,
									fontSize: "clamp(16px,3.6vw,20px)",
									textAlign: "center",
									color: "#586977",
									maxWidth: "940px",
									lineHeight: "150%",
								}}
							>
								Sharpen your skills, reduce anxiety, and prepare for real technical
								interviews with expert-led mock sessions.
							</p>
						</div>
					</div>

					{/* Feature 1 */}
					<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0">
						<div className="feature-layout flex flex-col lg:flex-row items-center gap-10 lg:gap-[200px]">
							<div className="w-full flex justify-center lg:justify-start">
								<Image
									src="/candidate-feature1.svg"
									alt="Trusted referrals illustration"
									width={542}
									height={408}
									className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[542px] h-auto object-contain"
									priority
									sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 542px"
								/>
							</div>
							<div className="feature-content max-w-[620px]">
								<h3 className="feature-title">
									Trusted Referrals — Get Noticed by the Right Companies
								</h3>
								<p className="feature-desc">
									Mapkie connects you with interviewers who&apos;ve assessed your
									skills. Their trusted referrals give your profile credibility and
									visibility.
								</p>
								<div className="feature-points">
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Referrals by professionals who&apos;ve interviewed and
											assessed you
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Get referred by trusted professionals in your field
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Boost your visibility and credibility for serious roles
										</p>
									</div>
								</div>
								<div className="mt-8">
									<Link
										href="/contact"
										className="btn-request-demo text-sm px-8"
									>
										Contact Us
									</Link>
								</div>
                                <div className="mt-12 sm:mt-0" aria-hidden="true" />
							</div>
						</div>
					</div>

					{/* Feature 2 (reverse) */}
					<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0">
						<div className="feature-layout flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-[200px]">
							<div className="w-full flex justify-center lg:justify-start">
								<Image
									src="/candidate-feature2.svg"
									alt="Resume building illustration"
									width={542}
									height={408}
									className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[542px] h-auto object-contain"
									priority
									sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 542px"
								/>
							</div>
							<div className="feature-content max-w-[620px]">
								<h3 className="feature-title">
									Resume Build with Expert Guidance
								</h3>
								<p className="feature-desc">
									Mapkie helps job seekers create, polish, and optimize resumes to
									help you craft a resume that reflects your true potential.
								</p>
								<div className="feature-points">
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Tailored, personalized, section support from experienced
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											ATS-friendly formatting with role-specific language
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Real feedback to refine tone, structure, and impact
										</p>
									</div>
								</div>
								<div className="mt-8">
									<Link
										href="/contact"
										className="btn-request-demo text-sm px-8"
									>
										Contact Us
									</Link>
								</div>
                                <div className="mt-12 sm:mt-0" aria-hidden="true" />
							</div>
						</div>
					</div>

					{/* Feature 3 */}
					<div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-0">
						<div className="feature-layout flex flex-col lg:flex-row items-center gap-10 lg:gap-[200px]">
							<div className="w-full flex justify-center lg:justify-start">
								<Image
									src="/candidate-feature3.svg"
									alt="Mock interview illustration"
									width={542}
									height={408}
									className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[542px] h-auto object-contain"
									priority
									sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 542px"
								/>
							</div>
							<div className="feature-content max-w-[620px]">
								<h3 className="feature-title">
									Mock Interviews — Practice with Experts
								</h3>
								<p className="feature-desc">
									You work in confidential, practiced, and ready to handle live
									questions without the stress of being unprepared.
								</p>
								<div className="feature-points">
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Practice real interview formats in a low-stress setting
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Receive expert feedback on strengths and improvement areas
										</p>
									</div>
									<div className="feature-point">
										<div className="feature-point-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												strokeWidth="2"
											>
												<polyline points="20,6 9,17 4,12" />
											</svg>
										</div>
										<p className="feature-point-text">
											Be better prepared for coding and behavioral questions
										</p>
									</div>
								</div>
								<div className="mt-8">
									<Link
										href="/contact"
										className="btn-request-demo text-sm px-8"
									>
										Contact Us
									</Link>
								</div>
                                <div className="mt-12 sm:mt-0" aria-hidden="true" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<BenefitsSection benefits={candidateBenefits} />
			<ResultsSection />
			<TestimonialSection />
		</div>
	);
}
