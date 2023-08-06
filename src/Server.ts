import cors from 'cors';
import dotEnv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger/swagger_doc.json';
import { bookController } from './controllers/BookController';
import { userController } from './controllers/UserController';
import { genderController } from './controllers/GenderController';
import { reviewController } from './controllers/ReviewController';

// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
dotEnv.config();

// Configuração das rotas
app.use(bookController);
app.use(userController);
app.use(genderController);
app.use(reviewController);

// Inicialização do servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
