const router = require('express').Router();

const {
    getTopProducts,
    getAllProducts,
    getSiteInfo,
} = require('../controller/admin/overview');

router.get('/products/top', getTopProducts);
router.get('/products/all', getAllProducts);
router.get('/overview/siteinfo', getSiteInfo);
module.exports = router;
