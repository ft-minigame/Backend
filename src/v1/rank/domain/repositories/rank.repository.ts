import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from 'src/v1/game/domain/models/game.entity';

@Injectable()
export class RankRepository extends Repository<Game> {
  constructor(private dataSources: DataSource) {
    super(Game, dataSources.createEntityManager());
  }

  async findAll(): Promise<Game[]> {
    return await this.find();
  }
}
