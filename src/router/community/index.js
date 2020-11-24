const router = require('express').Router();

const authMiddleware = require('../../lib/middleware/auth');
const createCommunity = require('./community.ctrl/createCommunity');
const getCommunity = require('./community.ctrl/getCommunity');

router.post('/create', authMiddleware, createCommunity);
router.get('/get/:idx', getCommunity);

module.exports = router;