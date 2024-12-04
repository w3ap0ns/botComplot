const PowerBot = require('../models/powerBotModel');

// 1. Crear documento PowerBot (por defecto 'encendido')
exports.createPowerBot = async (req, res) => {
  try {
    // Verificar si ya existe un documento PowerBot
    let powerBot = await PowerBot.findOne();

    if (powerBot) {
      return res.status(400).json({ message: 'Ya existe PowerBot.' });
    }

    // Crear un nuevo documento con status 'encendido' (true)
    powerBot = await PowerBot.create({ status: true });

    res.status(200).json(powerBot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 2. Cambiar estado del PowerBot
exports.togglePowerBotStatus = async (req, res) => {
  try {
    // Buscar el documento PowerBot
    const powerBot = await PowerBot.findOne();

    if (!powerBot) {
      return res.status(404).json({ message: 'No se encontró PowerBot.' });
    }

    // Cambiar el estado (true -> false o false -> true)
    powerBot.status = !powerBot.status;
    await powerBot.save();

    res.status(200).json(powerBot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 3. Consultar el estado del PowerBot
exports.getPowerBotStatus = async (req, res) => {
  try {
    // Buscar el documento PowerBot
    const powerBot = await PowerBot.findOne();

    if (!powerBot) {
      return res.status(404).json({ message: 'No se encontró ningún documento PowerBot.' });
    }

    // Devolver el estado del PowerBot
    res.status(200).json({ status: powerBot.status }); 

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};