const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/productsController');

router.get('/', productController.products);
router.get('/count', productController.count);
router.get('/:id', productController.detail);


module.exports = router;