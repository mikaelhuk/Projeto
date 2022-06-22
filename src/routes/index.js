const express = require('express');
const user_routes = require('./users.routes');
const events_routes = require('./events.routes');
const login_routes = require('./login.routes');
const routes = express.Router();


routes.use('/events', events_routes);
routes.use('/user', user_routes);
routes.use('/login', login_routes);

module.exports = routes;