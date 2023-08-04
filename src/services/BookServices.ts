import {prismaClient} from '../database/PrismaClient';
import {ISearchBookOutput} from '../interfaces/BookInterface';

// Buscar livros no banco
async function search(term = ''): Promise<ISearchBookOutput> {
  // Buscar livros de acordo com termo
  const data = await prismaClient.book.findMany({
    where: {
      title: {
        contains: `%${term}%`
      }
    }
  });

  return {
    bookList: data
  };
}


export default {search};
