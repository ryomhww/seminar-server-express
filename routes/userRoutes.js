// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/user', userController.getUsersAll);

router.get('/user/:id', userController.getUserById);

router.put('/user/:id', userController.updateUserById);

router.delete('/user/:id', userController.deleteUserById);


module.exports = router;