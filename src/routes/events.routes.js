const express = require('express');
const events_router = express.Router();
const events_controller = require('../controllers/events.controllers');
events_router.post('/', events_controller.create);
events_router.get('/', events_controller.index)

module.exports = events_router;