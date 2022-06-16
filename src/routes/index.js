const express = require('express');
const user_routes = require('./users.routes');
const routes = express.Router();

routes.use('/user', user_routes);
module.exports = routes;