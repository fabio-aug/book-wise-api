import { IGenderDto } from './GenderInterface';
import { IReviewDto } from './ReviewInterface';

export interface IBookDto {
  id: number,
  title: string,
  author: string,
  synopsis: string | null,
  image: string | null,
  sharing: number,
  averageReview: number,
  reviews?: IReviewDto[]
  genders?: IGenderDto[]
}

export interface ISearchBookInput {
  page: number,
  term: string,
  idGender: number,
  itemsPerPage: number,
}
