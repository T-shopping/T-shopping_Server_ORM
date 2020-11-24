const router = require('express').Router();

const auth = require('./auth');
const shop = require('./shop');
const upload = require('./upload');

router.use('/auth', auth);
router.use('/shop', shop); 
router.use('/upload', upload);

module.exports = router;