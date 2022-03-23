const router = require('express').Router();

const { 
    signUpWithEmail, 
    signUpWithGoogle,
    signUpWithFacebook,
    signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    forgetsendmail,
    resetPassword,
    getYearlyUsers,
    getMonthlyUsers,
    getDailyUsers,
    getTotalUserCount,
    getTopUsers,
    getAllUsers,
} = require('../controller/users');
const { route } = require('./admin');

router.post('/signup', signUpWithEmail);
router.post('/signup/google', signUpWithGoogle);
router.post('/signup/facebook', signUpWithFacebook);

router.post('/signin', signInWithEmail);
router.post('/signin/google', signInWithGoogle);
router.post('/signin/facebook', signInWithFacebook);

router.post('/forgot/confirm', forgetsendmail);
router.post('/reset/password', resetPassword);

router.get('/total', getTotalUserCount);
router.get('/yearly', getYearlyUsers);
router.get('/monthly', getMonthlyUsers);
router.get('/daily', getDailyUsers);

router.get('/top', getTopUsers);
router.get('/all', getAllUsers);

module.exports = router;
