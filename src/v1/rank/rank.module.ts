import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rank } from "./domain/models/rank.entity";
import { UsersController } from "../users/controllers/users.controller";
import { RankController } from "./controllers/rank.controller";
import { RankService } from "./domain/services/rank.service";
import { RankRepository } from "./domain/repositories/rank.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Rank])],
    controllers:[RankController],
    providers: [RankService, RankRepository],
})export class RankModule {}