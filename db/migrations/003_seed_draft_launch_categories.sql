INSERT INTO categories (slug, name, status, sort_order)
VALUES
  ('golf-balls', 'Golf Balls', 'draft', 10),
  ('apparel', 'Apparel', 'draft', 20),
  ('footwear', 'Footwear', 'draft', 30),
  ('bags', 'Golf Bags', 'draft', 40),
  ('accessories', 'Accessories', 'draft', 50)
ON CONFLICT (slug) DO NOTHING;
