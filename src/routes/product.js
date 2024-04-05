const express = require('express');
const verifyToken = require('../middleware/jwtToken');
const router = express.Router();

const productController = require('../controller/product');


router.get('/all',verifyToken,productController.getProduct);
router.get('/men',verifyToken,productController.menProducts);
router.get('/women',verifyToken,productController.womenProducts);


module.exports = router;