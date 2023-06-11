import { Injectable } from '@nestjs/common';
import { GameRepository } from '../repositories/game.repository';
import { Game } from '../models/game.entity';
import { CreateGameDto } from '../../dto/create-game.dto';
import { UserRepository } from 'src/v1/users/domain/repositories/users.repository';

@Injectable()
export class GameService {
  constructor(
    private readonly gameRepository: GameRepository,
    private readonly userRepository: UserRepository,
  ) {}
  async createAndSave(createGameDto: CreateGameDto): Promise<Game> {
    const user = await this.userRepository.findOneBy({
      intraId: createGameDto.intraId,
    });
    if (!user) {
      throw new Error('User not found');
    }
    return await this.gameRepository.createAndSave(createGameDto, user);
  }
}
