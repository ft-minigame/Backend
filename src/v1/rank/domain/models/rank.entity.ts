import { User } from "src/v1/users/domain/models/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "Rank",
})
export class Rank {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    nickname: string;

    @Column()
    score: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @UpdateDateColumn()
    playTime: Date;

    @Column()
    hidden: boolean;

    @ManyToOne(type => User, user => user.ranks)
    user: User;
}