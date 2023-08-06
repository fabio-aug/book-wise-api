import { IBookDto } from './BookInterface';

export interface IGenderDto {
  id: number,
  label: string,
  books?: IBookDto[]
}
