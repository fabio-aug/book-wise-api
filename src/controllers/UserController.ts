import express, { Request, Response } from 'express';

import UserServices from '../services/UserServices';
import FormatResponse from '../utils/FormatResponse';
import { ICreateUserInput, ILoginUserInput } from '../interfaces/UserInterfaces';

const userController = express.Router();

userController.post('/user/create', async (req: Request<null, null, ICreateUserInput, null>, res: Response) => {
  // #swagger.tags = ['user']
  // #swagger.description = 'Criar usuário'

  /*
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
        name: 'string',
        email: 'string',
        password: 'string'
      },
      description: 'Usuário',
    }
  */

  UserServices.create(req.body).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: {
          id: 0,
          name: 'string',
          email: 'string',
          password: 'string',
          reviews: []
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

userController.post('/user/login', async (req: Request<null, null, ILoginUserInput, null>, res: Response) => {
  // #swagger.tags = ['user']
  // #swagger.description = 'Login de usuário'

  /*
    #swagger.parameters['obj'] = {
      in: 'body',
      schema: {
        email: 'string',
        password: 'string'
      },
      description: 'Usuário',
    }
  */

  UserServices.login(req.body).then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: {
          id: 0,
          name: 'string',
          email: 'string',
          password: 'string',
          reviews: [{
            id: 0,
            idUser: 0,
            idBook: 0,
            stars: 0
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

export { userController };
