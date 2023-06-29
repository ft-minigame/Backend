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
    try {
      const game = this.create();

      game.user = user;
      return await this.save(game);
    } catch (error) {
      console.log(error);
      throw new Error('Game not created!');
    }
  }
}
