import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
type Product = {
  id: string; slug: string; title: string; short_description: string | null; description: string | null;
  category_name: string; brand_name: string | null;
  media: { id: string; alt_text: string; media_type: string; sort_order: number }[];
  variants: { id: string; option_values: Record<string, string>; amount_paise: number | string | null; currency: string | null; availability_status: string }[];
};
const apiBase = process.env.API_BASE_URL ?? 'http://localhost:3001/api/v1';
async function getProduct(slug: string): Promise<Product | null> {
  try { const response = await fetch(`${apiBase}/catalog/products/${encodeURIComponent(slug)}`, { cache: 'no-store' }); if (response.status === 404) return null; if (!response.ok) return null; return await response.json() as Product; }
  catch { return null; }
}
function money(amount: number | string | null, currency: string | null): string {
  if (amount === null || !currency) return 'Price pending approval';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(Number(amount) / 100);
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  return <main className="store-shell"><header className="store-header"><Link className="store-brand" href="/">GOLF<span>SHOP</span></Link><nav className="store-nav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/shop">Shop all</Link></nav><Link className="header-action" href="/shop">Continue shopping ↗</Link></header>
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{product.category_name}</span></div>
    <section className="product-detail"><div className="detail-gallery">{product.media.length ? product.media.map((media) => <div className="detail-image" key={media.id} role="img" aria-label={media.alt_text}><span>Approved product media pending delivery integration</span></div>) : <div className="detail-image"><span>Product photography will appear after approved assets are uploaded</span></div>}</div>
      <div className="detail-copy"><p className="store-kicker">{product.category_name}</p><h1>{product.title}</h1>{product.brand_name ? <p className="detail-brand">{product.brand_name}</p> : null}<p className="detail-price">{product.variants[0] ? money(product.variants[0].amount_paise, product.variants[0].currency) : 'Price pending approval'}</p><p>{product.short_description ?? 'Product information will be published after supplier details and content review.'}</p><div className="variant-list"><h2>Available options</h2>{product.variants.length ? product.variants.map((variant) => <div className="variant-row" key={variant.id}><span>{Object.entries(variant.option_values ?? {}).map(([key, value]) => `${key}: ${value}`).join(' · ') || 'Standard option'}</span><span>{variant.availability_status.replaceAll('_', ' ')}</span></div>) : <p>Variant options are not configured yet.</p>}</div><p className="purchase-note">Checkout and ordering are not enabled in this preview. Delivery, return and warranty details will be shown only after business approval.</p><Link className="store-primary" href="/shop">Back to catalog</Link></div>
    </section>
    <section className="product-description"><h2>Product details</h2><p>{product.description ?? 'Detailed product specifications are awaiting verified supplier information.'}</p></section>
    <footer className="store-footer"><Link className="store-brand" href="/">GOLF<span>SHOP</span></Link><span>Preview environment · Not accepting orders</span><span>© Golf Commerce Platform</span></footer>
  </main>;
}
