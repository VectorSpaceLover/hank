const router = require('express').Router();

const { signUp } = require('../controller/users');

router.post('/signup', signUp);

module.exports = router;
