const router = require('express').Router();

const login = require('./auth.Ctrl/login');

router.post('/login', login);

module.exports = router;