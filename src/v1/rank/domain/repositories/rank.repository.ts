import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from 'src/v1/game/domain/models/game.entity';
import { FindAllRankResponse } from '../../response/findAllRank.response';
import { FindOneRankResponse } from '../../response/findOneRank.response';

@Injectable()
export class RankRepository extends Repository<Game> {
  constructor(private dataSources: DataSource) {
    super(Game, dataSources.createEntityManager());
  }

  async findAll(): Promise<FindAllRankResponse[]> {
    const games = await this.find({ relations: ['user'] });

    return games.map((game) => ({
      nickname: game.nickname,
      score: game.score,
      coalitions: game.user.coalitions,
      createdAt: game.createdAt,
      intraId: game.user.intraId,
    }));
  }

  async findOneByIntraId(intraId: string): Promise<FindOneRankResponse> {
    const { createdAt, score, nickname } = await this.createQueryBuilder('game')
      .innerJoin('game.user', 'user')
      .where('user.intraId = :intraId', { intraId })
      .getOne();

    return {
      createdAt,
      score,
      nickname,
    };
  }
}
