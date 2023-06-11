import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserCoalitions } from '../domain/models/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly intraId: string;

  @IsEnum(UserCoalitions)
  @IsNotEmpty()
  readonly coalitions: UserCoalitions;
}
