import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './v1/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './v1/users/domain/repositories/users.repository';
import { User } from './v1/users/domain/models/user.entity';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([UserRepository, User]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
