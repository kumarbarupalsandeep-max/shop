CREATE TABLE IF NOT EXISTS attribute_definitions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NULL REFERENCES categories(id) ON DELETE RESTRICT,
  attribute_key varchar(100) NOT NULL,
  label varchar(140) NOT NULL,
  data_type varchar(30) NOT NULL CHECK (data_type IN ('text','number','boolean','enum')),
  filterable boolean NOT NULL DEFAULT false,
  allowed_values jsonb NOT NULL DEFAULT '[]'::jsonb,
  status varchar(20) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','active','archived')),
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(category_id, attribute_key)
);

CREATE INDEX IF NOT EXISTS attribute_definitions_category_idx
  ON attribute_definitions(category_id, sort_order)
  WHERE status = 'active' AND filterable = true;
