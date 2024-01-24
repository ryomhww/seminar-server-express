// seminarController.js

const Seminar = require('../models/seminarModel');

const getAllSeminars = async (req, res, next) => {
  try {
    const seminars = await Seminar.getAll();
    res.json(seminars);
  } catch (error) {
    next(error);
  }
};

const getSeminarById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const seminar = await Seminar.getById(id);
    if (seminar) {
      res.json(seminar);
    } else {
      res.status(404).json({ message: 'Seminar not found' });
    }
  } catch (error) {
    next(error);
  }
};

const createSeminar = async (req, res, next) => {
  const { nama_seminar, tanggal, tempat, deskripsi, pembicara } = req.body;
  try {
    const addedSeminar = await Seminar.create(nama_seminar, tanggal, tempat, deskripsi, pembicara);
    res.status(201).json(addedSeminar);
  } catch (error) {
    next(error);
  }
};

const updateSeminarById = async (req, res, next) => {
  const { id } = req.params;
  const { nama_seminar, tanggal, tempat, deskripsi, pembicara } = req.body;
  try {
    const success = await Seminar.updateById(id, nama_seminar, tanggal, tempat, deskripsi, pembicara);
    if (success) {
      res.json({ message: 'Seminar updated successfully' });
    } else {
      res.status(404).json({ message: 'Seminar not found' });
    }
  } catch (error) {
    next(error);
  }
};

const deleteSeminarById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await Seminar.deleteById(id);
    if (success) {
      res.json({ message: 'Seminar deleted successfully' });
    } else {
      res.status(404).json({ message: 'Seminar not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSeminars,
  getSeminarById,
  createSeminar,
  updateSeminarById,
  deleteSeminarById,
};
