import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './database.config';
import { DataSource } from 'typeorm';

export const typeOrmConfig = {
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
  ],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) =>
    configService.get('database'),
  dataSourceFactory: async (options) => new DataSource(options).initialize(),
};
