const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

// Đăng ký người dùng mới
router.post('/register', registerUser);

// Đăng nhập người dùng
router.post('/login', authUser);

module.exports = router;