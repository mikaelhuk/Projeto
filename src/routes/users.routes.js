const express = require('express');
const user_router = express.Router();
const user_controller = require('../controllers/users.controllers');
user_router.post('/', user_controller.create);

module.exports = user_router;