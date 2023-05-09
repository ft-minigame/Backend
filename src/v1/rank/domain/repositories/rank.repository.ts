import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Rank } from "../models/rank.entity";

@Injectable()
export class RankRepository extends Repository<Rank> {
    constructor(private dataSources: DataSource) {
        super(Rank, dataSources.createEntityManager());
    }

    async findAll(): Promise<Rank[]> {
        return this.find();
    }
}