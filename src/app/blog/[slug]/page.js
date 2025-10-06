import Navbar from "../../Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "../posts";
import PropTypes from "prop-types";

export function generateStaticParams() {
  return getPosts().map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post Not Found | Mapkie Blog' };
  return {
    title: `${post.title} | Mapkie Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover, width: 1200, height: 630 }],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover]
    }
  };
}

export default function BlogPostPage({ params }) {
  // Next.js provides params; prop-types not used.
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen" style={{ background: "#F5FBFD", fontFamily: 'Lexend, sans-serif' }}>
      <Navbar />

      <article className="pt-16 md:pt-20 pb-24">
        <div className="mx-auto max-w-[980px] px-5 sm:px-8">
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold tracking-wide uppercase text-[#0C4F63] mb-4">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-[#0C4F63]" />
              <span>{post.readingTime}</span>
              <span className="w-1 h-1 rounded-full bg-[#0C4F63]" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })}</time>
            </div>
            <h1 className="text-[#0C2E3F] font-bold text-[34px] md:text-[46px] leading-[1.15] tracking-tight mb-6">{post.title}</h1>
            <p className="text-[#2F4650] text-[16px] md:text-[18px] leading-[1.55] max-w-[760px] font-normal mb-6">{post.excerpt}</p>
            <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden border border-[#D2E3EA] bg-white mb-12">
              <Image src={post.cover} alt={post.title} fill className="object-contain object-center p-8" />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.body.map((para) => {
              const key = para.slice(0,40).replace(/\s+/g,'-').toLowerCase();
              return (
                <p key={key} className="text-[#273E48] text-[15px] md:text-[17px] leading-[1.65] mb-6 font-normal">{para}</p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 mb-12">
            {post.tags.map(tag => (
              <span key={tag} className="text-[12px] bg-[#E8F0F3] text-[#0C4F63] px-3 py-1 rounded-full font-medium">{tag}</span>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-14 p-8 md:p-10 rounded-2xl border border-[#D2E3EA] bg-white/70 backdrop-blur-sm flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-[24px] md:text-[30px] font-bold text-[#0C2E3F] mb-3 leading-tight">Turn Insight into Momentum</h2>
              <p className="text-[#384C5D] text-[14.5px] md:text-[16px] leading-[1.55] m-0">Ready to move from theory to structured execution? Begin your preparation or explore how Mapkie strengthens hiring pipelines with signal-rich talent readiness.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[260px]">
              <Link href="/contact" className="btn-request-demo text-[14px] px-7 py-3">Talk to Us</Link>
              <Link href="/candidate" className="btn-login text-[14px] px-7 py-3">Explore Candidate Path</Link>
            </div>
          </div>

          <div className="mt-20">
            <Link href="/blog" className="text-[#0D6C86] font-semibold text-[14px] hover:underline">← Back to all articles</Link>
          </div>
        </div>
      </article>
    </div>
  );
}

BlogPostPage.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
