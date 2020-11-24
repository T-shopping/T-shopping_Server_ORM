const router = require('express').Router();

const authMiddleware = require('../../lib/middleware/auth');
const createCommunity = require('./community.ctrl/createCommunity');
const getCommunity = require('./community.ctrl/getCommunity');
const getCommunitys = require('./community.ctrl/getCommunitys');
const searchCommunity = require('./community.ctrl/searchCommunity');
const deleteCommunity = require('./community.ctrl/deleteCommunity');
const modifycommunity = require('./community.ctrl/modifyCommunity');

router.post('/create', authMiddleware, createCommunity);

router.get('/get/:idx', getCommunity);
router.get('/list/:page', getCommunitys);
router.get('/search/:page', searchCommunity);

router.put('/modify/:idx', authMiddleware, modifycommunity);

router.delete('/delete/:idx', authMiddleware, deleteCommunity);

module.exports = router;