import {IScoreDto} from './ScoreInteface';

export interface IBookDto {
  id: number,
  title: string,
  author: string,
  synopsis: string | null,
  gender: string,
  image: string | null,
  Score?: IScoreDto[]
}

export interface ISearchBookInput {
  term?: string;
}

export interface ISearchBookOutput {
  bookList: IBookDto[]
}
