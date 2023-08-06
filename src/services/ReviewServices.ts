import { PrismaClient } from '@prisma/client';

import BookServices from './BookServices';
import { IReviewCreateInput, IReviewDto, IReviewUpdateInput } from '../interfaces/ReviewInterface';

const PC = new PrismaClient();

async function create(params: IReviewCreateInput): Promise<IReviewDto> {
  const data = await PC.review.create({
    data: {
      stars: Number(params.stars),
      idBook: Number(params.idBook),
      idUser: Number(params.idUser),
    }
  });

  const newAverage = await getAverageReviewByIdBook(params.idBook);
  BookServices.updateAverageReview(params.idBook, newAverage);

  return data;
}

async function update(params: IReviewUpdateInput): Promise<IReviewDto> {
  const data = await PC.review.update({
    where: {
      id: Number(params.id)
    },
    data: {
      stars: Number(params.stars)
    }
  });

  const newAverage = await getAverageReviewByIdBook(data.idBook);
  BookServices.updateAverageReview(data.idBook, newAverage);

  return data;
}

async function getAverageReviewByIdBook(idBook: number): Promise<number> {
  const data = await PC.review.aggregate({
    _avg: {
      stars: true,
    },
    where: {
      idBook: Number(idBook)
    }
  });
  return data._avg.stars || 0;
}

export default { create, update };
