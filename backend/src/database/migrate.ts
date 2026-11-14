import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Pool } from 'pg';

async function migrate(): Promise<void> {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL ??
      'postgresql://golf_app:golf_local_dev_only@localhost:5432/golf_commerce',
    max: 1,
    application_name: 'golf-commerce-migrator',
  });

  try {
    await pool.query('SELECT pg_advisory_lock(72419031)');
    await pool.query(`CREATE TABLE IF NOT EXISTS catalog_schema_migrations (
      name varchar(255) PRIMARY KEY,
      checksum char(64) NOT NULL,
      applied_at timestamptz NOT NULL DEFAULT now()
    )`);

    const directory = resolve(process.cwd(), '../db/migrations');
    const files = (await readdir(directory)).filter((name) => /^\d+_[a-z0-9_-]+\.sql$/i.test(name)).sort();

    for (const name of files) {
      const sql = await readFile(resolve(directory, name), 'utf8');
      const checksum = createHash('sha256').update(sql).digest('hex');
      const existing = await pool.query<{ checksum: string }>(
        'SELECT checksum FROM catalog_schema_migrations WHERE name = $1',
        [name],
      );

      if (existing.rowCount) {
        if (existing.rows[0].checksum !== checksum) {
          throw new Error(`Applied migration was modified: ${name}`);
        }
        continue;
      }

      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        await client.query(sql);
        await client.query(
          'INSERT INTO catalog_schema_migrations (name, checksum) VALUES ($1, $2)',
          [name, checksum],
        );
        await client.query('COMMIT');
        process.stdout.write(`Applied migration: ${name}\n`);
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }
    }
  } finally {
    try { await pool.query('SELECT pg_advisory_unlock(72419031)'); } catch { /* connection may already be closed */ }
    await pool.end();
  }
}

void migrate().catch((error: unknown) => {
  process.stderr.write(`Migration failed: ${error instanceof Error ? error.message : 'unknown error'}\n`);
  process.exitCode = 1;
});
