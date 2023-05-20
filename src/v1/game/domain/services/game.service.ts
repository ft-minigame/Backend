import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repositories/game.repository';
import { CreateGameDto } from '../../dto/create-game.dto';
import { UpdateGameDto } from '../../dto/update-game.dto';
import { Game } from '../models/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly gameRepository: GameRepository) {}
  async create(createUserDto: CreateGameDto): Promise<Game> {
    return await this.gameRepository.createAndSave(createUserDto);
  }

  findAll() {
    return `This action returns all game data`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateGameDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
