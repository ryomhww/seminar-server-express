// pesertaRoutes.js

const express = require('express');
const router = express.Router();
const pesertaController = require('../controllers/pesertaController');

router.get('/peserta', pesertaController.getAllPeserta);

router.get('/peserta/:id', pesertaController.getPesertaById);

router.post('/peserta', pesertaController.createPeserta);

router.put('/peserta/:id', pesertaController.updatePesertaById);

router.delete('/peserta/:id', pesertaController.deletePesertaById);

module.exports = router;
