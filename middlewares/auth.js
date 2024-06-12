const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const auth = async (req, res, next) => {
    try {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when authenticating user',
            message: error.message 
        });
    }
};

const redirectIfAuthenticated = async (req, res, next) => {
    try {
        if (req.session.user) {
            return res.redirect('/');
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when checking user authentication',
            message: error.message 
        });
    }
};

const checkUserRole = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.session.user
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'invalid user' });
        }

        // pengecekan apakah user adalah admin
        if (user.role !== 'ADMIN') {
            // kalau bukan admin, redirect ke halaman home
            return res.redirect('/profile');
        }
        next(); // Call the next middleware function
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

 module.exports = { auth, redirectIfAuthenticated, checkUserRole };