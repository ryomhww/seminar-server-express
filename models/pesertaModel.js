const db = require('../db');

const Peserta = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM peserta');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM peserta WHERE peserta_id = ?', [id]);
    return rows[0];
  },

  create: async (nama_peserta, email_peserta, no_hp_peserta) => {
    const [result] = await db.query('INSERT INTO peserta (nama_peserta, email_peserta, no_hp_peserta) VALUES (?, ?, ?)', [nama_peserta, email_peserta, no_hp_peserta]);
    const [addedPeserta] = await db.query('SELECT * FROM peserta WHERE peserta_id = ?', [result.insertId]);
    return addedPeserta[0];
  },

  updateById: async (id, nama_peserta, email_peserta, no_hp_peserta) => {
    const [result] = await db.query('UPDATE peserta SET nama_peserta=?, email_peserta=?, no_hp_peserta=? WHERE peserta_id=?', [nama_peserta, email_peserta, no_hp_peserta, id]);
    return result.affectedRows > 0;
  },

  deleteById: async (id) => {
    // Hapus terlebih dahulu pendaftaran yang terkait dengan peserta
    await db.query('DELETE FROM pendaftaran WHERE peserta_id = ?', [id]);
    
    // Hapus peserta setelah pendaftaran dihapus
    const [result] = await db.query('DELETE FROM peserta WHERE peserta_id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = Peserta;
