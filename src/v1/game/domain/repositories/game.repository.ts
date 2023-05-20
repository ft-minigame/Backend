import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from '../models/game.entity';

@Injectable()
export class GameRepository extends Repository<Game> {
  constructor(private dataSources: DataSource) {
    super(Game, dataSources.createEntityManager());
  }

  async createAndSave(gameData: Partial<Game>): Promise<Game> {
    const game = this.create(gameData);
    await this.save(game);
    return game;
  }

  async updateById(id: string, updateData: Partial<Game>): Promise<Game> {
    await this.update(id, updateData);
    return this.findOneBy({ id });
  }

  async deleteById(id: string): Promise<void> {
    await this.delete(id);
  }
}
