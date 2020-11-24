const router = require('express').Router();

const login = require('./auth.Ctrl/login');
const register = require('./auth.Ctrl/register');
const registerInfo = require('./auth.Ctrl/registerInfo');

router.post('/login', login);
router.post('/register', register);
router.post('/registerInfo', registerInfo);

module.exports = router;