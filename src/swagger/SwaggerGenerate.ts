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
  schemes: ['http']
};

const endpointsFiles = [
  './src/controllers/BookController.ts',
];

const outputFile = './src/swagger/swagger_doc.json';

swaggerAutogen(outputFile, endpointsFiles, doc);
