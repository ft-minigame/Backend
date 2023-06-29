import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from 'src/v1/game/domain/models/game.entity';
import { EUserCoalitions } from '../../../users/domain/models/user.entity';
import { FindOneRankResponse } from '../../response/findOneRank.response';

export enum EOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

@Injectable()
export class RankRepository extends Repository<Game> {
  constructor(private readonly dataSources: DataSource) {
    super(Game, dataSources.createEntityManager());
  }

  async findAllOrderByScore(order: EOrder): Promise<Game[]> {
    try {
      return await this.createQueryBuilder('game')
        .innerJoinAndSelect('game.user', 'user')
        .orderBy('game.score', `${order}`)
        .getMany();
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  async findManyByIntraId(intraId: string): Promise<FindOneRankResponse[]> {
    try {
      const games = await this.createQueryBuilder('game')
        .innerJoin('game.user', 'user')
        .where('user.intraId = :intraId', { intraId })
        .orderBy('game.score', 'DESC')
        .getMany();

      return games.map((game) => ({
        createdAt: game.createdAt,
        score: game.score,
        nickname: game.nickname,
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findScoresByCoalition(coalition: EUserCoalitions): Promise<number> {
    const results = await this.createQueryBuilder('game')
      .innerJoin('game.user', 'user')
      .where('user.coalitions = :coalition', { coalition })
      .groupBy('user.id')
      .select('MAX(game.score)', 'max')
      .getRawMany();

    let totalScore = 0;

    for (const result of results) {
      totalScore += result.max;
    }

    return totalScore;
  }
}
