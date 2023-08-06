import { IReviewDto } from './ReviewInterface';

export interface IUserDto {
  id: number,
  name: string,
  email: string,
  password: string,
  reviews?: IReviewDto[]
}

export interface ICreateUserInput {
  name: string,
  email: string,
  password: string
}

export interface ILoginUserInput {
  email: string,
  password: string
}
