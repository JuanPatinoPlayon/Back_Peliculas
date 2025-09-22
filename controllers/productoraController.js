const Productora = require('../models/productora');

// Crear una nueva productora
const createProductora = async (req, res) => {
  try {
    const nuevaProductora = new Productora(req.body);
    await nuevaProductora.save();
    res.status(201).json(nuevaProductora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las productoras
const getProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una productora por ID
const getProductoraById = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) return res.status(404).json({ mensaje: "Productora no encontrada" });
    res.json(productora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una productora por ID
const updateProductora = async (req, res) => {
  try {
    const productoraActualizada = await Productora.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productoraActualizada) return res.status(404).json({ mensaje: "Productora no encontrada" });
    res.json(productoraActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una productora por ID
const deleteProductora = async (req, res) => {
  try {
    const productoraEliminada = await Productora.findByIdAndDelete(req.params.id);
    if (!productoraEliminada) return res.status(404).json({ mensaje: "Productora no encontrada" });
    res.json({ mensaje: "Productora eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductora,
  getProductoras,
  getProductoraById,
  updateProductora,
  deleteProductora
}