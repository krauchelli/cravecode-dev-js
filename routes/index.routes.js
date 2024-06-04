const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    res.render('test', { title: 'Express' });
});

router.get('/home', async (req, res) => {
    res.render('cravecode');
});

router.get('/login', async (req, res) => {
    res.render('users/login');
});

router.get('/register', async (req, res) => {
    res.render('users/register');
});

router.get('/profile', async (req, res) => {
    res.render('users/profile');
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

module.exports = router;