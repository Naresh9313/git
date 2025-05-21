const express = require('express');

const router = express.Router();


const Register = require('./user/userRou');
const getdata=require('./user/userRou');
const updateUser=require('./user/userRou');
const deleteUser=require('./user/userRou');

router.use(Register);
router.use(getdata);
router.use(updateUser);
router.use(deleteUser);

module.exports = router;



