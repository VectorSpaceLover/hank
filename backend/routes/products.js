const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    getProducts,
    searchProducts,
    createNewProduct,
} = require('../controller/products');

router.get('/', getProducts);
router.get('/search', searchProducts);

router.post('/', createNewProduct);

module.exports = router;
