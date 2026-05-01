import Link from 'next/link';

export default function ArticleCard({ post }) {
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const excerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').slice(0, 120) + '...';
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