import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="https://upathsg.org/wp-content/themes/divi-child/pink_logo1.png" alt="UPATH SG" className="h-12 w-12 mb-3" />
          <p className="text-sm text-gray-300 leading-relaxed mb-4">Anonymous, honest, peer-to-peer university course perspectives for Singapore's JC and Poly students.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/upathsg" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-white transition-colors text-sm">📷 Instagram</a>
            <a href="https://www.tiktok.com/@upathsg" target="_blank" rel="noopener noreferrer" className="text-pink hover:text-white transition-colors text-sm">🎵 TikTok</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-pink mb-4 text-sm uppercase tracking-wide">Browse Articles</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {['business','computing','engineering','healthcare','social-sciences','law-policy'].map(s => (
              <Link key={s} href={`/category/${s}`} className="hover:text-white transition-colors capitalize">{s.replace('-', ' ')}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-pink mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/whats-on" className="hover:text-white transition-colors">What's On</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contribute Your Story</Link>
            <a href="mailto:upathsg@gmail.com" className="hover:text-white transition-colors">upathsg@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 border-t border-gray-700 mt-8 pt-6 text-xs text-gray-400 text-center">
        <p>The views expressed here are solely those of the interviewees and do not reflect the official position of any institution.</p>
        <p className="mt-1">© 2026 UPATH SG · Student-run non-profit</p>
      </div>
    </footer>
  );
}