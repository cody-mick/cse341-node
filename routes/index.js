const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Ashley Mickelsen');
  });

module.exports = routes;