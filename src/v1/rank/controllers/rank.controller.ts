import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { FindAllRankResponse } from '../response/findAll-rank.response';
import { FindOneRankResponse } from '../response/findOne-rank.response';
import { FindOneRankDto } from '../dto/findOne-rank.dto';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<FindAllRankResponse[]> {
    return await this.rankService.findAll();
  }

  @Get(':id')
  async findOneById(
    @Param('id') findOneRankDto: FindOneRankDto,
  ): Promise<FindOneRankResponse> {
    return await this.rankService.findOneById(findOneRankDto);
  }
}
