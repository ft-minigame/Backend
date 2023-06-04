import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';
import { FindAllRankResponse } from '../../response/findAllRank.response';
import { FindOneRankResponse } from '../../response/findOneRank.response';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAll(): Promise<FindAllRankResponse[]> {
    return await this.rankRepository.findAll();
  }

  async findOneBy(intraId: string): Promise<FindOneRankResponse> {
    return await this.rankRepository.findOneByIntraId(intraId);
  }
}
