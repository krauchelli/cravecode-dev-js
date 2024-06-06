const { getAllUser, getUser } = require('./user.controller');
const { registerController } = require('./auth.controller');

const controllers = {
    getAllUser,
    getUser,
    registerController
};

module.exports = controllers;