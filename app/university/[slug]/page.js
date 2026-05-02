export const dynamic = 'force-dynamic';

import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';

const WP_API = 'https://upathsg.org/wp-json/wp/v2';

const UNIVERSITIES = {
  nus: 'NUS',
  ntu: 'NTU', 
  smu: 'SMU',
  sutd: 'SUTD',
  sit: 'SIT',
  suss: 'SUSS',
};

async function getPostsByUniversity(uniName) {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_fields=id,title,slug,excerpt,date,categories&_embed=wp:term`
  );
  if (!res.ok) return [];
  const all = await res.json();
  return all.filter(post => 
    post.title?.rendered?.toUpperCase().startsWith(uniName.toUpperCase())
  );
}

export default async function UniversityPage({ params }) {
  const uniName = UNIVERSITIES[params.slug.toLowerCase()];
  if (!uniName) return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-navy">University not found</h1>
    </div>
  );

  const posts = await getPostsByUniversity(uniName);

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-peach to-peach-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-teal text-sm font-semibold hover:underline">← Back to Home</Link>
          <h1 className="font-bold text-navy text-4xl mt-4 mb-2" style={{fontFamily:'Nunito,sans-serif'}}>{uniName}</h1>
          <p className="text-gray-500">{posts.length} article{posts.length !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-center py-16">No articles for this university yet.</p>
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
