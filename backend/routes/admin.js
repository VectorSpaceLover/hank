const router = require('express').Router();

const {
    getTopProducts,
    getAllProducts,
} = require('../controller/admin/overview');

router.get('/products/top', getTopProducts);
router.get('/products/all', getAllProducts);

module.exports = router;
