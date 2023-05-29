import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Game } from 'src/v1/game/domain/models/game.entity';
import { FindAllRankDto } from '../../dto/findAll-rank.dto';
import { FindOneRankDto } from '../../dto/findOne-rank.dto';

@Injectable()
export class RankRepository extends Repository<Game> {
  constructor(private dataSources: DataSource) {
    super(Game, dataSources.createEntityManager());
  }

  async findAll(): Promise<FindAllRankDto[]> {
    const games = await this.find({ relations: ['user'] });

    return games.map((game) => ({
      nickname: game.nickname,
      score: game.score,
      coalitions: game.user.coalitions,
      createdAt: game.createdAt,
      intraId: game.user.intraId,
    }));
  }

  async findDtoById(userId: string): Promise<FindOneRankDto> {
    const one = await this.createQueryBuilder('game')
      .innerJoin('game.user', 'user')
      .where('user.id = :userId', { userId })
      .getOne();

    const gameUserSummaryDto = new FindOneRankDto();
    gameUserSummaryDto.createdAt = one.createdAt;
    gameUserSummaryDto.score = one.score;
    gameUserSummaryDto.nickname = one.nickname;

    return gameUserSummaryDto;
  }
}
