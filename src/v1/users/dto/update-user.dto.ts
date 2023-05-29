import { IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  readonly character: number;
}
