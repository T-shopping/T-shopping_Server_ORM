const router = require('express').Router();

const createShop = require('./shop.Ctrl/CreateShop');

router.post('/create', createShop);

module.exports = router;