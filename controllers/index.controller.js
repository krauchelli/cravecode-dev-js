const { getAllUser, getUser } = require('./user.controller');
const { registerController, loginController, logoutController } = require('./auth.controller');
const { addToCart, getAllCart, addToProcess, getAllProcess, addToCompleted, getAllCompleted, emptyCart, updateCart } = require('./cart.controller');
const { showAllUser, showUser, showAllCart, showCart, showAllOrder, showOrder, showAllProduct, showProduct, showAllPayMethod, showPayMethod  } = require('./admin.controller')

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
    getAllCompleted,
    emptyCart,
    updateCart,
    showAllUser,
    showUser,
    showAllCart,
    showCart,
    showAllOrder,
    showOrder,
    showAllProduct,
    showProduct,
    showAllPayMethod,
    showPayMethod
};

module.exports = controllers;