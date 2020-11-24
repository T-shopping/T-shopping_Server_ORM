const router = require('express').Router();

const authMiddleware = require('../../lib/middleware/auth');
const createShop = require('./shop.Ctrl/CreateShop');
const deleteShop = require('./shop.Ctrl/DeleteShop');
const getShops = require('./shop.Ctrl/GetShops');
const getShop = require('./shop.Ctrl/GetShop');
const searchShop = require('./shop.Ctrl/searchShop');
const modifyShop = require('./shop.Ctrl/ModifyShop');

router.post('/create', authMiddleware, createShop);
router.get('/list/:page', getShops);
router.get('/get/:idx', getShop);
router.get('/search/:page', searchShop);
router.put('/modify/:idx', authMiddleware, modifyShop);
router.delete('/delete/:idx', authMiddleware, deleteShop);

module.exports = router;