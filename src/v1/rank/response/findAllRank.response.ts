import { EUserCoalitions } from '../../users/domain/models/user.entity';

export interface FindAllRankResponse {
  nickname: string;
  score: number;
  coalitions: EUserCoalitions;
  createdAt: Date;
  intraId: string;
}
