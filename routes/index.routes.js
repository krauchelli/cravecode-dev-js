const express = require('express');
const router = express.Router();
const {auth, redirectIfAuthenticated} = require('../middlewares/auth');

const controllers = require('../controllers/index.controller');


// kumpulan get
router.get('/', async (req, res) => {
    res.render('cravecode');
});

router.get('/login', redirectIfAuthenticated, async (req, res) => {
    res.render('login');
});

router.get('/register', redirectIfAuthenticated, async (req, res) => {
    res.render('register');
});

router.get('/profile', auth, controllers.getUser);

router.get('/shop', auth, controllers.getAllCart);
 router.get('/cart', auth, controllers.getAllCart); // not finished

router.get('/inprocess', async (req, res) => {
    res.render('inprocess');
});

router.get('/completed', async (req, res) => {
    res.render('completed');
});

// kumpulan post
router.post('/register', controllers.registerController);
router.post ('/login', controllers.loginController);
router.post('/logout', controllers.logoutController);
router.post('/add-to-cart', auth, controllers.addToCart); // not finished

module.exports = router;