import { IBookDto } from './BookInterface';
import { IUserDto } from './UserInterfaces';

export interface IReviewDto {
  id: number,
  stars: number,
  idUser: number,
  idBook: number,
  user?: IUserDto,
  book?: IBookDto
}

export interface IReviewCreateInput {
  stars: number,
  idBook: number,
  idUser: number,
}

export interface IReviewUpdateInput {
  id: number,
  stars: number
}

export interface IReviewByIdUserInput {
  idUser: number
}
