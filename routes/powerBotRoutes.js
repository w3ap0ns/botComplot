const express = require('express');
const router = express.Router();
const powerBotController = require('../controllers/powerBotController');

// Rutas para powerBot

router.post('/', powerBotController.createPowerBot);
router.put('/toggle', powerBotController.togglePowerBotStatus);
router.get('/status', powerBotController.getPowerBotStatus);

module.exports = router;