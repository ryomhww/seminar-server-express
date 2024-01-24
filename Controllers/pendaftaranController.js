// pendaftaranController.js
const Pendaftaran = require('../models/pendaftaranModel');

async function registerPendaftaran(req, res) {
  const { seminar_id, peserta_id, tanggal_pendaftaran } = req.body;
  try {
    const newPendaftaran = await Pendaftaran.register(seminar_id, peserta_id, tanggal_pendaftaran);
    res.status(201).json(newPendaftaran);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllPendaftaran(req, res) {
  try {
    const pendaftaranList = await Pendaftaran.getAll();
    res.json(pendaftaranList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPendaftaranById(req, res) {
  const { id } = req.params;
  try {
    const pendaftaran = await Pendaftaran.getById(id);
    if (pendaftaran) {
      res.json(pendaftaran);
    } else {
      res.status(404).json({ error: 'Pendaftaran not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deletePendaftaranById(req, res) {
  const { id } = req.params;
  try {
    const success = await Pendaftaran.deleteById(id);
    if (success) {
      res.json({ message: 'Pendaftaran deleted successfully' });
    } else {
      res.status(404).json({ error: 'Pendaftaran not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  registerPendaftaran,
  getAllPendaftaran,
  getPendaftaranById,
  deletePendaftaranById,
};