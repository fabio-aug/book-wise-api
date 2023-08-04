import {IScoreDto} from './ScoreInteface';

export interface IUserDto {
  id: number,
  email: string,
  name: string,
  password: string,
  Score?: IScoreDto[]
}
