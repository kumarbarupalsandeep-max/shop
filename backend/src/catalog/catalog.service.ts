import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

type CatalogQueryValue = string | number | null;

@Injectable()
export class CatalogService {
  constructor(private readonly database: DatabaseService) {}

  async categories() {
    const result = await this.database.query<{
      id: string; slug: string; name: string; parent_id: string | null; sort_order: number;
    }>(
      `SELECT id, slug, name, parent_id, sort_order
       FROM categories WHERE status = 'active'
       ORDER BY sort_order ASC, name ASC`,
    );
    return { data: result.rows };
  }

  async products(input: { page?: string; limit?: string; category?: string; q?: string; sort?: string }) {
    const page = this.toBoundedInteger(input.page, 1, 1, 100000);
    const limit = this.toBoundedInteger(input.limit, 20, 1, 50);
    const offset = (page - 1) * limit;
    const search = input.q?.trim().slice(0, 100) ?? '';
    const category = input.category?.trim().slice(0, 120) ?? '';
    const sort = input.sort === 'title_asc' ? 'p.title ASC, p.id ASC' : 'p.published_at DESC, p.id DESC';

    const where: string[] = [`p.status = 'published'`, 'p.published_at IS NOT NULL', 'p.published_at <= now()'];
    const values: CatalogQueryValue[] = [];
    if (category) {
      values.push(category);
      where.push(`c.slug = $\${values.length}`);
    }
    if (search) {
      values.push(search);
      where.push(`(p.title ILIKE '%' || $\${values.length} || '%' OR p.short_description ILIKE '%' || $\${values.length} || '%')`);
    }
    const clause = where.join(' AND ');
    const count = await this.database.query<{ total: string }>(
      `SELECT count(*)::text AS total FROM products p JOIN categories c ON c.id = p.category_id WHERE ${clause}`,
      values,
    );
    const rows = await this.database.query(
      `SELECT p.id, p.slug, p.title, p.short_description,
              c.slug AS category_slug, c.name AS category_name,
              b.name AS brand_name,
              price.amount_paise, price.currency,
              CASE
                WHEN inventory.variant_count IS NULL THEN 'not_configured'
                WHEN inventory.available_qty > 0 THEN 'in_stock'
                ELSE 'out_of_stock'
              END AS availability_status
       FROM products p
       JOIN categories c ON c.id = p.category_id
       LEFT JOIN brands b ON b.id = p.brand_id
       LEFT JOIN LATERAL (
         SELECT pv.id
         FROM product_variants pv
         WHERE pv.product_id = p.id AND pv.status = 'active'
         ORDER BY pv.created_at ASC
         LIMIT 1
       ) first_variant ON true
       LEFT JOIN LATERAL (
         SELECT amount_paise, currency
         FROM product_variant_prices pvp
         WHERE pvp.variant_id = first_variant.id
           AND pvp.effective_from <= now()
           AND (pvp.effective_to IS NULL OR pvp.effective_to > now())
         ORDER BY pvp.effective_from DESC
         LIMIT 1
       ) price ON true
       LEFT JOIN LATERAL (
         SELECT count(*)::integer AS variant_count,
                coalesce(sum(ib.on_hand_qty - ib.reserved_qty), 0)::integer AS available_qty
         FROM product_variants pv
         LEFT JOIN inventory_balances ib ON ib.variant_id = pv.id
         WHERE pv.product_id = p.id AND pv.status = 'active'
       ) inventory ON true
       WHERE ${clause}
       ORDER BY ${sort}
       LIMIT $\${values.length + 1} OFFSET $\${values.length + 2}`,
      [...values, limit, offset],
    );

    return {
      data: rows.rows,
      pagination: { page, limit, total: Number(count.rows[0]?.total ?? 0), totalPages: Math.ceil(Number(count.rows[0]?.total ?? 0) / limit) },
    };
  }

  async productBySlug(slug: string) {
    const result = await this.database.query(
      `SELECT p.id, p.slug, p.title, p.short_description, p.description, p.attributes,
              c.slug AS category_slug, c.name AS category_name, b.name AS brand_name
       FROM products p
       JOIN categories c ON c.id = p.category_id
       LEFT JOIN brands b ON b.id = p.brand_id
       WHERE p.slug = $1 AND p.status = 'published'
         AND p.published_at IS NOT NULL AND p.published_at <= now()
       LIMIT 1`,
      [slug],
    );
    if (!result.rowCount) return null;
    const product = result.rows[0];
    const [media, variants] = await Promise.all([
      this.database.query(
        'SELECT id, storage_key, alt_text, media_type, sort_order FROM product_media WHERE product_id = $1 ORDER BY sort_order ASC',
        [product.id],
      ),
      this.database.query(
        `SELECT pv.id, pv.option_values, price.amount_paise, price.currency,
          CASE WHEN inventory.variant_count IS NULL THEN 'not_configured'
               WHEN inventory.available_qty > 0 THEN 'in_stock' ELSE 'out_of_stock' END AS availability_status
         FROM product_variants pv
         LEFT JOIN LATERAL (
           SELECT amount_paise, currency FROM product_variant_prices pvp
           WHERE pvp.variant_id = pv.id AND pvp.effective_from <= now()
             AND (pvp.effective_to IS NULL OR pvp.effective_to > now())
           ORDER BY pvp.effective_from DESC LIMIT 1
         ) price ON true
         LEFT JOIN LATERAL (
           SELECT count(*)::integer AS variant_count,
                  coalesce(sum(ib.on_hand_qty - ib.reserved_qty), 0)::integer AS available_qty
           FROM inventory_balances ib WHERE ib.variant_id = pv.id
         ) inventory ON true
         WHERE pv.product_id = $1 AND pv.status = 'active' ORDER BY pv.created_at ASC`,
        [product.id],
      ),
    ]);
    return { ...product, media: media.rows, variants: variants.rows };
  }

  private toBoundedInteger(value: string | undefined, fallback: number, min: number, max: number): number {
    if (value === undefined || value.trim() === '') return fallback;
    const parsed = Number(value);
    if (!Number.isSafeInteger(parsed) || parsed < min || parsed > max) return fallback;
    return parsed;
  }
}
