import swaggerAutogen from 'swagger-autogen';

const swaggerConfig = {
  info: {
    title: 'My API',
    description: 'Description of my API',
  },
  host: 'localhost:4000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; // File to generate
const endpointsFiles = ['./src/routes/index.ts']; // Your route entry file

swaggerAutogen()(outputFile, endpointsFiles, swaggerConfig).then(() => {
  console.log('Swagger documentation generated successfully.');
});
