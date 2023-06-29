import { Injectable } from '@nestjs/common';
import { EOrder, RankRepository } from '../repositories/rank.repository';
import { FindOneRankResponse } from '../../response/findOneRank.response';
import { EUserCoalitions } from '../../../users/domain/models/user.entity';
import { CoalitionScoresResponse } from '../../response/findCoalitions.response';
import { Game } from 'src/v1/game/domain/models/game.entity';

@Injectable()
export class RankService {
  constructor(private readonly rankRepository: RankRepository) {}

  async findAllOrderByScore(order: EOrder): Promise<Game[]> {
    return await this.rankRepository.findAllOrderByScore(order);
  }

  async findManyBy(intraId: string): Promise<FindOneRankResponse[]> {
    return await this.rankRepository.findManyByIntraId(intraId);
  }

  async findCoalitionScores(): Promise<CoalitionScoresResponse> {
    const scores: Record<string, number> = {};

    for (const coalition of Object.values(EUserCoalitions)) {
      const totalScore = await this.rankRepository.findScoresByCoalition(
        coalition,
      );
      scores[coalition] = totalScore;
    }

    return new CoalitionScoresResponse(scores);
  }
}
