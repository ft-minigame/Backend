import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';
import { Game } from 'src/v1/game/domain/models/game.entity';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAll(): Promise<Game[]> {
    return await this.rankRepository.findAll();
  }

  async findOneById(id: string): Promise<Game> {
    return await this.rankRepository.findOneById(id);
  }
}
