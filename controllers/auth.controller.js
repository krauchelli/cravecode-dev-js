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
        return res.status(500).json({ message: error.message });
    }
};


// export
module.exports = {
    registerController
};