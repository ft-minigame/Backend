import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../users/domain/models/user.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  score: number;

  @Column({ length: 20, default: 'nickname' })
  nickname: string;

  @Column({ default: null })
  playTime: Date;

  @Column({ type: Boolean, default: false })
  hidden: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.games)
  user: User;
}
