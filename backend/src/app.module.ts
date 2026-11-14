import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { DatabaseService } from './database/database.service';
import { HealthController } from './health/health.controller';

@Module({
  imports: [CatalogModule],
  controllers: [HealthController],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class AppModule {}
