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
router.get('/inprocess', auth, controllers.getAllProcess); // not finished
router.get('/completed', auth, controllers.getAllCompleted); // not finished
// router.get('/orderList', auth, controllers.getAllOrder); // not finished

// kumpulan post
router.post('/register', controllers.registerController);
router.post ('/login', controllers.loginController);
router.post('/logout', controllers.logoutController);
router.post('/add-to-cart', auth, controllers.addToCart); // not finished
router.post('/inprocess', auth, controllers.addToProcess); // not finished
router.post('/completed', auth, controllers.addToCompleted); // not finished

// kumpulan put
router.put('/shop', auth, controllers.updateCart); // not finished

// kumpulan delete
router.delete('/shop', auth, controllers.emptyCart); // not finished

module.exports = router;