import { User } from "src/v1/users/domain/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserCoalitions {
    GUN = "gun",
    GON = "gon",
    GAM = "gam",
    LEE = "lee",
}

@Entity()
export class Rank {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nickname: string;

    @Column()
    score: number;

    @Column({
        type: "enum",
        enum: UserCoalitions,
    })
    coalitions: UserCoalitions;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => User, user => user.ranks)
    user: User;
}