const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

morgan.token('body', req => {
  return JSON.stringify(req.body)
})

const valmorgan = ':method :url :status :res[content-length] - :response-time ms :body';

function expressConfig(app) {
  app.use(express.json());
  app.use(morgan(valmorgan));
  app.use(cors());
}

module.exports = expressConfig;
