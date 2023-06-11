import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  playTime: Date;

  @IsNotEmpty()
  @IsString()
  intraId: string;
}
