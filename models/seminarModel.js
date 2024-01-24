// seminarModel.js

const db = require('../db');

const Seminar = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM seminar');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM seminar WHERE seminar_id = ?', [id]);
    return rows[0];
  },

  create: async (nama_seminar, tanggal, tempat, deskripsi, pembicara) => {
    const [result] = await db.query(
      'INSERT INTO seminar (nama_seminar, tanggal, tempat, deskripsi, pembicara) VALUES (?, ?, ?, ?, ?)',
      [nama_seminar, tanggal, tempat, deskripsi, pembicara]
    );
  
    const [addedSeminar] = await db.query('SELECT * FROM seminar WHERE seminar_id = ?', [result.insertId]);
    return addedSeminar[0];
  },

  updateById: async (id, nama_seminar, tanggal, tempat, deskripsi, pembicara) => {
    const [result] = await db.query(
      'UPDATE seminar SET nama_seminar=?, tanggal=?, tempat=?, deskripsi=?, pembicara=? WHERE seminar_id=?',
      [nama_seminar, tanggal, tempat, deskripsi, pembicara, id]
    );
    return result.affectedRows > 0;
  },

  deleteById: async (id) => {
    const [result] = await db.query('DELETE FROM seminar WHERE seminar_id = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = Seminar;
