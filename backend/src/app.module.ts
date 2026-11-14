import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { DatabaseModule } from './database/database.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [DatabaseModule, CatalogModule],
  controllers: [HealthController],
})
export class AppModule {}
