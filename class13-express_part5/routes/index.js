const express = require('express');

const usersRouters = require('./users.router');
const booksRouters = require('./books.router');

function routerApi(app){
  const router = express.Router();
  app.use("/api/v1", router);
  router.use('/users', usersRouters);
  router.use('/books', booksRouters);
};

module.exports = routerApi;
