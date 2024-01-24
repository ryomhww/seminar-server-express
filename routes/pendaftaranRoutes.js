const express = require('express');
const router = express.Router();
const pendaftaranController = require('../controllers/pendaftaranController');

router.post('/pendaftaran/register', pendaftaranController.registerPendaftaran);

router.get('/pendaftaran', pendaftaranController.getAllPendaftaran);

router.get('/pendaftaran/:id', pendaftaranController.getPendaftaranById);

router.delete('/pendaftaran/:id', pendaftaranController.deletePendaftaranById);

module.exports = router;
