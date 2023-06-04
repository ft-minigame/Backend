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
    console.log('bbbbbbb');
    return await this.userRepository.findOneByIntraId(intraId);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOrCreate(intraId: string): Promise<User> {
    const user = await this.findOneByIntraId(intraId);

    if (!user) {
      return await this.create({ intraId });
    }

    return user;
  }
}
