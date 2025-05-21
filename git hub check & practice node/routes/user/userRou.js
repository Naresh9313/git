const express = require('express');
const router =express.Router();

const usercontroller = require('../../controller/userCon');

router.post('/register',usercontroller.Register);
router.get('/getUser',usercontroller.GetUser);
router.put('/update',usercontroller.updateUser);
router.delete('/delete',usercontroller.deleteUser);

module.exports = router;