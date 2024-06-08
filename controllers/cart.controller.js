/*
controllers yang dikonfigurasikan untuk pengaturan data terhadap shopping dan cart untuk checkout
*/ 

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all cart
const getAllCart = async (req, res) => {
    try {
        const session = req.session.user; // Assuming the session user is the user's ID

        const cart = await prisma.cart.findFirst({
            where: {
                userId: session
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
        // cart.items.forEach((item) => {
        //     console.log(item.product.imagePath);
        // });
        return res.render('shop', { cart });
        //return res.json(cart);
    } catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when getting cart',
            message: error.message 
        });
    
    }
};

// add to cart
const addToCart = async (req, res) => {
    const { productId } = req.body;

    try {
        const session = req.session.user;
        console.log(session);
        console.log(productId);
        const user = await prisma.user.findUnique({
            where: {
                id: session
            }
        });
    
        // cari produk berdasarkan id
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        });
        console.log(`informasi produk: ${product}`);
    
        // cari cart berdasarkan user id
        const cart = await prisma.cart.findFirst({
            where: {
                userId: user.id
            }
        });
        // If the user doesn't have a cart, create one
        if (!cart) {
            const newCart = await prisma.cart.create({
                data: {
                    user: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            });
        }
    
        // Add the product to the cart
        const cartItem = await prisma.cartItem.create({
            data: {
                cart: {
                    connect: {
                        id: cart.id
                    }
                },
                product: {
                    connect: {
                        id: product.id
                    }
                },
                quantity: 1  // Set the quantity to 1, or whatever quantity you want
            }
        });
        
        return res.redirect('/');

    } catch (error) {
        return res.status(500).json({ 
            title: 'Error occured when adding product to cart',
            message: error.message 
        });
    }
};

module.exports = {
    getAllCart,
    addToCart,
};