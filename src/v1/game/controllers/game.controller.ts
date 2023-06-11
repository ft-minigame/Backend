import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { Game } from '../domain/models/game.entity';
import { GameService } from '../domain/services/game.service';
import { CreateGameDto } from '../dto/create-game.dto';
import { UserRepository } from 'src/v1/users/domain/repositories/users.repository';

@Controller('game')
export class GameController {
  constructor(
    private readonly gameService: GameService,
    private readonly userRepository: UserRepository,
  ) {}

  @Post('create')
  async createAndSave(@Body() createGameDto: CreateGameDto): Promise<Game> {
    const user = await this.userRepository.findOneBy({
      intraId: createGameDto.intraId,
    });

    if (!user) {
      throw new Error('User not found');
    }
    return await this.gameService.createAndSave(createGameDto, user);
  }
}
