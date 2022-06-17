const express = require('express');
const login_controller = require('../controllers/login.controllers');
const login_Router = express.Router()
login_Router.post('/', login_controller.create);

module.exports = login_Router;