export class CreateGameDto {
  score: number = 0;

  nickname: string = '';

  playTime: Date = new Date();

  hidden: boolean = false;
}
