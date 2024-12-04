const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Computer Store API'
  },
  host: 'localhost:55000',
  schemes: ['http'],
  securityDefinitions: {
    GoogleOAuth2: {
      type: 'oauth2',
      flow: 'authorizationCode',
      authorizationUrl: 'http://localhost:55000/auth/google',
      tokenUrl: 'https://oauth2.googleapis.com/token',
      clientId: process.env.GOOGLE_CLIENT_ID,  // Injecting from environment
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Injecting from environment
      description: 'Use Google OAuth2 to authenticate.',
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);