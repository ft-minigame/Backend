import { UserCoalitions } from '../../users/domain/models/user.entity';

export interface FindAllRankResponse {
  nickname: string;
  score: number;
  coalitions: UserCoalitions;
  createdAt: Date;
  intraId: string;
}
