const router = require('express').Router();

const { 
    signUpWithEmail, 
    signUpWithGoogle,
    signUpWithFacebook,
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    forgetsendmail,
} = require('../controller/users');

router.post('/signup', signUpWithEmail);
router.post('/signup/google', signUpWithGoogle);
router.post('/signup/facebook', signUpWithFacebook);

router.post('/signin', signInWithEmail);
router.post('/signin/google', signInWithGoogle);
router.post('/signin/facebook', signInWithFacebook);

router.post('/forgot/confirm', forgetsendmail);

module.exports = router;
