import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    securityDefinitions: {
      BearerAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    definition: {
      openapi: '3.0.3',
      info: {
        servers: [
          {
            url: 'http://localhost:7000',
          },
        ],
      },
      basePath: '/social',
      tags: [
        { name: 'Post', description: 'Post api doc' },
        { name: 'User', description: 'User api doc' },
      ],
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
        },
      },
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
    },
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation generated with Swagger',
    },
  },
  apis: ['src/routes/*.ts'], // Ganti dengan lokasi file rute Anda
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
