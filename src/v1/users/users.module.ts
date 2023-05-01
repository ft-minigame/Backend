import { Module } from '@nestjs/common';
import { UsersService } from './domain/services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/models/user.entity';
import { UserRepository } from './domain/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
