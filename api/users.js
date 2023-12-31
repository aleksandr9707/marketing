const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/api/users');

// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;
