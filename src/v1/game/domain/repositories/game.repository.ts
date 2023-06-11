import { Injectable } from '@nestjs/common';
import { Game } from '../models/game.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateGameDto } from '../../dto/create-game.dto';
import { User } from 'src/v1/users/domain/models/user.entity';

@Injectable()
export class GameRepository extends Repository<Game> {
  constructor(private gameSources: DataSource) {
    super(Game, gameSources.createEntityManager());
  }

  async createAndSave(createGameDto: CreateGameDto, user: User): Promise<Game> {
    const game = this.create(createGameDto);
    if (!game) {
      throw new Error('Game not created!');
    }
    game.user = user;
    await this.save(game);
    return game;
  }
}
