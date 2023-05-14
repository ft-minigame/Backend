import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAll() {
    return await this.rankRepository.findAll();
  }
}
