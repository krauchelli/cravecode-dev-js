/*
controller yang dikonfigurasikan untuk pengaturan data terhadap user
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all user
const getAllUser = async (req, res) => {
    const users = await prisma.user.findMany();
    res.render('profile', { users });
};

// get specific user, bisa dipake untuk profile routing
const getUser = async (req, res) => {
    const { username } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            username
        },
    });
    console.log(user);

    res.render('profile', { user });
};  

module.exports = {
    getAllUser,
    getUser,
};