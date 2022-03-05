const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    getProducts,
    createNewProduct,
} = require('../controller/products');

router.get('/', getProducts);

router.post('/', createNewProduct);

module.exports = router;
