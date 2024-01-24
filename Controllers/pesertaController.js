const Peserta = require('../models/pesertaModel');

async function getAllPeserta(req, res) {
  try {
    const pesertaList = await Peserta.getAll();
    res.json(pesertaList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPesertaById(req, res) {
  const { id } = req.params;
  try {
    const peserta = await Peserta.getById(id);
    if (peserta) {
      res.json(peserta);
    } else {
      res.status(404).json({ error: 'Peserta not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createPeserta(req, res) {
  const { nama_peserta, email_peserta, no_hp_peserta } = req.body;
  try {
    const newPeserta = await Peserta.create(nama_peserta, email_peserta, no_hp_peserta);
    res.status(201).json(newPeserta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updatePesertaById(req, res) {
  const { id } = req.params;
  const { nama_peserta, email_peserta, no_hp_peserta } = req.body;
  try {
    const success = await Peserta.updateById(id, nama_peserta, email_peserta, no_hp_peserta);
    if (success) {
      res.json({ message: 'Peserta updated successfully' });
    } else {
      res.status(404).json({ error: 'Peserta not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deletePesertaById(req, res) {
  const { id } = req.params;
  try {
    const success = await Peserta.deleteById(id);
    if (success) {
      res.json({ message: 'Peserta deleted successfully' });
    } else {
      res.status(404).json({ error: 'Peserta not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllPeserta,
  getPesertaById,
  createPeserta,
  updatePesertaById,
  deletePesertaById,
};
