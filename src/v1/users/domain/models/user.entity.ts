import { Game } from 'src/v1/game/domain/models/game.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserCoalitions {
  GUN = 'gun',
  GON = 'gon',
  GAM = 'gam',
  LEE = 'lee',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  intraId: string;

  @Column({
    type: 'enum',
    enum: UserCoalitions,
  })
  coalitions: UserCoalitions;

  @Column()
  character: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Game, (game) => game.user)
  games: Game[];
}
