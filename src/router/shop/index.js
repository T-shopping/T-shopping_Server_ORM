const router = require('express').Router();

const authMiddleware = require('../../lib/middleware/auth');
const createShop = require('./shop.Ctrl/CreateShop');
const deleteShop = require('./shop.Ctrl/DeleteShop');
const getShops = require('./shop.Ctrl/GetShops');
const getShop = require('./shop.Ctrl/GetShop');
const modifyShop = require('./shop.Ctrl/ModifyShop');

router.post('/create', authMiddleware, createShop);
// router.get('/get', getShops);
router.get('/get/:idx', getShop);
// router.modifyShop('/modify/:idx', modifyShop);
router.delete('/delete/:idx', authMiddleware, deleteShop);

module.exports = router;