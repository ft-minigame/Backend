import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { Game } from '../domain/models/game.entity';
import { GameService } from '../domain/services/game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('start')
  async createAndSave(): Promise<Game> {
    return await this.gameService.createAndSave();
  }

  @Patch(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateGameDto,
  ): Promise<Game> {
    return await this.gameService.updateById(id, updateGameDto);
  }
}
