export const dynamic = 'force-dynamic';

import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';

const WP_API = 'https://upathsg.org/wp-json/wp/v2';

async function getCategoryBySlug(slug) {
  const res = await fetch(`${WP_API}/categories?slug=${slug}&_fields=id,name,slug,count`);
  if (!res.ok) return null;
  const cats = await res.json();
  return cats[0] || null;
}

async function getPostsByCategory(categoryId, page = 1) {
  const res = await fetch(
    `${WP_API}/posts?categories=${categoryId}&per_page=12&page=${page}&_fields=id,title,slug,excerpt,date,categories&_embed=wp:term`
  );
  if (!res.ok) return { posts: [], total: 0 };
  const posts = await res.json();
  const total = parseInt(res.headers.get('X-WP-Total') || '0');
  return { posts, total };
}

export default async function CategoryPage({ params }) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return <div className="max-w-6xl mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold text-navy">Category not found</h1></div>;

  const { posts, total } = await getPostsByCategory(category.id);

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-peach to-peach-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-teal text-sm font-semibold hover:underline">← Back to Home</Link>
          <h1 className="font-bold text-navy text-4xl mt-4 mb-2" style={{fontFamily:'Nunito,sans-serif'}}>{category.name}</h1>
          <p className="text-gray-500">{total} article{total !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-center py-16">No articles in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => <ArticleCard key={post.id} post={post} />)}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
