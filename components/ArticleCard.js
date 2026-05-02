import Link from 'next/link';

function decodeHtml(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&nbsp;/g, ' ');
}

export default function ArticleCard({ post }) {
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const rawExcerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';
  const excerpt = decodeHtml(rawExcerpt).trim().slice(0, 120) + '...';
  const date = new Date(post.date).toLocaleDateString('en-SG', { year: 'numeric', month: 'long' });

  return (
    <Link href={`/${post.slug}`} className="block group h-full">
      <div className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow border border-peach h-full flex flex-col">
        {category && <span className="text-xs font-semibold text-teal uppercase tracking-wide">{category.name}</span>}
        <h3 className="font-bold text-navy text-base mt-2 group-hover:text-teal transition-colors leading-snug flex-1">
          {post.title?.rendered}
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{date}</span>
          <span className="text-teal text-sm font-semibold group-hover:underline">Read →</span>
        </div>
      </div>
    </Link>
  );
}
