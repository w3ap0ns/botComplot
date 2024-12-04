const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const URL_CONNECT = process.env.URL_CONNECT;
const PORT = process.env.PORT;
app.use(express.json()); 1 

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const adminNumberRoutes = require('./routes/adminNumerRoutes');
const blackListRoutes = require('./routes/blackListRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const politicasPrivacidadRoutes = require('./routes/politicasPrivacidadRoutes');
const powerBotRoutes = require('./routes/powerBotRoutes');

// Montar rutas con la ruta base /api/v1
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/adminnumber', adminNumberRoutes);
app.use('/api/v1/blacklist', blackListRoutes);
app.use('/api/v1/clientes', clientesRoutes);
app.use('/api/v1/politicas-privacidad', politicasPrivacidadRoutes);
app.use('/api/v1/powerbot', powerBotRoutes);

app.listen(PORT, () => {
  console.log('Servidor iniciado en el puerto', PORT);
});

mongoose.connect(URL_CONNECT)
  .then(() => {
    console.log('Conectado a MongoDB ✅');
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error);
  });