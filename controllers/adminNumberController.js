const AdminNumber = require('../models/adminNumberModel'); 

// 1. Agregar número administrador
exports.createAdminNumber = async (req, res) => {

  const adminNumber = new AdminNumber(req.body);

  const validationError = adminNumber.validateSync();
  if (validationError) {
    // Devolver un error 400 con los mensajes de error de validación
    return res.status(400).json({ message: validationError.message }); 
  }

  try {
    await adminNumber.save();
    res.status(200).json(adminNumber);

  } catch (error) {
    // Capturar cualquier error que ocurra durante la operación 'save'
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el administrador.' });
  }
};

// 2. Actualizar el nombre de un registro
exports.updateAdminNumberName = async (req, res) => {
  try {
    const { phoneNumber } = req.params; // Asumiendo que buscas por número de teléfono
    const { name } = req.body;

    const adminNumber = await AdminNumber.findOneAndUpdate(
      { phoneNumber }, 
      { name }, 
      { new: true } // Para que devuelva el documento actualizado
    );

    if (!adminNumber) {
      return res.status(404).json({ message: 'No se encontró ningún administrador con ese número de teléfono.' });
    }

    res.status(200).json(adminNumber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// 3. Eliminar un registro por número de administrador
exports.deleteAdminNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    const adminNumber = await AdminNumber.findOneAndDelete({ phoneNumber });

    if (!adminNumber) {
      return res.status(404).json({ message: 'No se encontró ningún administrador con ese número de teléfono.' });
    }

    res.status(200).json({ message: 'Administrador eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 4. Listar todos los Administradores
exports.getAllAdminNumbers = async (req, res) => {
  try {
    const adminNumbers = await AdminNumber.find({});
    res.status(200).json(adminNumbers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 5. Buscar un administrador
exports.checkAdminNumberExists = async (req, res) => {
  try {
    const { phoneNumber } = req.body; // Obtener el número de teléfono del cuerpo de la solicitud

    // Validar que se proporcione el número de teléfono
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Se requiere el número de teléfono en el cuerpo de la petición' });
    }

    const adminNumber = await AdminNumber.findOne({ phoneNumber });

    if (adminNumber) {
      res.json({ existe: true });
    } else {
      return res.status(404).json({ existe: 'No se encontró ningún administrador con ese número de teléfono.' });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
