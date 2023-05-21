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

  @Column({ length: 30, unique: true })
  intraId: string;

  @Column({
    type: 'enum',
    enum: UserCoalitions,
  })
  coalitions: UserCoalitions;

  @Column()
  character: number; // 캐릭터가 추가될 가능성이 있음 => number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Game, (game) => game.user)
  games: Game[];
}
