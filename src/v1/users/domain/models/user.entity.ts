import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UserCoalitions{
    GUN = "gun",
    GON = "gon",
    GAM = "gam",
    LEE = "lee",
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    intraId: string;

    @Column({
        type: "enum",
        enum: UserCoalitions,
    })
    coalitions: UserCoalitions;

    @Column()
    character: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
