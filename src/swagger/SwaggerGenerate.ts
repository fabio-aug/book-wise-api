// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    version: '1.0.0',
    title: 'Book Wise RestAPI',
    description: 'Teste prático para a matéria de Mobile do ' +
      'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG) - Campus Sabará.'
  },
  host: 'localhost:3001',
  schemes: ['http', 'https']
};

const endpointsFiles = [
  './src/controllers/BookController.ts',
  './src/controllers/UserController.ts',
  './src/controllers/GenderController.ts',
  './src/controllers/ReviewController.ts',
];

const outputFile = './src/swagger/swagger_doc.json';

swaggerAutogen(outputFile, endpointsFiles, doc);
