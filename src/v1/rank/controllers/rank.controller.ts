import { Controller, Get } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { Game } from 'src/v1/game/domain/models/game.entity';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<Game[]> {
    return await this.rankService.findAll();
  }
}
