// politicasPrivacidadController.js

const PoliticaPrivacidad = require('../models/politicaPrivacidadModel');

// 1. Registrar política de privacidad aceptada
exports.acceptPoliticaPrivacidad = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Buscar si ya existe un registro para este número
    let politica = await PoliticaPrivacidad.findOne({ phoneNumber });

    if (politica) {
      // Si existe, actualizar el estado a "aceptado" (true)
      politica.status = true;
      await politica.save();
    } else {
      // Si no existe, crear un nuevo registro con estado "aceptado"
      politica = await PoliticaPrivacidad.create({
        phoneNumber,
        status: true
      });
    }

    res.status(200).json(politica);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 2. Rechazar política de privacidad
exports.rejectPoliticaPrivacidad = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Buscar si ya existe un registro para este número
    let politica = await PoliticaPrivacidad.findOne({ phoneNumber });

    if (politica) {
      // Si existe, actualizar el estado a "rechazado" (false)
      politica.status = false;
      await politica.save();
    } else {
      // Si no existe, crear un nuevo registro con estado "rechazado"
      politica = await PoliticaPrivacidad.create({
        phoneNumber,
        status: false
      });
    }

    res.status(200).json(politica);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 3. Verificar si existe la política de privacidad para un número
exports.checkPoliticaPrivacidad = async (req, res) => {
  try {
    const { phoneNumber } = req.params; // Obtener el número de teléfono de los parámetros de la solicitud

    const politica = await PoliticaPrivacidad.findOne({ phoneNumber });

    // Devolver true si existe, false si no existe
    res.status(200).json({ exists: !!politica }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};