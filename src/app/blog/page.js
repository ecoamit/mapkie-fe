import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./posts";

export const metadata = {
  title: "Mapkie Blog | Insights on Talent Readiness, Referrals & Preparation",
  description: "Articles on mock interviews, feedback systems, fair referrals and talent readiness from the Mapkie team.",
};

export default function BlogIndexPage() {
  const posts = getPosts();

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #F3FAFC 0%, #F7FBFD 40%, #EEF6F8 100%)",
        fontFamily: "Lexend, sans-serif",
      }}
    >
      <Navbar />

      {/* Hero (Enhanced) */}
      <section className="relative w-full pt-20 md:pt-24 pb-6 lg:pb-14 overflow-hidden">
        {/* Ambient gradient blobs */}
        <div aria-hidden className="pointer-events-none absolute top-[-180px] left-[-120px] w-[520px] h-[520px] rounded-full opacity-[0.55]" style={{background:"radial-gradient(circle at 35% 35%, #C7ECF5 0%, rgba(255,255,255,0) 68%)"}} />
        <div aria-hidden className="pointer-events-none absolute top-[-120px] right-[-160px] w-[640px] h-[640px] rounded-full opacity-[0.45]" style={{background:"radial-gradient(circle at 55% 45%, #B0E0EB 0%, rgba(255,255,255,0) 70%)"}} />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-14 items-start">
            {/* Left Copy */}
            <div className="lg:col-span-6 xl:col-span-7 max-w-[640px]">
              <div className="inline-flex items-center gap-2 mb-6 bg-white/70 backdrop-blur-sm border border-[#D2E3EA] rounded-full pl-3 pr-4 py-1 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#006C86] to-[#061F34]" />
                <span className="text-[12px] font-semibold tracking-wide text-[#0C4F63] uppercase">Mapkie Editorial</span>
                <span className="text-[11px] text-[#4E6B78]">Actionable, Signal-Driven</span>
              </div>
              <h1 className="text-[#0C2E3F] font-bold text-[40px] sm:text-[50px] leading-[1.07] tracking-tight mb-6">
                Build <span className="bg-gradient-to-r from-[#006C86] to-[#061F34] bg-clip-text text-transparent">Prepared Talent</span><br className="hidden sm:block" /> Not Just Profiles
              </h1>
              <p className="text-[#2F4650] text-[15px] md:text-[18px] leading-[1.6] max-w-[580px] font-normal mb-8">
                Deep dives on structured practice, expert feedback loops, measurable readiness and equitable referral pathways. Systems thinking applied to hiring and candidate growth.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                {['Preparation','Referrals','Signals','Learning Loops','Interview Design'].map(tag => (
                  <span key={tag} className="text-[12px] font-medium bg-[#E8F0F3] text-[#0C4F63] px-4 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#latest" className="btn-request-demo text-[14px] px-7 py-3">Read Latest</Link>
                <Link href="/contact" className="btn-login text-[14px] px-7 py-3">Collaborate</Link>
              </div>
            </div>

            {/* Featured Article Card */}
            <div className="lg:col-span-6 xl:col-span-5 w-full">
              {(() => {
                const featured = posts[0];
                return (
                  <Link href={`/blog/${featured.slug}`} className="group block relative">
                    <div className="absolute inset-0 -z-10 blur-2xl opacity-50 scale-110" style={{background:"linear-gradient(99deg, #9FD6E4 0%, #E6F5FA 70%)"}} />
                    <div className="rounded-2xl border border-[#C9DEE5] bg-white/80 backdrop-blur-sm shadow-sm group-hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                      <div className="relative w-full h-64 bg-[#E8F0F3]">
                        <Image src={featured.cover} alt={featured.title} fill className="object-contain object-center p-8 group-hover:scale-[1.03] transition-transform" />
                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/85 backdrop-blur px-3 py-1 rounded-full border border-[#D2E3EA] shadow-sm">
                          <span className="text-[11px] font-semibold tracking-wide uppercase text-[#0C4F63]">Featured</span>
                        </div>
                      </div>
                      <div className="p-7 pt-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide font-semibold text-[#0C4F63] mb-3">
                          <span>{featured.category}</span>
                          <span className="w-1 h-1 rounded-full bg-[#0C4F63]" />
                          <span>{featured.readingTime}</span>
                        </div>
                        <h2 className="text-[22px] font-bold text-[#0C2E3F] leading-[1.3] mb-3 group-hover:text-[#0D6C86] transition-colors">{featured.title}</h2>
                        <p className="text-[#384C5D] text-[14px] leading-[1.55] mb-5 flex-1">{featured.excerpt}</p>
                        <span className="btn-request-demo text-[13px] py-2 px-5 self-start">Open Article</span>
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Decorative bottom bars */}
        <div aria-hidden className="mt-16 flex gap-3 w-full justify-center">
          <div className="h-[5px] w-24 rounded-full bg-gradient-to-r from-[#006C86] to-[#061F34]" />
          <div className="h-[5px] w-16 rounded-full bg-[#FEC432]" />
          <div className="h-[5px] w-10 rounded-full bg-[#0C4F63]" />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <article key={post.slug} className="group bg-white/80 backdrop-blur-sm border border-[#D2E3EA] rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                <div className="relative w-full h-48 bg-[#E8F0F3]">
                  <Image src={post.cover} alt={post.title} fill className="object-contain object-center p-6 group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="flex-1 flex flex-col p-6 pt-5">
                  <div className="flex items-center gap-3 text-[12px] uppercase tracking-wide font-semibold text-[#0C4F63] mb-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#0C4F63]" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-[20px] font-bold text-[#0C2E3F] leading-[1.3] mb-3 group-hover:text-[#0D6C86] transition-colors">{post.title}</h2>
                  <p className="text-[#384C5D] text-[14px] leading-[1.55] mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0,3).map(tag => (
                      <span key={tag} className="text-[11px] bg-[#E8F0F3] text-[#0C4F63] px-2 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="btn-request-demo text-[14px] py-2 px-5 self-start">Read Article</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
