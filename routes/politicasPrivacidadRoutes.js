const express = require('express');
const router = express.Router();
const politicasPrivacidadController = require('../controllers/politicasPrivacidadController');

// Rutas para políticas de privacidad

router.post('/accept', politicasPrivacidadController.acceptPoliticaPrivacidad);
router.post('/reject', politicasPrivacidadController.rejectPoliticaPrivacidad);
router.get('/:phoneNumber', politicasPrivacidadController.checkPoliticaPrivacidad);

module.exports = router;