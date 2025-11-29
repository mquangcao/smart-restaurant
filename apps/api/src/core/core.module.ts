import { Module } from '@nestjs/common';

import { AxiosModule } from './axios/axios.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [DatabaseModule, HealthModule, AxiosModule.forRoot()],
  exports: [DatabaseModule, HealthModule, AxiosModule],
})
export class CoreModule {
  static forRoot() {
    return {
      global: true,
      module: CoreModule,
    };
  }
}
