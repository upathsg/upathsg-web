import { getPostBySlug, getPosts } from '@/lib/api';
import { notFound } from 'next/navigation';

function extractHeadings(html) {
  const sections = [];
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    const id = match[1];
    const text = match[2].replace(/<[^>]+>/g, '');
    const questions = [];
    const afterH2 = html.slice(match.index + match[0].length);
    const nextH2 = afterH2.search(/<h2/i);
    const sectionHtml = nextH2 > -1 ? afterH2.slice(0, nextH2) : afterH2;
    const h3Re = /<h3[^>]*id="([^"]*)"[^>]*>(.*?)<\/h3>/gi;
    let h3Match;
    while ((h3Match = h3Re.exec(sectionHtml)) !== null) {
      questions.push({ id: h3Match[1], text: h3Match[2].replace(/<[^>]+>/g, '') });
    }
    sections.push({ id, text, questions });
  }
  return sections;
}

export default async function ArticlePage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const content = post.content?.rendered || '';
  const sections = extractHeadings(content);
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const date = new Date(post.date).toLocaleDateString('en-SG', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl p-5 shadow-sm border border-peach max-h-[80vh] overflow-y-auto">
            {sections.length > 0 && (
              <>
                <h4 className="font-bold text-navy text-xs mb-3 uppercase tracking-wide">Click to Section</h4>
                <ol className="text-xs space-y-2 mb-5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-teal hover:underline font-medium">{i + 1}. {s.text}</a>
                    </li>
                  ))}
                </ol>
                <div className="border-t border-peach pt-4">
                  <h4 className="font-bold text-navy text-xs mb-3 uppercase tracking-wide">Click to Question</h4>
                  <div className="text-xs space-y-3">
                    {sections.map(s => (
                      <div key={s.id}>
                        <p className="font-semibold text-navy mb-1">{s.text}</p>
                        <ul className="space-y-1 pl-2">
                          {s.questions.map(q => (
                            <li key={q.id}>
                              <a href={`#${q.id}`} className="text-teal hover:underline leading-snug block">{q.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        {/* Article */}
        <article className="flex-1 min-w-0">
          {category && <span className="text-xs font-semibold text-teal uppercase tracking-wide">{category.name}</span>}
          <h1 className="font-bold text-navy text-3xl md:text-4xl mt-2 mb-2 leading-tight" style={{fontFamily:'Nunito,sans-serif'}}>
            {post.title?.rendered}
          </h1>
          <p className="text-sm text-gray-400 mb-8">{date}</p>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="mt-12 p-6 bg-peach rounded-2xl border-l-4 border-teal">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer from UPATH SG:</strong> The views and opinions expressed here are solely those of the interviewees and do not reflect the official policy or position of any institution. They are also not intended to malign any religion, ethnic group, class, individual or organisation. The information contained in this website is intended to provide general guidance only. It should not be relied upon as professional advice and does not 100% guarantee admission into any course.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ perPage: 100 });
  return posts.map(post => ({ slug: post.slug }));
}