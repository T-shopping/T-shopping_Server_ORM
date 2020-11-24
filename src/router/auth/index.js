const router = require('express').Router();

const login = require('./auth.Ctrl/login');
const register = require('./auth.Ctrl/register');

router.post('/login', login);
router.post('/register', register);

module.exports = router;