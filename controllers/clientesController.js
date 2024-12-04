const Clientes = require('../models/clientesModel'); 

// 1. Agregar cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = await Clientes.create(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({ message: 'Ya existe un cliente con ese número de teléfono.' });
    }
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 2. Modificar datos del cliente por número de teléfono
exports.updateCliente = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    const updatedData = req.body; // Los datos a actualizar vienen en el cuerpo de la solicitud

    const cliente = await Clientes.findOneAndUpdate(
      { phoneNumber },
      updatedData,
      { new: true } // Para que devuelva el documento actualizado
    );

    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró ningún cliente con ese número de teléfono.' });
    }

    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 3. Eliminar cliente por número de teléfono
exports.deleteCliente = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    const cliente = await Clientes.findOneAndDelete({ phoneNumber });

    if (!cliente) {
      return res.status(404).json({ message: 'No se encontró ningún cliente con ese número de teléfono.' });
    }

    res.status(200).json({ message: 'Cliente eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 4. Listar todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Clientes.find({});
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};