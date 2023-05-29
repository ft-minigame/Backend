import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from 'src/v1/game/domain/models/game.entity';
import { FindAllRankResponse } from '../../response/findAll-rank.response';
import { FindOneRankResponse } from '../../response/findOne-rank.response';
import { FindOneRankDto } from '../../dto/findOne-rank.dto';

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

  async findDtoById(
    findOneRankDto: FindOneRankDto,
  ): Promise<FindOneRankResponse> {
    const { createdAt, score, nickname } = await this.createQueryBuilder('game')
      .innerJoin('game.user', 'user')
      .where('user.id = :userId', { userId: findOneRankDto.userId })
      .getOne();

    return {
      createdAt,
      score,
      nickname,
    };
  }
}
