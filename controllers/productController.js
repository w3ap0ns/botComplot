const Product = require('../models/productModel');

// 1. Crear producto
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({ message: 'Ya existe un producto con ese nombre.' });
    }
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 2. Modificar producto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de los parámetros de la ruta
    const updatedData = req.body; // Los datos a actualizar vienen en el cuerpo de la solicitud

    // Buscar el producto por su ID y actualizarlo
    const product = await Product.findByIdAndUpdate(
      id, 
      updatedData, 
      { new: true } // Para que devuelva el documento actualizado
    );

    if (!product) {
      return res.status(404).json({ message: 'No se encontró ningún producto con ese ID.' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 3. Eliminar producto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de los parámetros de la ruta

    const product = await Product.findByIdAndDelete(id); // Usar findByIdAndDelete para eliminar por ID

    if (!product) {
      return res.status(404).json({ message: 'No se encontró ningún producto con ese ID.' });
    }

    res.status(200).json({ message: 'Producto eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//4. Listar todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};