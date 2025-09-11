"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/*
  EnterpriseWorkflow component
  Renders a 4-step vertical workflow with alternating cards connected by a path,
  matching the provided design. Uses Tailwind for layout and styling.
*/
export default function EnterpriseWorkflow() {
  const steps = [
    {
      id: 1,
      title: "Schedule",
      desc: "With a network of vetted interviewers, you can trust the results given by us. Candidates recommended by us after the",
      img: "/schedule.svg", // placeholder if custom; mapping existing asset below
      asset: "/evaluation.svg", // Re-using existing illustration closest to schedule theme
    },
    {
      id: 2,
      title: "Match",
      desc: "With a network of vetted interviewers, you can trust the results given by us. Candidates recommended by us after the",
      asset: "/expert-network.svg",
    },
    {
      id: 3,
      title: "Interview",
      desc: "With a network of vetted interviewers, you can trust the results given by us. Candidates recommended by us after the",
      asset: "/expert-interviewers.svg",
    },
    {
      id: 4,
      title: "Evaluate",
      desc: "With a network of vetted interviewers, you can trust the results given by us. Candidates recommended by us after the",
      asset: "/references.svg",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length < 2) return;
      // Collect center top positions of each card (after image area) for horizontal segments
      const rects = cards.map(el => el.getBoundingClientRect());
      const containerRect = containerRef.current.getBoundingClientRect();
      // Normalize x,y relative to container
      const points = rects.map(r => ({
        x: r.left + r.width / 2 - containerRect.left,
        y: r.top + 30 - containerRect.top, // 30px below top for pipe alignment
        bottomY: r.bottom - containerRect.top - 40 // area to start downward arc from
      }));
      // Build path: start at first point slightly left, horizontal to second, arc down, horizontal to third, arc down, horizontal to fourth
      const radius = 160; // controls arc roundness
      const strokeOffset = 0;
      let d = `M ${points[0].x - 260} ${points[0].y} H ${points[1].x - radius}`;
      // First arc down to between card1 & card2
      d += ` A ${radius} ${radius} 0 0 1 ${points[1].x} ${points[1].y + radius}`;
      // Vertical progress to near card2 bottom then horizontal toward card3
      d += ` V ${points[2].y - radius}`;
      d += ` A ${radius} ${radius} 0 0 0 ${points[2].x - radius} ${points[2].y}`;
      d += ` H ${points[2].x - radius}`; // ensure flush
      // Arc downward again toward card4
      d += ` V ${points[3].y - radius}`;
      d += ` A ${radius} ${radius} 0 0 1 ${points[3].x} ${points[3].y}`;
      d += ` H ${points[3].x + 220}`; // extend past last card
      setPathD(d);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full max-w-[1320px] mx-auto px-4 lg:px-6 xl:px-8 pt-24 pb-32" style={{fontFamily:"Lexend, sans-serif"}}>
      {/* Headings */}
      <div className="text-center mb-16">
        <h2 className="text-[#006C86] font-semibold text-2xl sm:text-3xl md:text-[34px] leading-tight mb-2">
          How Mapkie Works for Enterprise
        </h2>
        <p className="text-[#143F49] text-sm sm:text-base md:text-lg font-normal">
          Let experts handle your technical interviews while your team focuses on building
        </p>
      </div>

      {/* Curved connector path (desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {pathD && (
          <svg className="absolute inset-0 w-full h-full text-[#D4E2E7]" fill="none">
            <path d={pathD} stroke="currentColor" strokeWidth="110" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
        )}
      </div>

      {/* Steps */}
      <div className="relative z-10 flex flex-col gap-28 md:gap-40">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div key={step.id} className={`flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
              <div ref={el => cardRefs.current[idx] = el} className="relative md:w-[520px]">
                {/* Number badge */}
                <div className="hidden md:flex absolute -top-9 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#004A61] text-white text-2xl font-semibold items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
                  {step.id}
                </div>
                <div className="bg-white rounded-[14px] border border-[#C4D5DA] px-10 pt-16 pb-12 shadow-[0_3px_8px_rgba(0,0,0,0.06)] relative">
                  {/* Illustration */}
                  <div className="w-full mb-10">
                    <div className="relative w-[310px] h-[175px]">
                      <Image
                        src={step.asset}
                        alt={step.title}
                        fill
                        className="object-contain"
                        sizes="(max-width:768px) 310px, 310px"
                      />
                    </div>
                  </div>
                  {/* Mobile heading row */}
                  <div className="md:hidden flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#004A61] text-white flex items-center justify-center text-base font-semibold mr-4">{step.id}</div>
                    <h3 className="text-[#004455] text-xl font-semibold">{step.title}</h3>
                  </div>
                  <h3 className="hidden md:block text-[#004455] text-[23px] font-semibold mb-5 tracking-tight">{step.title}</h3>
                  <p className="text-[#163F48] text-[14px] leading-relaxed max-w-[400px]">{step.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
