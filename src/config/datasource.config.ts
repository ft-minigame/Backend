import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: 'svc.sel3.cloudtype.app',
  port: 32251,
  username: 'root',
  password: '1234',
  database: 'MINI',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  //migrationsTableName: 'migrations',
});
