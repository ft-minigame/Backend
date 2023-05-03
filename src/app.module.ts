import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DataSource } from 'typeorm';

const typeOrmConfig = {
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
