import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { Game } from '../domain/models/game.entity';
import { GameService } from '../domain/services/game.service';
import { CreateGameDto } from '../dto/create-game.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('create')
  async createAndSave(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return await this.gameService.createAndSave(createGameDto);
  }
}
