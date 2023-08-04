import {IUserDto} from './UserInterface';
import {IBookDto} from './BookInterface';

export interface IScoreDto {
  id: number,
  idUser: number,
  idBook: number,
  user: IUserDto
  book: IBookDto
}
