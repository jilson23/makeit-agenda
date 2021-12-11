const helloworld = require('./api/helloworld');
const person = require('./api/person')

function routes(app) {
  app.use('/api/helloworld', helloworld);
  app.use('/api/person', person);
}

module.exports = routes;
