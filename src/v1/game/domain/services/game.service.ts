import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repositories/game.repository';
import { Game } from '../models/game.entity';
import { CreateGameDto } from '../../dto/create-game.dto';
import { UpdateGameDto } from '../../dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly gameRepository: GameRepository) {}
  async createAndSave(): Promise<Game> {
    const createGameDto = new CreateGameDto();
    return await this.gameRepository.createAndSave(createGameDto);
  }

  async updateById(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    return await this.gameRepository.updateById(id, updateGameDto);
  }
}
