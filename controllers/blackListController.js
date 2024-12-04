const BlackList = require('../models/blackListModel'); 

// 1. Agregar número a la lista negra
exports.addNumberToBlacklist = async (req, res) => {
  try {
    const blacklist = await BlackList.create(req.body);
    res.status(200).json(blacklist);
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({ message: 'El número de teléfono ya existe en la lista negra.' });
    }
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 2. Listar números en la lista negra
exports.getBlacklistNumbers = async (req, res) => {
  try {
    const blacklist = await BlackList.find({});
    res.status(200).json(blacklist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 3. Eliminar número de la lista negra
exports.deleteNumberFromBlacklist = async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    const blacklist = await BlackList.findOneAndDelete({ phoneNumber });

    if (!blacklist) {
      return res.status(404).json({ message: 'No se encontró ningún número con ese teléfono en la lista negra.' });
    }

    res.status(200).json({ message: 'Número eliminado de la lista negra correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};