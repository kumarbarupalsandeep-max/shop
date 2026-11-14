import Link from 'next/link';

export const dynamic = 'force-dynamic';
type Category = { id: string; slug: string; name: string; parent_id: string | null };
type Product = { id: string; slug: string; title: string; short_description: string | null; category_name: string; brand_name: string | null; amount_paise: number | string | null; currency: string | null; availability_status: string };
type SearchParams = Promise<{ q?: string; category?: string; page?: string; sort?: string }>;
const apiBase = process.env.API_BASE_URL ?? 'http://localhost:3001/api/v1';
async function getJson<T>(url: string, fallback: T): Promise<T> {
  try { const response = await fetch(url, { cache: 'no-store' }); if (!response.ok) return fallback; return await response.json() as T; }
  catch { return fallback; }
}
function money(amount: number | string | null, currency: string | null): string {
  if (amount === null || !currency) return 'Price pending approval';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(Number(amount) / 100);
}
export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = new URLSearchParams();
  if (params.q) query.set('q', params.q);
  if (params.category) query.set('category', params.category);
  if (params.page) query.set('page', params.page);
  if (params.sort) query.set('sort', params.sort);
  const [categoriesPayload, productsPayload] = await Promise.all([
    getJson<{ data: Category[] }>(`${apiBase}/catalog/categories`, { data: [] }),
    getJson<{ data: Product[]; pagination: { page: number; total: number; totalPages: number } }>(`${apiBase}/catalog/products?${query.toString()}`, { data: [], pagination: { page: 1, total: 0, totalPages: 0 } }),
  ]);
  const categories = categoriesPayload.data ?? [];
  const products = productsPayload.data ?? [];
  const total = productsPayload.pagination?.total ?? 0;
  return (
    <main className="store-shell">
      <header className="store-header"><Link className="store-brand" href="/">GOLF<span>SHOP</span></Link><nav className="store-nav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/shop" aria-current="page">Shop all</Link></nav><Link className="header-action" href="/">Back to home ↗</Link></header>
      <section className="listing-heading"><p className="store-kicker">THE COLLECTION</p><h1>Shop golf essentials</h1><p>Browse the approved catalog. Product availability and prices appear only when configured by the catalog team.</p></section>
      <section className="listing-layout">
        <aside className="filter-panel"><h2>Refine</h2><form action="/shop" method="get" className="filter-form"><label htmlFor="catalog-search">Search products</label><input id="catalog-search" name="q" type="search" defaultValue={params.q ?? ''} placeholder="Search golf essentials"/><label htmlFor="catalog-category">Category</label><select id="catalog-category" name="category" defaultValue={params.category ?? ''}><option value="">All categories</option>{categories.map((category) => <option key={category.id} value={category.slug}>{category.name}</option>)}</select><label htmlFor="catalog-sort">Sort by</label><select id="catalog-sort" name="sort" defaultValue={params.sort ?? 'newest'}><option value="newest">Newest</option><option value="title_asc">Name: A to Z</option></select><button className="store-primary" type="submit">Apply filters</button><Link className="clear-filters" href="/shop">Clear all</Link></form></aside>
        <div className="results-panel"><div className="results-top"><span>{total} {total === 1 ? 'product' : 'products'}</span><span>Page {productsPayload.pagination?.page ?? 1}</span></div>
          {products.length ? <div className="product-grid">{products.map((product) => <article className="product-card" key={product.id}><Link href={`/product/${encodeURIComponent(product.slug)}`} className="product-art"><span>PRODUCT IMAGE</span></Link><div className="product-meta">{product.category_name}</div><h2><Link href={`/product/${encodeURIComponent(product.slug)}`}>{product.title}</Link></h2>{product.brand_name ? <p>{product.brand_name}</p> : null}<strong>{money(product.amount_paise, product.currency)}</strong><small>{product.availability_status.replaceAll('_', ' ')}</small></article>)}</div> : <div className="catalog-empty listing-empty"><span className="empty-symbol">◎</span><h2>{params.q ? 'No matching products yet' : 'The catalog is being prepared'}</h2><p>{params.q ? 'Try a different search or clear the filters.' : 'There are no published products to display. Draft catalog records are intentionally hidden from customers.'}</p><Link href="/shop">Clear filters and try again ↗</Link></div>}
        </div>
      </section>
      <footer className="store-footer"><Link className="store-brand" href="/">GOLF<span>SHOP</span></Link><span>Preview environment · Not accepting orders</span><span>© Golf Commerce Platform</span></footer>
    </main>
  );
}
