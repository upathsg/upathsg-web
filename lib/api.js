const WP_API = 'https://upathsg.org/wp-json/wp/v2';

export async function getPosts({ page = 1, perPage = 9, categoryId } = {}) {
  const params = new URLSearchParams({
    page,
    per_page: perPage,
    _embed: 'wp:term',
    _fields: 'id,title,slug,excerpt,date,categories,_links',
  });
  if (categoryId) params.append('categories', categoryId);

  const res = await fetch(`${WP_API}/posts?${params}`, { next: { revalidate: 3600 } });
  if (!res.ok) return { posts: [], total: 0 };
  const posts = await res.json();
  const total = parseInt(res.headers.get('X-WP-Total') || '0');
  return { posts, total };
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${WP_API}/posts?slug=${slug}&_fields=id,title,slug,content,excerpt,date,categories,acf&_embed=wp:term`,
    { cache: 'no-store' }
  );
  if (!res.ok) return null;
  const posts = await res.json();
  return posts[0] || null;
}

export async function getCategories() {
  const res = await fetch(
    `${WP_API}/categories?per_page=20&parent=0&_fields=id,name,slug,count`,
    { next: { revalidate: 86400 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getLatestPosts(count = 3) {
  const res = await fetch(
    `${WP_API}/posts?per_page=${count}&_fields=id,title,slug,excerpt,date,categories&_embed=wp:term&categories_exclude=1`,
    { cache: 'no-store' }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getPostCount() {
  const res = await fetch(`${WP_API}/posts?per_page=1`, { cache: 'no-store' });
  if (!res.ok) return 0;
  return parseInt(res.headers.get('X-WP-Total') || '0');
}
