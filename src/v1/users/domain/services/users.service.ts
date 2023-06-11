import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createAndSave(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createAndSave(createUserDto);
  }

  async findOneByIntraId(intraId: string): Promise<User | null> {
    return await this.userRepository.findOneByIntraId(intraId);
  }
}
