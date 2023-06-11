import { Injectable } from '@nestjs/common';
import { RankRepository } from '../repositories/rank.repository';
import { FindAllRankResponse } from '../../response/findAllRank.response';
import { FindOneRankResponse } from '../../response/findOneRank.response';
import { UserCoalitions } from '../../../users/domain/models/user.entity';
import { CoalitionScoresResponse } from '../../response/findCoalitions.response';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAll(): Promise<FindAllRankResponse[]> {
    return await this.rankRepository.findAll();
  }

  async findOneBy(intraId: string): Promise<FindOneRankResponse> {
    return await this.rankRepository.findOneByIntraId(intraId);
  }

  async findCoalitionScores(): Promise<CoalitionScoresResponse> {
    const scores: Record<string, number> = {};

    for (const coalition of Object.values(UserCoalitions)) {
      const totalScore = await this.rankRepository.findScoresByCoalition(
        coalition,
      );
      scores[coalition] = totalScore;
    }

    return new CoalitionScoresResponse(scores);
  }
}
