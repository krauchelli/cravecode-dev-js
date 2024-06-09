const { getAllUser, getUser } = require('./user.controller');
const { registerController, loginController, logoutController } = require('./auth.controller');
const { addToCart, getAllCart, addToProcess, getAllProcess, addToCompleted, getAllCompleted } = require('./cart.controller');

const controllers = {
    getAllUser,
    getUser,
    registerController,
    loginController,
    logoutController,
    addToCart,
    getAllCart,
    addToProcess,
    getAllProcess,
    addToCompleted,
    getAllCompleted
};

module.exports = controllers;