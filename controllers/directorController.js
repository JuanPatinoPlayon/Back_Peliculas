const Director = require('../models/director');

// Create a new director
const createDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all directors
const getDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.status(200).json(directors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a director by ID
const getDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director not found' });
        res.status(200).json(director);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a director
const updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!director) return res.status(404).json({ message: 'Director not found' });
        res.status(200).json(director);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a director
const deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) return res.status(404).json({ message: 'Director not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createDirector,
    getDirectors,
    getDirectorById,
    updateDirector,
    deleteDirector
};