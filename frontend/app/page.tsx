import Link from 'next/link';

export const dynamic = 'force-dynamic';

type Category = { id: string; slug: string; name: string; parent_id: string | null };

async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL ?? 'http://localhost:3001/api/v1'}/catalog/categories`, { cache: 'no-store' });
    if (!response.ok) return [];
    const payload = await response.json() as { data?: Category[] };
    return payload.data ?? [];
  } catch { return []; }
}

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <main className="store-shell">
      <div className="store-notice">STOREFRONT PREVIEW · PRODUCT CATALOG IS BEING PREPARED</div>
      <header className="store-header">
        <Link className="store-brand" href="/" aria-label="Golf Shop home">GOLF<span>SHOP</span></Link>
        <nav className="store-nav" aria-label="Main navigation">
          <Link href="/shop">Shop all</Link>
          {categories.slice(0, 5).map((category) => <Link key={category.id} href={`/shop?category=${encodeURIComponent(category.slug)}`}>{category.name}</Link>)}
        </nav>
        <Link className="header-action" href="/shop">Explore shop <span aria-hidden="true">↗</span></Link>
      </header>
      <section className="store-hero">
        <div className="hero-copy">
          <p className="store-kicker">THE GAME STARTS HERE</p>
          <h1>Gear up for<br/><em>your next round.</em></h1>
          <p className="hero-description">Discover golf essentials across balls, apparel, footwear, bags and accessories. Product listings will appear as approved catalog data is added.</p>
          <Link className="store-primary" href="/shop">Explore the collection <span aria-hidden="true">→</span></Link>
          <p className="preview-caption">Original storefront direction · Brand identity awaiting approval</p>
        </div>
        <div className="hero-art" aria-label="Decorative golf-inspired illustration" role="img">
          <div className="art-sun"/><div className="art-orbit"/><div className="art-ball"/><div className="art-flag"><span/></div>
          <span className="art-label">PLAY<br/>YOUR<br/>WAY</span>
        </div>
      </section>
      <section className="category-section">
        <div className="section-top"><div><p className="store-kicker">FIND YOUR FIT</p><h2>Shop by category</h2></div><Link href="/shop">View all products ↗</Link></div>
        {categories.length ? (
          <div className="category-grid">{categories.map((category, index) => <Link className="category-tile" key={category.id} href={`/shop?category=${encodeURIComponent(category.slug)}`}><span>0{index + 1}</span><strong>{category.name}</strong><small>Explore collection ↗</small></Link>)}</div>
        ) : (
          <div className="catalog-empty"><span className="empty-symbol">◎</span><h3>Curated golf collections are on the way</h3><p>Category setup and product approvals are still in progress. No sample products or stock figures are being shown as real inventory.</p><Link href="/shop">Open catalog preview ↗</Link></div>
        )}
      </section>
      <section className="store-principles">
        <div><span>01</span><strong>Golf-specific discovery</strong><p>Category and variant details are designed around golf products.</p></div>
        <div><span>02</span><strong>Clear product information</strong><p>Prices, specifications and availability will use approved catalog records.</p></div>
        <div><span>03</span><strong>Built for Indian retail</strong><p>INR pricing and local commerce workflows are part of the platform plan.</p></div>
      </section>
      <footer className="store-footer"><Link className="store-brand" href="/">GOLF<span>SHOP</span></Link><span>Preview environment · Not accepting orders</span><span>© Golf Commerce Platform</span></footer>
    </main>
  );
}
