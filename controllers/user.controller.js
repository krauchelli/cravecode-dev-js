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
    console.log(req.session.user);
    try {
        const user = await prisma.user.findUnique({ where: { id: req.session.user } });
    
        res.render('profile', { user });
    } catch (error) {
        res.status(500).json({ 
            title: 'Error occured when getting user',
            message: error.message 
        });
    }
};  

module.exports = {
    getAllUser,
    getUser,
};