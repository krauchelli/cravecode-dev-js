const express = require('express');
const router = express.Router();
const { auth, redirectIfAuthenticated, checkUserRole } = require('../middlewares/auth');

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
router.get('/dashboard', auth, checkUserRole, async (req, res) => {
    res.render('dashboard');
});
router.get('/profile', auth, controllers.getUser);
router.get('/shop', auth, controllers.getAllCart);
router.get('/cart', auth, controllers.getAllCart); // not finished
router.get('/inprocess', auth, controllers.getAllProcess); // not finished
router.get('/completed', auth, controllers.getAllCompleted); // not finished
// router.get('/orderList', auth, controllers.getAllOrder); // not finished

// penggunaan untuk admin
router.get('/dashboard/user', auth, checkUserRole, controllers.showAllUser);
router.get('/dashboard/user/:id', auth, checkUserRole, controllers.showUser);
router.get('/dashboard/cart', auth, checkUserRole, controllers.showAllCart);
router.get('/dashboard/cart/:id', auth, checkUserRole, controllers.showCart);
router.get('/dashboard/order', auth, checkUserRole, controllers.showAllOrder);
router.get('/dashboard/order/:id', auth, checkUserRole, controllers.showOrder);
router.get('/dashboard/product', auth, checkUserRole, controllers.showAllProduct);
router.get('/dashboard/product/:id', auth, checkUserRole, controllers.showProduct);
router.get('/dashboard/paymethod', auth, checkUserRole, controllers.showAllPayMethod);
router.get('/dashboard/paymethod/:id', auth, checkUserRole, controllers.showPayMethod);

// kumpulan post
router.post('/register', controllers.registerController);
router.post ('/login', controllers.loginController);
router.post('/logout', controllers.logoutController);
router.post('/add-to-cart', auth, controllers.addToCart); // not finished
router.post('/inprocess', auth, controllers.addToProcess); // not finished
router.post('/completed', auth, controllers.addToCompleted); // not finished
router.post('/updateCart', auth, controllers.updateCart); // not finished

// kumpulan put

// kumpulan delete
router.delete('/shop', auth, controllers.emptyCart); // not finished

module.exports = router;