import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
@Controller('health')
export class HealthController {
  constructor(private readonly database: DatabaseService) {}
  @Get()
  health() {
    return { status: 'ok', service: 'golf-commerce-api', timestamp: new Date().toISOString() };
  }
  @Get('ready')
  async readiness() {
    const databaseReady = await this.database.checkConnection();
    if (!databaseReady) {
      throw new ServiceUnavailableException({ status: 'not_ready', checks: { database: 'unavailable' } });
    }
    return { status: 'ready', checks: { database: 'available' }, timestamp: new Date().toISOString() };
  }
}
