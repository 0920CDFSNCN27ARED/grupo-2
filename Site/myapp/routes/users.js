const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.getLogin);

router.get('/register', userController.getRegister);

module.exports = router;