export const dynamic = 'force-dynamic';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { getLatestPosts, getPostCount } from '@/lib/api';

const categories = [
  { name: 'Healthcare', slug: 'healthcare', emoji: '🏥' },
  { name: 'Arts and Humanities', slug: 'arts-humanities', emoji: '🎨' },
  { name: 'Social Sciences', slug: 'social-sciences', emoji: '🔍' },
  { name: 'Mathematics and Science', slug: 'mathematics-science', emoji: '🔬' },
  { name: 'Design and Environment', slug: 'design-environment', emoji: '🏛' },
  { name: 'Engineering', slug: 'engineering', emoji: '⚙️' },
  { name: 'Computing', slug: 'computing', emoji: '💻' },
  { name: 'Business', slug: 'business', emoji: '📊' },
  { name: 'Law and Policy', slug: 'law-policy', emoji: '⚖️' },
];

export default async function HomePage() {
  const [latestPosts, articleCount] = await Promise.all([
    getLatestPosts(3),
    getPostCount(),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '560px' }}>
        {/* SVG Pathway Background */}
        <div className="absolute inset-0 w-full h-full">
          <svg viewBox="0 0 1440 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              {/* Sky gradient */}
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fae8d8" />
                <stop offset="60%" stopColor="#fdf4ee" />
                <stop offset="100%" stopColor="#fff8f3" />
              </linearGradient>
              {/* Horizon glow */}
              <radialGradient id="horizonGlow" cx="50%" cy="42%" r="25%">
                <stop offset="0%" stopColor="#ffe8c0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffd4a0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fae8d8" stopOpacity="0" />
              </radialGradient>
              {/* Road gradient */}
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8bfb5" />
                <stop offset="100%" stopColor="#b0a89e" />
              </linearGradient>
              {/* Ground gradient left */}
              <linearGradient id="groundLeft" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c8d9b0" />
                <stop offset="100%" stopColor="#d4e0bc" />
              </linearGradient>
              {/* Ground gradient right */>
              <linearGradient id="groundRight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d4e0bc" />
                <stop offset="100%" stopColor="#c8d9b0" />
              </linearGradient>
              {/* Text area overlay */}
              <radialGradient id="textOverlay" cx="50%" cy="45%" r="40%">
                <stop offset="0%" stopColor="#fdf4ee" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#fdf4ee" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sky */}
            <rect width="1440" height="560" fill="url(#skyGrad)" />

            {/* Horizon glow (sun behind horizon) */}
            <ellipse cx="720" cy="235" rx="200" ry="80" fill="url(#horizonGlow)" />

            {/* Sun */}
            <circle cx="720" cy="210" r="28" fill="#FFD166" opacity="0.85" />
            <circle cx="720" cy="210" r="20" fill="#FFE08A" opacity="0.9" />

            {/* Sun rays */}
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 720 + Math.cos(rad) * 32;
              const y1 = 210 + Math.sin(rad) * 32;
              const x2 = 720 + Math.cos(rad) * 48;
              const y2 = 210 + Math.sin(rad) * 48;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD166" strokeWidth="2" opacity="0.5" />;
            })}

            {/* Rolling hills — left */}
            <path d="M0 300 Q180 220 360 280 Q500 330 580 310 L580 560 L0 560 Z" fill="url(#groundLeft)" opacity="0.7" />
            <path d="M0 340 Q150 290 300 320 Q420 345 580 330 L580 560 L0 560 Z" fill="#b8cca0" opacity="0.5" />

            {/* Rolling hills — right */}
            <path d="M1440 300 Q1260 220 1080 280 Q940 330 860 310 L860 560 L1440 560 Z" fill="url(#groundRight)" opacity="0.7" />
            <path d="M1440 340 Q1290 290 1140 320 Q1020 345 860 330 L860 560 L1440 560 Z" fill="#b8cca0" opacity="0.5" />

            {/* Road surface — perspective trapezoid */}
            <path d="M580 560 L680 235 L760 235 L860 560 Z" fill="url(#roadGrad)" />

            {/* Road edge lines */}
            <path d="M580 560 L680 235" stroke="#e8e0d8" strokeWidth="2" opacity="0.8" />
            <path d="M860 560 L760 235" stroke="#e8e0d8" strokeWidth="2" opacity="0.8" />

            {/* Road centre dashes */}
            <line x1="718" y1="245" x2="722" y2="265" stroke="white" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
            <line x1="714" y1="285" x2="726" y2="320" stroke="white" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
            <line x1="708" y1="340" x2="732" y2="390" stroke="white" strokeWidth="4" opacity="0.7" strokeLinecap="round" />
            <line x1="698" y1="415" x2="742" y2="480" stroke="white" strokeWidth="5" opacity="0.7" strokeLinecap="round" />
            <line x1="686" y1="500" x2="754" y2="545" stroke="white" strokeWidth="6" opacity="0.6" strokeLinecap="round" />

            {/* Milestone markers — left side of road */}
            <circle cx="646" cy="360" r="7" fill="#D79B98" opacity="0.9" />
            <text x="628" y="348" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.7" fontFamily="Nunito,sans-serif">JC / Poly</text>
            <circle cx="623" cy="450" r="7" fill="#D79B98" opacity="0.9" />
            <text x="600" y="438" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.7" fontFamily="Nunito,sans-serif">Research</text>

            {/* Milestone markers — right side of road */}
            <circle cx="794" cy="360" r="7" fill="#50A08C" opacity="0.9" />
            <text x="818" y="348" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.7" fontFamily="Nunito,sans-serif">Decision</text>
            <circle cx="817" cy="450" r="7" fill="#50A08C" opacity="0.9" />
            <text x="844" y="438" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.7" fontFamily="Nunito,sans-serif">Uni Life</text>

            {/* Horizon line */}
            <line x1="0" y1="235" x2="1440" y2="235" stroke="#d4bfaa" strokeWidth="1" opacity="0.4" />

            {/* Text area soft overlay so text is readable */}
            <rect width="1440" height="560" fill="url(#textOverlay)" />
          </svg>
        </div>

        {/* Hero text — sits above SVG */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <p className="text-pink font-semibold tracking-widest text-xs uppercase mb-4">peer-to-peer · anonymous · honest</p>
          <h1 className="font-bold text-navy text-5xl md:text-6xl leading-tight mb-3" style={{fontFamily:'Nunito,sans-serif'}}>
            your singapore uni path
          </h1>
          <p className="text-navy font-semibold text-base mb-4 opacity-70">
            Connecting you to your path
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Anonymous interview-style articles from current university students — the candid perspective official sites don't give you.
          </p>
          <Link href="#browse" className="inline-block bg-pink text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md">
            Browse Now
          </Link>
        </div>
      </section>

      {/* USP Cards */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: '💡', title: 'Our Team', text: "We are a group of students who want to make university information more accessible for Singapore's JC and Poly students." },
            { emoji: '✓', title: 'Our Content', text: 'Seniors anonymously share how they made their decisions, with truthful insights into the pros and cons of their course.' },
            { emoji: '💬', title: 'Our Purpose', text: "We hope to make information on Singapore's universities and courses more accessible so juniors can make better informed decisions." },
          ].map(card => (
            <div key={card.title} className="text-center p-6 rounded-2xl border border-peach hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3">{card.emoji}</div>
              <h3 className="font-bold text-navy text-lg mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Course */}
      <section id="browse" className="bg-peach-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bold text-navy text-3xl mb-8 text-center" style={{fontFamily:'Nunito,sans-serif'}}>Browse by Course</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md border border-transparent hover:border-teal transition-all group">
                <span className="text-3xl mb-3">{cat.emoji}</span>
                <h3 className="font-bold text-navy text-sm group-hover:text-teal transition-colors">{cat.name}</h3>
                <span className="text-teal text-xs mt-2 font-medium">View articles →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Takes */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-navy text-3xl" style={{fontFamily:'Nunito,sans-serif'}}>Fresh Takes</h2>
            <Link href="/articles" className="text-teal font-semibold text-sm hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map(post => <ArticleCard key={post.id} post={post} />)}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-peach py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-bold text-navy text-3xl mb-2" style={{fontFamily:'Nunito,sans-serif'}}>Drop us a request ❤️</h2>
          <p className="text-gray-500 mb-8">Want to contribute your story, request a course article, or just say hi?</p>
          <div className="flex flex-col gap-4 text-left">
            <select className="w-full px-4 py-3 rounded-xl border border-peach-light bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal">
              <option value="">Type of Inquiry</option>
              <option>Contribute an article</option>
              <option>Request a course</option>
              <option>Other</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="px-4 py-3 rounded-xl border border-peach-light bg-white focus:outline-none focus:ring-2 focus:ring-teal" />
              <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-xl border border-peach-light bg-white focus:outline-none focus:ring-2 focus:ring-teal" />
            </div>
            <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded-xl border border-peach-light bg-white focus:outline-none focus:ring-2 focus:ring-teal resize-none" />
            <a href="mailto:upathsg@gmail.com" className="w-full py-3 bg-teal text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-center block">
              Send
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <p className="font-bold text-4xl text-pink" style={{fontFamily:'Nunito,sans-serif'}}>{articleCount}</p>
            <p className="text-xs uppercase tracking-widest text-gray-300 mt-2">Articles</p>
          </div>
          <div>
            <p className="font-bold text-4xl text-pink" style={{fontFamily:'Nunito,sans-serif'}}>6</p>
            <p className="text-xs uppercase tracking-widest text-gray-300 mt-2">Universities</p>
          </div>
          <div>
            <p className="font-bold text-4xl text-pink" style={{fontFamily:'Nunito,sans-serif'}}>50+</p>
            <p className="text-xs uppercase tracking-widest text-gray-300 mt-2">Contributors</p>
          </div>
        </div>
      </section>
    </main>
  );
}
