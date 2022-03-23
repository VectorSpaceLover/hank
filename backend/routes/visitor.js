const router = require('express').Router();

const { 
    addVisitor, 
    getYearlyVisitors, 
    getMonthlyVisitors, 
    getDailyVisitors,
} = require('../controller/visitors');

router.get('/add', addVisitor)
router.get('/get/yearly', getYearlyVisitors)
router.get('/get/monthly', getMonthlyVisitors)
router.get('/get/daily', getDailyVisitors)

module.exports = router;
