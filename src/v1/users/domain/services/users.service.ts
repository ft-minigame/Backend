import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { UserRepository } from '../repositories/users.repository';
import { User } from '../models/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createAndSave(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOneByIntraId(intraId: string): Promise<User | null> {
    return await this.userRepository.findOneByIntraId(intraId);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
