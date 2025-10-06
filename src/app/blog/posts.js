// Centralized blog posts data. In a real app, this could come from a CMS or MDX.
// Each post focuses on Mapkie's mission: bridging skill gaps, improving hiring outcomes,
// empowering candidates & enterprises.

export const posts = [
  {
    slug: 'bridging-skill-gaps-with-expert-led-prep',
    title: 'Bridging Skill Gaps with Expert-Led Preparation',
    excerpt: 'Why structured, feedback-rich mock interviews accelerate real-world readiness for candidates and reduce mismatch hires for companies.',
    category: 'Preparation',
    readingTime: '5 min read',
    date: '2025-09-14',
    cover: '/expert-interview.png',
    tags: ['mock interviews', 'skill gaps', 'talent readiness'],
    body: [
      `The hiring process is noisy. Job descriptions are vague, interviews inconsistent, and candidate preparation often unstructured. At Mapkie, we designed our expert-led mock interview layer to compress the distance between *practice* and *performance*.`,
      `Traditional preparation tools rely on rote Q&A dumps. That creates shallow confidence. Our approach pairs candidates with vetted industry interviewers who recreate domain-specific scenarios—from system design to behavioral depth dives—so signals emerge early.`,
      `For enterprises, this means fewer false positives and a sharper pipeline. For candidates, it builds repeatable execution under pressure. The result: reduced churn post-hire and higher confidence for both sides.`,
      `We believe preparation should feel like rehearsal, not roulette. And rehearsal should produce measurable deltas: clarity, composure, calibration. That’s the utility layer we’re building.`
    ]
  },
  {
    slug: 'resume-to-referral-a-merit-based-path',
    title: 'From Resume to Referral: A Merit-Based Path',
    excerpt: 'Referrals shouldn’t depend on who you know. They should reflect what you can actually do. Here is how Mapkie rethinks credibility.',
    category: 'Referrals',
    readingTime: '4 min read',
    date: '2025-09-22',
    cover: '/upload-resume-card.svg',
    tags: ['referrals', 'fair opportunity', 'talent signal'],
    body: [
      `Referrals today are a social graph privilege. Warm intros are unevenly distributed, creating friction for capable but under-networked candidates. Mapkie flips this by anchoring referrals to demonstrated performance across structured prep journeys.`,
      `Every milestone—resume calibration, interview simulation, iterative feedback—generates a composite signal. That signal becomes a trust artifact enterprises can rely on when shortlisting.`,
      `Instead of opaque recommendation letters, we surface skill evidence and growth velocity. This preserves fairness while keeping speed.`,
      `When opportunity routes through merit, ecosystems diversify. That is not just ethical—it is economically efficient.`
    ]
  },
  {
    slug: 'designing-feedback-loops-that-compound',
    title: 'Designing Feedback Loops that Compound',
    excerpt: 'Granular, actionable feedback is the highest-leverage unlock in interview preparation. Compounding loops differentiate Mapkie’s learning engine.',
    category: 'Learning',
    readingTime: '6 min read',
    date: '2025-10-01',
    cover: '/feedback.webp',
    tags: ['feedback', 'learning systems', 'iteration'],
    body: [
      `Practice without feedback decays quickly. Generic feedback plateaus progress. We architected Mapkie’s loops around specificity, timeliness, and traceability.`,
      `Interviewers tag responses across dimensions: clarity, structure, depth, estimation, collaboration. These tagged frames help candidates see *why* something landed - or didn’t.`,
      `Progress dashboards visualize deltas over sessions. That shifts motivation from anxiety to agency.`,
      `Compounding emerges when each iteration reduces one more uncertainty. That’s the psychological edge elite performers cultivate—and we productize it.`
    ]
  }
];

export function getPosts() { return posts; }
export function getPost(slug) { return posts.find(p => p.slug === slug); }
