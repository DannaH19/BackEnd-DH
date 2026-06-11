import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';

const options: swaggerJSDoc.Options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Library',
      version: '1.0.0',
      description: 'API para gestión de biblioteca con préstamos, libros, autores y más',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor de desarrollo',
      },
      {
        url: 'https://library-dh.onrender.com/api/v1',
        description: 'Documentacion de endpoints de la biblioteca',
    }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: [path.join(__dirname, '../modules/**/*.routes.{ts,js}')],
};

export const openApiSpec = swaggerJSDoc(options);