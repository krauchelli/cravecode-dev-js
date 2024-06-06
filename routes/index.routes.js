const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const controllers = require('../controllers/index.controller');


router.get('/', async (req, res) => {
    res.render('test', { title: 'Express' });
});

router.get('/home', async (req, res) => {
    res.render('cravecode');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/register', async (req, res) => {
    res.render('register');
});

router.get('/profile', auth, async (req, res) => {
    res.render('profile', controllers.getUser);
});

router.get('/shop', async (req, res) => {
    res.render('shop');
});

router.get('/inprocess', async (req, res) => {
    res.render('inprocess');
});

router.get('/completed', async (req, res) => {
    res.render('completed');
});

// kumpulan post
router.post('/register', controllers.registerController);
router.post ('/login', controllers.loginController);

module.exports = router;