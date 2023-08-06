import { PrismaClient } from '@prisma/client';
import { IBookDto, ISearchBookInput } from '../interfaces/BookInterface';

const PC = new PrismaClient();

async function search(params: ISearchBookInput): Promise<IBookDto[]> {
  const data: IBookDto[] = await PC.book.findMany({
    take: Number(params.itemsPerPage),
    skip: Number(params.itemsPerPage * params.page),
    include: {
      genders: {
        select: {
          id: true,
          label: true,
        }
      }
    },
    where: {
      OR: [
        { title: { contains: `%${params.term || ''}%` } },
        { author: { contains: `%${params.term || ''}%` } },
        { synopsis: { contains: `%${params.term || ''}%` } }
      ],
      ...(Number(params.idGender) !== 0 ? {
        genders: {
          some: {
            id: Number(params.idGender)
          }
        }
      } : {})
    }
  });
  return data;
}

async function updateAverageReview(idBook: number, average: number): Promise<IBookDto> {
  const data = await PC.book.update({
    where: {
      id: Number(idBook)
    },
    data: {
      averageReview: Number(average)
    }
  });
  return data;
}

async function getRandomBook(): Promise<IBookDto> {
  const total = await PC.book.count();
  const randomId = Math.floor(Math.random() * (total - 1) + 1);

  const data = await PC.book.findUnique({
    where: {
      id: Number(randomId)
    },
    include: {
      genders: {
        select: {
          id: true,
          label: true,
        }
      }
    },
  });

  if (data === null) throw new Error('Erro ao buscar livro aleatório.');

  return data;
}

export default { search, updateAverageReview, getRandomBook };
