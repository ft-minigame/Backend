import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { FindAllRankResponse } from '../response/findAllRank.response';
import { FindOneRankResponse } from '../response/findOneRank.response';
import { CoalitionScoresResponse } from '../response/findCoalitions.response';

@Controller('rank')
export class RankController {
  constructor(
    private readonly rankService: RankService,
    private readonly coalitionService: RankService,
  ) {}

  @Get('all')
  async findAll(): Promise<FindAllRankResponse[]> {
    return await this.rankService.findAll();
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
}
