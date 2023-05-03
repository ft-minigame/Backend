import { registerAs } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export default registerAs(
  'database',
  (): MysqlConnectionOptions => ({
    type: 'mariadb',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 32251,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
  }),
);
