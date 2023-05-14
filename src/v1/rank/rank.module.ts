import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankController } from './controllers/rank.controller';
import { RankService } from './domain/services/rank.service';
import { RankRepository } from './domain/repositories/rank.repository';
import { Game } from '../game/domain/models/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [RankController],
  providers: [RankService, RankRepository],
})
export class RankModule {}
