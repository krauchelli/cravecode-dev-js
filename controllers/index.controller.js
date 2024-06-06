const { getAllUser, getUser } = require('./user.controller');
const { registerController, loginController } = require('./auth.controller');

const controllers = {
    getAllUser,
    getUser,
    registerController,
    loginController
};

module.exports = controllers;