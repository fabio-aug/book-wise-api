import express, { Request, Response } from 'express';

import BookServices from '../services/BookServices';
import FormatResponse from '../utils/FormatResponse';
import { ISearchBookInput } from '../interfaces/BookInterface';

const bookController = express.Router();

bookController.get('/book/search', async (req: Request<null, null, null, ISearchBookInput>, res: Response) => {
  // #swagger.tags = ['book']
  // #swagger.description = 'Pesquisar livros.'

  /*
    #swagger.parameters['term'] = {
      description: 'Termo de busca.',
      type: 'string'
    }
  */

  /*
    #swagger.parameters['page'] = {
      description: 'Página atual.',
      type: 'number'
    }
  */

  /*
    #swagger.parameters['itemsPerPage'] = {
      description: 'Quantidade de itens por página.',
      type: 'number'
    }
  */

  /*
    #swagger.parameters['idGender'] = {
      description: 'Id gênero literário.',
      type: 'number'
    }
  */

  BookServices.search(req.query).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: [{
            id: 0,
            title: 'title',
            author: 'author',
            synopsis: 'synopsis',
            image: 'image',
            averageReview: 0,
            genders: [{
              id: 0,
              label: 'label'
            }]
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

bookController.get('/book/getRandomBook', async (req: Request<null, null, null, null>, res: Response) => {
  // #swagger.tags = ['book']
  // #swagger.description = 'Buscar uma livro aleatório.'

  BookServices.getRandomBook().then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: {
          id: 0,
          title: 'title',
          author: 'author',
          synopsis: 'synopsis',
          image: 'image',
          averageReview: 0,
          genders: [{
            id: 0,
            label: 'label'
          }]
        },
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

export { bookController };
