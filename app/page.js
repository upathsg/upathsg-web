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

const sunRayAngles = [0,30,60,90,120,150,180,210,240,270,300,330];

export default async function HomePage() {
  const [latestPosts, articleCount] = await Promise.all([
    getLatestPosts(3),
    getPostCount(),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '640px' }}>
        <div className="absolute inset-0 w-full h-full">
          <svg viewBox="0 0 1440 640" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fae8d8" />
                <stop offset="70%" stopColor="#fdf4ee" />
                <stop offset="100%" stopColor="#fef8f4" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#ffe0a0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fae8d8" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a8c48a" />
                <stop offset="100%" stopColor="#8aad6e" />
              </linearGradient>
              <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c2d9a8" />
                <stop offset="100%" stopColor="#a8c48a" />
              </linearGradient>
              <linearGradient id="hill3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d4e8be" />
                <stop offset="100%" stopColor="#c2d9a8" />
              </linearGradient>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c0b8b0" />
                <stop offset="100%" stopColor="#a8a098" />
              </linearGradient>
            </defs>

            <rect width="1440" height="640" fill="url(#skyGrad)" />
            <rect width="1440" height="640" fill="url(#sunGlow)" />

            <circle cx="720" cy="310" r="36" fill="#FFD166" opacity="0.9" />
            <circle cx="720" cy="310" r="24" fill="#FFE8A0" opacity="1" />
            {sunRayAngles.map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 720 + Math.cos(rad) * 40;
              const y1 = 310 + Math.sin(rad) * 40;
              const x2 = 720 + Math.cos(rad) * 60;
              const y2 = 310 + Math.sin(rad) * 60;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD166" strokeWidth="2.5" opacity="0.55" />;
            })}

            <line x1="0" y1="348" x2="1440" y2="348" stroke="#d4bfaa" strokeWidth="1" opacity="0.3" />
            <path d="M0 348 Q200 290 400 330 Q600 365 720 340 Q840 315 1040 335 Q1240 355 1440 320 L1440 640 L0 640 Z" fill="url(#hill3)" />
            <path d="M0 390 Q180 340 360 375 Q540 410 720 380 Q900 350 1080 378 Q1260 406 1440 370 L1440 640 L0 640 Z" fill="url(#hill2)" />
            <path d="M0 450 Q150 420 300 440 Q500 465 580 448 L580 640 L0 640 Z" fill="url(#hill1)" />
            <path d="M860 448 Q940 432 1100 452 Q1280 472 1440 440 L1440 640 L860 640 Z" fill="url(#hill1)" />

            <path d="M580 640 C 600 560, 650 480, 700 348 L740 348 C 790 480, 840 560, 860 640 Z" fill="url(#roadGrad)" />
            <path d="M580 640 C 600 560, 650 480, 700 348" stroke="#d8d0c8" strokeWidth="2" fill="none" opacity="0.7" />
            <path d="M860 640 C 840 560, 790 480, 740 348" stroke="#d8d0c8" strokeWidth="2" fill="none" opacity="0.7" />

            <path d="M716 355 C 716 370, 716 385, 716 400" stroke="white" strokeWidth="3" strokeDasharray="8,10" fill="none" opacity="0.7" strokeLinecap="round" />
            <path d="M716 415 C 715 445, 714 475, 712 510" stroke="white" strokeWidth="4" strokeDasharray="10,12" fill="none" opacity="0.6" strokeLinecap="round" />
            <path d="M710 530 C 708 560, 706 590, 703 620" stroke="white" strokeWidth="5" strokeDasharray="12,14" fill="none" opacity="0.5" strokeLinecap="round" />

            <rect x="530" y="408" width="8" height="28" fill="#6b8a4e" rx="2" />
            <circle cx="534" cy="402" r="16" fill="#7a9e5a" />
            <circle cx="534" cy="395" r="11" fill="#8aad6a" />
            <rect x="460" y="428" width="10" height="34" fill="#6b8a4e" rx="2" />
            <circle cx="465" cy="420" r="20" fill="#7a9e5a" />
            <circle cx="465" cy="412" r="13" fill="#8aad6a" />

            <rect x="900" y="408" width="8" height="28" fill="#6b8a4e" rx="2" />
            <circle cx="904" cy="402" r="16" fill="#7a9e5a" />
            <circle cx="904" cy="395" r="11" fill="#8aad6a" />
            <rect x="968" y="428" width="10" height="34" fill="#6b8a4e" rx="2" />
            <circle cx="973" cy="420" r="20" fill="#7a9e5a" />
            <circle cx="973" cy="412" r="13" fill="#8aad6a" />

            <circle cx="648" cy="460" r="6" fill="#D79B98" opacity="0.9" />
            <text x="630" y="450" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.75" fontFamily="Nunito,sans-serif" fontWeight="600">JC / Poly</text>
            <circle cx="628" cy="550" r="6" fill="#D79B98" opacity="0.9" />
            <text x="606" y="540" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.75" fontFamily="Nunito,sans-serif" fontWeight="600">Research</text>
            <circle cx="792" cy="460" r="6" fill="#50A08C" opacity="0.9" />
            <text x="812" y="450" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.75" fontFamily="Nunito,sans-serif" fontWeight="600">Decision</text>
            <circle cx="812" cy="550" r="6" fill="#50A08C" opacity="0.9" />
            <text x="836" y="540" textAnchor="middle" fontSize="10" fill="#0F1932" opacity="0.75" fontFamily="Nunito,sans-serif" fontWeight="600">Uni Life</text>
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center" style={{ paddingTop: '60px', paddingBottom: '20px' }}>
          <p className="text-pink font-semibold tracking-widest text-xs uppercase mb-3">peer-to-peer · anonymous · honest</p>
          <h1 className="font-bold text-navy text-5xl md:text-6xl leading-tight mb-2" style={{fontFamily:'Nunito,sans-serif'}}>
            your singapore uni path
          </h1>
          <p className="text-navy font-semibold text-sm mb-4 opacity-60 tracking-wide">
            Connecting you to your path
          </p>
          <p className="text-navy text-sm max-w-xl mx-auto mb-6 leading-relaxed opacity-75">
            Hello, welcome to upathsg — a website specially curated to address any questions you may have about your university path in Singapore! We hope to provide a one-stop university application website that is credible and accessible, with information on a wide range of schools and courses.
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
          <h2 className="font-bold text-navy text-3xl mb-8" style={{fontFamily:'Nunito,sans-serif'}}>Fresh Takes</h2>
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
