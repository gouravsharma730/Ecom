const express = require('express');
const router = express.Router();
const userController = require('../controller/user')
const verifyToken = require('../middleware/jwtToken');

router.post('/register',userController.register);
router.post('/login',verifyToken,userController.login);
router.post('/editProfile',verifyToken,userController.editProfile);
router.get('/logout',verifyToken,userController.logout);
router.get('/cart',verifyToken,userController.cartItems);
router.post('/addToCart',verifyToken,userController.addToCart);

module.exports= router;