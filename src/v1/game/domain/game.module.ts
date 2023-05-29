import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './models/game.entity';
import { GameController } from '../controllers/game.controller';
import { GameService } from './services/game.service';
import { GameRepository } from './repositories/game.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [GameController],
  providers: [GameService, GameRepository],
})
export class GameModule {}
