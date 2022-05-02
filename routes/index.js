const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ashley Mickelsen');
});

routes.use('/contacts', require('./contacts'));

module.exports = routes;