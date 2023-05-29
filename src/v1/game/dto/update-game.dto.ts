import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/v1/users/domain/models/user.entity';

export class UpdateGameDto {
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  user: User;
}
