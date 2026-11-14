import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResult, QueryResultRow } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private readonly pool = new Pool({
    connectionString: process.env.DATABASE_URL ?? 'postgresql://golf_app:golf_local_dev_only@localhost:5432/golf_commerce',
    max: 5,
    connectionTimeoutMillis: 3000,
    idleTimeoutMillis: 10000,
    application_name: 'golf-commerce-api',
  });

  async query<T extends QueryResultRow = QueryResultRow>(
    sql: string,
    values: (string | number | null)[] = [],
  ): Promise<QueryResult<T>> {
    return this.pool.query<T>(sql, values);
  }

  async checkConnection(): Promise<boolean> {
    try { await this.pool.query('SELECT 1'); return true; }
    catch { return false; }
  }

  async onModuleDestroy(): Promise<void> { await this.pool.end(); }
}
