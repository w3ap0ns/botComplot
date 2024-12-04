const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController'); 

// Rutas para clientes

router.post('/', clientesController.createCliente);
router.put('/:phoneNumber', clientesController.updateCliente); 
router.delete('/:phoneNumber', clientesController.deleteCliente);
router.get('/', clientesController.getAllClientes); 

module.exports = router;