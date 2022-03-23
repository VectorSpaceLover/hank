const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    getProducts,
    searchProducts,
    createNewProduct,
    addLikedProduct,
} = require('../controller/products');

router.get('/', getProducts);
router.get('/search', searchProducts);

router.post('/', createNewProduct);

router.post('/add/liked', addLikedProduct);

module.exports = router;
