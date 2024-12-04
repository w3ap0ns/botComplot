const express = require('express');
const router = express.Router();
const blacklistController = require('../controllers/blackListController'); 

// Rutas para blacklist

router.post('/', blacklistController.addNumberToBlacklist);
router.get('/', blacklistController.getBlacklistNumbers);
router.delete('/:phoneNumber', blacklistController.deleteNumberFromBlacklist);

module.exports = router;