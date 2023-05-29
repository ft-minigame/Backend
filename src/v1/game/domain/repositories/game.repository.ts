import { Injectable } from '@nestjs/common';
import { Game } from '../models/game.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class GameRepository extends Repository<Game> {
  constructor(private gameSources: DataSource) {
    super(Game, gameSources.createEntityManager());
  }

  async createAndSave(gameData: Partial<Game>): Promise<Game> {
    const game = this.create(gameData);
    await this.save(game);
    return game;
  }
}
