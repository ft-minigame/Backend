import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneRankDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
