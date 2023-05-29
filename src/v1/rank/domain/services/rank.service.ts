import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';
import { FindAllRankResponse } from '../../response/findAll-rank.response';
import { FindOneRankResponse } from '../../response/findOne-rank.response';

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
