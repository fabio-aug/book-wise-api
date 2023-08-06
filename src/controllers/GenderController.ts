import express, { Request, Response } from 'express';

import FormatResponse from '../utils/FormatResponse';
import GenderServices from '../services/GenderServices';

const genderController = express.Router();

genderController.get('/gender/getAll', async (req: Request<null, null, null, null>, res: Response) => {
  // #swagger.tags = ['gender']
  // #swagger.description = 'Buscar todos os gêneros.'

  GenderServices.getAll().then(async (response) => {
    res.status(200).json(FormatResponse.success(response));
  }).catch(async (error: Error) => {
    res.status(500).json(FormatResponse.error(error.message));
  });

  /*
    #swagger.responses[200] = {
      schema: {
        data: [{
          id: 0,
          label: 'label'
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

export { genderController };
