CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid NULL REFERENCES categories(id) ON DELETE RESTRICT,
  slug varchar(120) NOT NULL UNIQUE,
  name varchar(160) NOT NULL,
  description text,
  status varchar(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','archived')),
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(160) NOT NULL,
  slug varchar(160) NOT NULL UNIQUE,
  status varchar(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  brand_id uuid NULL REFERENCES brands(id) ON DELETE RESTRICT,
  slug varchar(180) NOT NULL UNIQUE,
  title varchar(240) NOT NULL,
  short_description varchar(500),
  description text,
  status varchar(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','review','published','archived')),
  attributes jsonb NOT NULL DEFAULT '{}'::jsonb,
  content_source text,
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (status <> 'published' OR published_at IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS products_public_category_idx
  ON products(category_id, published_at DESC) WHERE status = 'published';
CREATE INDEX IF NOT EXISTS products_public_title_idx
  ON products USING gin (to_tsvector('simple', title)) WHERE status = 'published';

CREATE TABLE IF NOT EXISTS product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  sku varchar(80) NOT NULL UNIQUE,
  barcode varchar(80) UNIQUE,
  option_values jsonb NOT NULL DEFAULT '{}'::jsonb,
  status varchar(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','disabled','archived')),
  weight_grams integer CHECK (weight_grams IS NULL OR weight_grams > 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS product_variants_product_idx ON product_variants(product_id);

CREATE TABLE IF NOT EXISTS product_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  variant_id uuid NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  storage_key text NOT NULL,
  alt_text varchar(300) NOT NULL,
  media_type varchar(30) NOT NULL DEFAULT 'image',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (length(trim(alt_text)) > 0)
);

CREATE INDEX IF NOT EXISTS product_media_product_idx ON product_media(product_id, sort_order);

CREATE TABLE IF NOT EXISTS product_variant_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  amount_paise bigint NOT NULL CHECK (amount_paise >= 0),
  currency char(3) NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),
  effective_from timestamptz NOT NULL,
  effective_to timestamptz,
  approved_by text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (effective_to IS NULL OR effective_to > effective_from)
);

CREATE INDEX IF NOT EXISTS variant_price_current_idx
  ON product_variant_prices(variant_id, effective_from DESC, effective_to);

CREATE TABLE IF NOT EXISTS inventory_balances (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  location_code varchar(80) NOT NULL,
  on_hand_qty integer NOT NULL DEFAULT 0 CHECK (on_hand_qty >= 0),
  reserved_qty integer NOT NULL DEFAULT 0 CHECK (reserved_qty >= 0 AND reserved_qty <= on_hand_qty),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(variant_id, location_code)
);

CREATE TABLE IF NOT EXISTS catalog_schema_migrations (
  name varchar(255) PRIMARY KEY,
  checksum char(64) NOT NULL,
  applied_at timestamptz NOT NULL DEFAULT now()
);
