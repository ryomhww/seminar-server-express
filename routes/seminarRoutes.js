const express = require('express');
const router = express.Router();
const seminarController = require('../controllers/seminarController');

router.get('/seminar', seminarController.getAllSeminars);

router.get('/seminar/:id', seminarController.getSeminarById);

router.post('/seminar', seminarController.createSeminar);

router.put('/seminar/:id', seminarController.updateSeminarById);

router.delete('/seminar/:id', seminarController.deleteSeminarById);

module.exports = router;
