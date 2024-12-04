const express = require('express');
const router = express.Router();
const adminNumberController = require('../controllers/adminNumberController'); 

// Rutas para adminNumber

router.post('/', adminNumberController.createAdminNumber);
router.put('/:phoneNumber', adminNumberController.updateAdminNumberName);
router.delete('/:phoneNumber', adminNumberController.deleteAdminNumber);
router.get('/', adminNumberController.getAllAdminNumbers);
router.post('/existe', adminNumberController.checkAdminNumberExists);

module.exports = router;
