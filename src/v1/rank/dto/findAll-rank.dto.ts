import { UserCoalitions } from '../../users/domain/models/user.entity';

export class FindAllRankDto {
  nickname: string;
  score: number;
  coalitions: UserCoalitions;
  createdAt: Date;
  intraId: string;
}
