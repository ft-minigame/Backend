import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repositories/game.repository';
import { Game } from '../models/game.entity';
import { CreateGameDto } from '../../dto/create-game.dto';
import { User } from 'src/v1/users/domain/models/user.entity';

@Injectable()
export class GameService {
  constructor(private readonly gameRepository: GameRepository) {}

  async createAndSave(createGameDto: CreateGameDto, user: User): Promise<Game> {
    console.log('GameService.createAndSave()');
    return await this.gameRepository.createAndSave(createGameDto, user);
  }
}
