import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeORM.config';
import { RankModule } from './v1/rank/rank.module';
import { AuthModule } from './v1/auth/auth.module';
import { GameModule } from './v1/game/domain/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UsersModule,
    RankModule,
    AuthModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
