const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa các routes
router.post('/register', userController.registerUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);

module.exports = router;
