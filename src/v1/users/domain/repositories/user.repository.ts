import { Repository, DataSource } from 'typeorm';
import { User } from '../models/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSources: DataSource) {
    super(User, dataSources.createEntityManager());
  }

  async createAndSave(createUserDto: CreateUserDto): Promise<User> {
    return await this.createAndSave(createUserDto);
  }

  async updateById(id: string, updateData: Partial<User>): Promise<User> {
    await this.update(id, updateData);
    return this.findOneBy({ id });
  }

  async deleteById(id: string): Promise<void> {
    await this.delete(id);
  }

  async findOneByIntraId(intraId: string): Promise<User | null> {
    try {
      return await this.findOneBy({ intraId });
    } catch (err) {
      console.error(err);
      throw new Error('Failed to find user by intraId');
    }
  }
}
