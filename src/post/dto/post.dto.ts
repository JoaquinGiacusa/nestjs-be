import { IsNumber, IsString } from 'class-validator';

export class CreatePost {
  @IsString()
  id: string;

  @IsString()
  text: string;

  @IsNumber()
  number: number;
}
