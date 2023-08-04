import express, {Request, Response} from 'express';

import BookServices from '../services/BookServices';
import FormatResponse from '../utils/FormatResponse';
import {ISearchBookInput} from '../interfaces/BookInterface';

const bookController = express.Router();

bookController.get('/book/search', async (req: Request<null, null, null, ISearchBookInput>, res: Response) => {
  // #swagger.tags = ['book']
  // #swagger.description = 'Pesquisar livros'

  /*
    #swagger.parameters['term'] = {
      description: 'Termo para buscar a livro',
      type: 'string'
    }
  */

  const query = req.query;
  BookServices.search(query.term).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: [{
          id: int,
          title: string,
          author: string,
          synopsis?: string,
          gender: string,
          image?: string,
          Score: Score[]
        }],
        status: true
      },
      description: 'Sucesso'
    }
  */

  /*
    #swagger.responses[500] = {
      schema: {
        msg: 'Mensagem de erro.',
        status: false
      },
      description: 'Erro'
    }
  */
});

export {bookController};
