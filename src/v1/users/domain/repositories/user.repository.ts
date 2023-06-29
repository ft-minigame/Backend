import { Repository, DataSource } from 'typeorm';
import { User } from '../models/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSources: DataSource) {
    super(User, dataSources.createEntityManager());
  }

  async createAndSave(createUserDto: CreateUserDto): Promise<User> {
    return await this.createAndSave(createUserDto);
  }

  async findOneByIntraId(intraId: string): Promise<User | null> {
    try {
      return await this.findOneBy({ intraId });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

  async findOneByIntraIdOrFail(intraId: string): Promise<User> {
    try {
      return await this.findOneByOrFail({ intraId });
    } catch (err) {
      console.error(err);
      throw new NotFoundException('Failed to find user by intraId');
    }
  }
}
