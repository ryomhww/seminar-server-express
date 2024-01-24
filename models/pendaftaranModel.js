// pendaftaranModel.js
const db = require('../db');

const Pendaftaran = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM pendaftaran');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM pendaftaran WHERE pendaftaran_id = ?', [id]);
    return rows[0];
  },

  register: async (seminar_id, peserta_id) => {
    const tanggal_pendaftaran = new Date(); // Mendapatkan tanggal saat ini
    const [result] = await db.query(
      'INSERT INTO pendaftaran (seminar_id, peserta_id, tanggal_pendaftaran) VALUES (?, ?, ?)',
      [seminar_id, peserta_id, tanggal_pendaftaran]
    );
  
    const [newPendaftaran] = await db.query(
      'SELECT * FROM pendaftaran WHERE pendaftaran_id = ?',
      [result.insertId]
    );
  
    return newPendaftaran[0];
  },

  deleteById: async (id) => {
    const [result] = await db.query('DELETE FROM pendaftaran WHERE pendaftaran_id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = Pendaftaran;
