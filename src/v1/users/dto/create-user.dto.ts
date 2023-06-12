import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EUserCoalitions } from '../domain/models/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly intraId: string;

  @IsEnum(EUserCoalitions)
  @IsNotEmpty()
  readonly coalitions: EUserCoalitions;
}
