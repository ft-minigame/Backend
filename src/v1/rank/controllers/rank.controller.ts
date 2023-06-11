import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { FindAllRankResponse } from '../response/findAllRank.response';
import { FindOneRankResponse } from '../response/findOneRank.response';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<FindAllRankResponse[]> {
    return await this.rankService.findAll();
  }

  @Get(':intraId')
  async findOneBy(
    @Param('intraId') intraId: string,
  ): Promise<FindOneRankResponse> {
    return await this.rankService.findOneBy(intraId);
  }
}
