import express, { Request, Response } from 'express';

import FormatResponse from '../utils/FormatResponse';
import ReviewServices from '../services/ReviewServices';
import { IReviewCreateInput, IReviewUpdateInput } from '../interfaces/ReviewInterface';

const reviewController = express.Router();

reviewController.post('/review/create', async (req: Request<null, null, IReviewCreateInput, null>, res: Response) => {
  // #swagger.tags = ['review']
  // #swagger.description = 'Criar review de livro.'

  /*
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
        stars: 0,
        idBook: 0,
        idUser: 0
      },
      description: 'Review',
    }
  */

  ReviewServices.create(req.body).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: {
          id: 0,
          stars: 0,
          idUser: 0,
          idBook: 0
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

reviewController.put('/review/update', async (req: Request<null, null, IReviewUpdateInput, null>, res: Response) => {
  // #swagger.tags = ['review']
  // #swagger.description = 'Atualizar review de livro.'

  /*
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
        id: 0,
        stars: 0
      },
      description: 'Review',
    }
  */

  ReviewServices.update(req.body).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: {
          id: 0,
          stars: 0,
          idUser: 0,
          idBook: 0
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

export { reviewController };
