const express = require('express');

const router = express.Router();

const userController = require('../../controller/userCon');

router.post('/Register',userController.Register);
router.get('/getUser',userController.get);
router.put('/update',userController.update)
router.delete('/delete',userController.delete)
module.exports = router;