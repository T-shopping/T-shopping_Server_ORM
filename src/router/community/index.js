const router = require('express').Router();

const authMiddleware = require('../../lib/middleware/auth');
const createCommunity = require('./community.ctrl/createCommunity');
const getCommunity = require('./community.ctrl/getCommunity');
const getCommunitys = require('./community.ctrl/getCommunitys');

router.post('/create', authMiddleware, createCommunity);
router.get('/get/:idx', getCommunity);
router.get('/list/:page', getCommunitys);

module.exports = router;