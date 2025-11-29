import { getConfig } from '@app/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: getConfig('core.database.type'),
      host: getConfig('core.database.host'),
      port: getConfig('core.database.port'),
      username: getConfig('core.database.username'),
      password: getConfig<string>('core.database.password'),
      database: getConfig('core.database.dbName'),
      synchronize: getConfig('core.database.synchronize'),
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
  ],
})
export class DatabaseModule {
  static forRoot() {
    return {
      global: true,
      module: DatabaseModule,
    };
  }
}
