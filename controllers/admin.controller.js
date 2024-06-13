/*
controllers yang dikonfigurasikan untuk pengaturan data dari admin
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// manajemen user
// mendapatkan seluruh data user 
const showAllUser = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        console.log(users);
        res.render('admin/dashboard-user', { users });
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// mendapatkan data user berdasarkan id
const showUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};


// manajemen cart
// mendapatkan seluruh data cart
const showAllCart = async (req, res) => {
    try {
        const carts = await prisma.cart.findMany({
            include: {
                user: true,
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
        console.log(carts);
        res.render('admin/dashboard-cart', { carts });
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// mendapatkan data cart berdasarkan id
const showCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await prisma.cart.findUnique({
            where: {
                id
            }
        });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// manajemen order
// mendapatkan seluruh data order
const showAllOrder = async (req, res) => {
    try {
        const orders = await prisma.ordered.findMany({
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// mendapatkan data order berdasarkan id
const showOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await prisma.ordered.findUnique({
            where: {
                id
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// manajemen product
// mendapatkan seluruh data product
const showAllProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                carts: true,
                ordereds: true
            }
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// mendapatkan data product berdasarkan id
const showProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: {
                id
            },
            include: {
                carts: true,
                ordereds: true
            }
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// manajemen payMethod
// mendapatkan seluruh data payMethod
const showAllPayMethod = async (req, res) => {
    try {
        const payMethods = await prisma.payMethod.findMany();
        res.status(200).json(payMethods);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};

// mendapatkan data payMethod berdasarkan id
const showPayMethod = async (req, res) => {
    const { id } = req.params;
    try {
        const payMethod = await prisma.payMethod.findUnique({
            where: {
                id
            }
        });
        res.status(200).json(payMethod);
    } catch (error) {
        res.status(500).json({ title: 'could not use the controller', message: error.message });
    }
};


module.exports = { showAllUser, showUser, showAllCart, showCart, showAllOrder, showOrder, showAllProduct, showProduct, showAllPayMethod, showPayMethod };