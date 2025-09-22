const Tipo = require('../models/tipo');

// Crear un nuevo tipo
const createTipo = async (req, res) => {
  try {
    const nuevoTipo = new Tipo(req.body);
    await nuevoTipo.save();
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los tipos
const getTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un tipo por ID
const getTipoById = async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);
    if (!tipo) return res.status(404).json({ mensaje: "Tipo no encontrado" });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un tipo por ID
const updateTipo = async (req, res) => {
  try {
    const tipoActualizado = await Tipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tipoActualizado) return res.status(404).json({ mensaje: "Tipo no encontrado" });
    res.json(tipoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un tipo por ID
const deleteTipo = async (req, res) => {
  try {
    const tipoEliminado = await Tipo.findByIdAndDelete(req.params.id);
    if (!tipoEliminado) return res.status(404).json({ mensaje: "Tipo no encontrado" });
    res.json({ mensaje: "Tipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTipo,
  getTipos,
  getTipoById,
  updateTipo,
  deleteTipo
}