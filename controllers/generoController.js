const Genero = require('../models/genero');

// Crear un nuevo género
const createGenero = async (req, res) => {
  try {
    const nuevoGenero = new Genero(req.body);
    await nuevoGenero.save();
    res.status(201).json(nuevoGenero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los géneros
const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un género por ID
const getGeneroById = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    if (!genero) return res.status(404).json({ mensaje: "Género no encontrado" });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un género por ID
const updateGenero = async (req, res) => {
  try {
    const generoActualizado = await Genero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!generoActualizado) return res.status(404).json({ mensaje: "Género no encontrado" });
    res.json(generoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un género por ID
const deleteGenero = async (req, res) => {
  try {
    const generoEliminado = await Genero.findByIdAndDelete(req.params.id);
    if (!generoEliminado) return res.status(404).json({ mensaje: "Género no encontrado" });
    res.json({ mensaje: "Género eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createGenero,
    getGeneros,
    getGeneroById,
    updateGenero,
    deleteGenero
}   