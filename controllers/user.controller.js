/*
controller yang dikonfigurasikan untuk pengaturan data terhadap user
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all user
const getAllUser = async (req, res) => {
    const users = await prisma.user.findMany();
    res.render('users/profile', { users });
};

// get specific user, bisa dipake untuk profile routing
const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    res.render('users/profile', { user });
};  

module.exports = {
    getAllUser,
    getUser,
};