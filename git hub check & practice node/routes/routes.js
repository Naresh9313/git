const express = require('express');

const router = express.Router();



const add = require('./user/userRou');
router.use(add);    

module.exports = router;
