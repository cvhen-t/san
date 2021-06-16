const express = require('express')
const users = require('./users')
const goods = require('./goods')
const router = express.Router();
router.use('/goods',goods);
router.use('/users',users);
module.exports = router;