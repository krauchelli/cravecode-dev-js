/*
controller yang dikonfigurasikan untuk pengaturan authorization data terhadap user
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
    const { username, email, phone, password } = req.body;
    
    try {
        // validasi apakah email sudah terdaftar
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (user) {
            return res.redirect('/register');
        }

        // mulai proses registrasi
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                phone,
                password: hashedPassword
            }
        });

        return res.redirect('/login');

    } catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when registering user',
            message: error.message 
        });
    }
};

const loginController = async (req, res) => {
    const { username, password } = req.body;

    try {
        // validasi apakah user sudah terdaftar
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (!user) {
            return res.redirect('/login');
        }

        // validasi password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.redirect('/login');
        }

        // set session
        req.session.user = user.id;
        console.log(req.session.user);

        return res.redirect('/profile');
    } catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when logging in',
            message: error.message 
        });
    
    }
};


// export
module.exports = {
    registerController,
    loginController
};