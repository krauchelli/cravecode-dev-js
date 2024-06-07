const { getAllUser, getUser } = require('./user.controller');
const { registerController, loginController, logoutController } = require('./auth.controller');
const { addToCart, getAllCart } = require('./cart.controller');

const controllers = {
    getAllUser,
    getUser,
    registerController,
    loginController,
    logoutController,
    addToCart,
    getAllCart
};

module.exports = controllers;