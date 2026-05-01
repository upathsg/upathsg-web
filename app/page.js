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
      <section className="relative bg-gradient-to-br from-peach via-peach-light to-white overflow-hidden py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-teal opacity-10" />
          <div className="absolute bottom-0 left-10 w-52 h-52 rounded-full bg-pink opacity-10" />
          <div className="absolute top-32 left-1/3 w-36 h-36 rounded-full bg-navy opacity-5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-pink font-semibold tracking-widest text-xs uppercase mb-4">peer-to-peer · anonymous · honest</p>
          <h1 className="font-bold text-navy text-5xl md:text-6xl leading-tight mb-6" style={{fontFamily:'Nunito,sans-serif'}}>
            your singapore uni path
          </h1>
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
      <section className="bg-navy py-12">
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
