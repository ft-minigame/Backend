import { Injectable } from '@nestjs/common';
import { Game } from '../models/game.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class GameRepository extends Repository<Game> {
  constructor(private gameSources: DataSource) {
    super(Game, gameSources.createEntityManager());
  }
  g;

  async createAndSave(gameData: Partial<Game>): Promise<Game> {
    const game = this.create(gameData);
    await this.save(game);
    return game;
  }

  async updateById(id: string, updateData: Partial<Game>): Promise<Game> {
    await this.update(id, updateData);
    return this.findOneBy({ id });
  }
}
