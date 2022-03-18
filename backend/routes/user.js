const router = require('express').Router();

const { signUpWithEmail, signInWithEmail } = require('../controller/users');

router.post('/signup', signUpWithEmail);
router.post('/signin', signInWithEmail);

module.exports = router;
