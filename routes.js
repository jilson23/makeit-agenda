const helloworld = require('./api/helloworld');

function routes(app) {
  app.use('/api/helloworld', helloworld);
}

module.exports = routes;
