import { Controller, Get } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  findAll() {
    return this.rankService.findAll();
  }
}
