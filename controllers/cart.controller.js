/*
controllers yang dikonfigurasikan untuk pengaturan data terhadap shopping dan cart untuk checkout
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all cart
const getAllCart = async (req, res) => {
    const carts = await prisma.cart.findMany({
        include: {
            user: true,
            product: true,
        },
    });

    res.render('cart', { carts });
};