const { getAllUser, getUser } = require('./user.controller');
const { registerController, loginController, logoutController } = require('./auth.controller');

const controllers = {
    getAllUser,
    getUser,
    registerController,
    loginController,
    logoutController
};

module.exports = controllers;