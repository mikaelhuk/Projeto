const express = require('express');
const events_router = express.Router();
const events_controller = require('../controllers/events.controllers');
events_router.post('/', events_controller.create);
events_router.get('/:user_id', events_controller.index);
events_router.put('/:id', events_controller.update);
events_router.delete('/:id', events_controller.delete);

module.exports = events_router;