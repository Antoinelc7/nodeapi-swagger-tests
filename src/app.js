const express = require('express');
const hostname = '0.0.0.0';
const port = 3000;
const server = express();
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

mongoose.connect('mongodb://mongo/apinode');

server.use(express.urlencoded());
server.use(express.json());

// Routes
const postRoute = require('./api/routes/postRoute');
postRoute(server);

const commentRoute = require("./api/routes/commentRoute");
commentRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);

server.listen(port, hostname, () => {
    console.log(`Example app listening on ${hostname} port ${port}`)
});

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Node API',
        version: '1.0.0',
        description: 'Node API documentation',
      },
      servers: ['http://localhost:3000'],
    },
    apis: ['./api/routes/*.js'],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));