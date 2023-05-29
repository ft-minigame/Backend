import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';
import { FindAllRankDto } from '../../dto/findAll-rank.dto';
import { FindOneRankDto } from '../../dto/findOne-rank.dto';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAll(): Promise<FindAllRankDto[]> {
    return await this.rankRepository.findAll();
  }

  async findOneById(user: string): Promise<FindOneRankDto> {
    return await this.rankRepository.findDtoById(user);
  }
}
