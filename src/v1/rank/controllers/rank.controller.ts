import { Controller, Get, Param } from '@nestjs/common';
import { RankService } from '../domain/services/rank.service';
import { Game } from 'src/v1/game/domain/models/game.entity';

@Controller('rank')
export class RankController {
  constructor(private readonly rankService: RankService) {}

  @Get('all')
  async findAll(): Promise<Game[]> {
    console.log('RankController:findAll');
    return await this.rankService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Game> {
    return await this.rankService.findOneById(id);
  }
}
