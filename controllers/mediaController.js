const Media = require('../models/media');

// Crear una nueva media
const createMedia = async (req, res) => {
  try {
    const nuevaMedia = new Media(req.body);
    await nuevaMedia.save();
    res.status(201).json(nuevaMedia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Obtener una media por ID
const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
      .populate('generos_id')
      .populate('directores_id')
      .populate('productoras_id')
      .populate('tipos_id');
    if (!media) return res.status(404).json({ mensaje: "Media no encontrada" });
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una media por ID
const updateMedia = async (req, res) => {
  try {
    const mediaActualizada = await Media.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!mediaActualizada) return res.status(404).json({ mensaje: "Media no encontrada" });
    res.json(mediaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una media por ID
const deleteMedia = async (req, res) => {
  try {
    const mediaEliminada = await Media.findByIdAndDelete(req.params.id);
    if (!mediaEliminada) return res.status(404).json({ mensaje: "Media no encontrada" });
    res.json({ mensaje: "Media eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Obtener todas las medias o filtrar por título
const getMedias = async (req, res) => {
  try {
    const { search } = req.query;

    const filtro = search
      ? { titulo: { $regex: search, $options: "i" } } // búsqueda insensible a mayúsculas
      : {};

    const medias = await Media.find(filtro)
      .populate('generos_id')
      .populate('directores_id')
      .populate('productoras_id')
      .populate('tipos_id');

    res.json(medias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createMedia,
  getMedias,
  getMediaById,
  updateMedia,
  deleteMedia,
}