const express = require('express');
const user_routes = require('./users.routes');
const events_routes = require('./events.routes');
const routes = express.Router();


routes.use('/events', events_routes);
routes.use('/user', user_routes);
module.exports = routes;