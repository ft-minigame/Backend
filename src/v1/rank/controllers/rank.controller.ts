import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { FindAllRankDto } from '../dto/findAll-rank.dto';
import { FindOneRankDto } from '../dto/findOne-rank.dto';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<FindAllRankDto[]> {
    return await this.rankService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') user: string): Promise<FindOneRankDto> {
    return await this.rankService.findOneById(user);
  }
}
