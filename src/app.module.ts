import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeORM.config';
import { RankService } from './v1/rank/domain/services/rank.service';
import { RankModule } from './v1/rank/rank.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UsersModule, RankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
