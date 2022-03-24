const router = require('express').Router();

const {
    adminSignUp,
    adminSignIn
} = require('../controller/admin/overview');

router.post('/signup', adminSignUp);
router.post('/signin', adminSignIn);

module.exports = router;
