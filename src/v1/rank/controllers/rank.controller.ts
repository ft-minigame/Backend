import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { FindAllRankResponse } from '../response/findAllRank.response';
import { FindOneRankResponse } from '../response/findOneRank.response';
import { CoalitionScoresResponse } from '../response/findCoalitions.response';
import { Game } from 'src/v1/game/domain/models/game.entity';
import { EOrder } from '../domain/repositories/rank.repository';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<FindAllRankResponse[]> {
    return this.transformToRanksResponse(
      await this.rankService.findAllOrderByScore(EOrder.DESC),
    );
  }

  @Get('coalitions')
  async findCoalitionScores(): Promise<CoalitionScoresResponse> {
    return await this.rankService.findCoalitionScores();
  }

  @Get(':intraId')
  async findOneBy(
    @Param('intraId') intraId: string,
  ): Promise<FindOneRankResponse[]> {
    return await this.rankService.findManyBy(intraId);
  }

  private transformToRanksResponse(games: Game[]) {
    return games.map((game) => ({
      nickname: game.nickname,
      score: game.score,
      coalitions: game.user.coalitions,
      createdAt: game.createdAt,
      intraId: game.user.intraId,
    }));
  }
}
