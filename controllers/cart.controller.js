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

        if (!cart) {
            return res.redirect('/');
        }

        switch (cart.status) {
            case 'CART':
                let subtotal = 0;
                cart.items.forEach((item) => {
                    subtotal += item.product.price * item.quantity;
                });
                console.log(`subtotal: ${subtotal}`);
                console.log(cart.items)
                return res.render('shop', { cart, subtotal });

            case 'PROCESSED':
                return res.redirect('/inprocess');

            case 'COMPLETED':
                return res.redirect('/completed');

            default:
                return res.status(400).json({ message: 'Invalid cart status' });
        }
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
            const defaultPayMethod = await prisma.payMethod.findFirst();
            const newCart = await prisma.cart.create({
                data: {
                    payMethod: {
                        connect: {
                            id: defaultPayMethod.id
                        }
                    },
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

// mengubah jumlah item di cart
const updateCart = async (req, res) => {
    try {
        const { cartId, quantity } = req.body;
        console.log(`cartId: ${cartId}, quantity: ${quantity}`);
    
        // Find the cartItem using the cartId
        const cart = await prisma.cartItem.findFirst({
            where: {
                id: cartId
            }
        });
        console.log(`cart: ${cart}`);
    
        // Update the quantity of the cartItem
        const updatedCart = await prisma.cartItem.update({
            where: {
                id: cart.id
            },
            data: {
                quantity: parseInt(quantity, 10)
            }
        });
    
        // Return the updated cart item
        return res.redirect('/shop');
    }
    catch (error) {
        res.status(500).json({ 
            title: 'Error occured when updating cart',
            message: error.message 
        });
    }
};

// melanjutkan cart ke process
const addToProcess = async (req, res) => {
    const session = req.session.user;
    const { paymentMethod } = req.body;
    console.log(req.body);
    try {
        // cari cart berdasarkan user id
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

        // menambahkan nilai subtotal dari cart item ke total cart
        let subtotal = 0;
        cart.items.forEach((item) => {
            subtotal += item.product.price * item.quantity;
        });

        // update total cart dengan subtotal
        const updateTotal = await prisma.cart.update({
            where: {
                id: cart.id
            },
            data: {
                total: subtotal
            }
        });

        // cari payment method berdasarkan id
        const payMethod = await prisma.payMethod.findUnique({
            where: {
                id: paymentMethod
            }
        });

        // update cart dengan payment method dan update status enum
        const updatedCart = await prisma.cart.update({
            where: {
                id: cart.id
            },
            data: {
                payMethod: {
                    connect: {
                        id: payMethod.id
                    }
                },
                status: 'PROCESSED'
            }
        });

        return res.redirect('/inprocess');

    } catch (error) {
        res.status(500).json({ 
            title: 'Error occured when adding product to process',
            message: error.message 
        });
    }
};

// mendapatkan semua daftar proses order yang telah dipindahkan dari cart
const getAllProcess = async (req, res) => {
    try {
        const session = req.session.user;

        //mengecek status cart yang sudah diubah menjadi processed, jika selain processed maka akan dikembalikan ke cart
        const process = await prisma.cart.findFirst({
            where: {
                userId: session,
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });

        if (!process) {
            return res.redirect('/shop');
        }
    
        switch (process.status) {
            case 'PROCESSED':
                let subtotal = 0;
                process.items.forEach((item) => {
                    subtotal += item.product.price * item.quantity;
                });
                console.log(`subtotal: ${subtotal}`);
                return res.render('inprocess', { process, subtotal });

            case 'COMPLETED':
                return res.redirect('/completed');

            case 'CART':
                return res.redirect('/shop');

            default:
                return res.status(400).json({ message: 'Invalid cart status' });
        }
    } catch (error) {
        res.status(500).json({ 
            title: 'Error occured when getting all process',
            message: error.message 
        });
    }
};

// update status cart menjadi completed
const addToCompleted = async (req, res) => {
    try {
        const session = req.session.user;
        // cari cart berdasarkan user id
        const cart = await prisma.cart.findFirst({
            where: {
                userId: session
            }
        });

        // update cart dengan status enum menjadi completed
        const updatedCart = await prisma.cart.update({
            where: {
                id: cart.id
            },
            data: {
                status: 'COMPLETED'
            }
        });

        return res.redirect('/completed');
    } catch (error) {
        res.status(500).json({ 
            title: 'Error occured when adding product to process',
            message: error.message 
        });
    }  
};

// mendapatkan semua daftar order yang telah selesai
const getAllCompleted = async (req, res) => {
    try {
        const session = req.session.user;

        // Check the status of the cart
        const completed = await prisma.cart.findFirst({
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

        if (!completed) {
            // Handle case when no cart is found
            return res.status(404).json({ message: 'No cart found' });
        }

        switch (completed.status) {
            case 'COMPLETED':
                let subtotal = 0;
                completed.items.forEach((item) => {
                    subtotal += item.product.price * item.quantity;
                });
                console.log(`subtotal: ${subtotal}`);
                return res.render('completed', { completed, subtotal });

            case 'PROCESSED':
                return res.redirect('/inprocess');

            case 'CART':
                return res.redirect('/shop');

            default:
                // Handle case when status is none of the above
                return res.status(400).json({ message: 'Invalid cart status' });
        }
    } catch (error) {
        res.status(500).json({
            title: 'Error occured when getting all completed',
            message: error.message 
        });
    }
}

// kosongkan isi cartitem dan reset status ke 'cart' ketika cart sudah completed
const emptyCart = async (req, res) => {
    try {
        const session = req.session.user;
        // cari cart berdasarkan user id
        const cart = await prisma.cart.findFirst({
            where: {
                userId: session
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                },
                user: true,
                payMethod: true
            }
        });
        
        // memindahkan cart ke ordered sebelum dihapus
        const order = await prisma.ordered.create({
            data: {
                user: {
                    connect: {
                        id: cart.userId
                    }
                },
                payMethod: {
                    connect: {
                        id: cart.payMethodId
                    }
                },
                total: cart.total,
                status: cart.status,
                createdAt: cart.createdAt,
                items: {
                    create: cart.items.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                    }))
                }
            }
        });

        // hapus cartItem berdasarkan cart id
        const deletedCartItem = await prisma.cartItem.deleteMany({
            where: {
                cartId: cart.id
            }
        });

        // update status cart menjadi 'cart'
        const updatedCart = await prisma.cart.update({
            where: {
                id: cart.id
            },
            data: {
                total: 0,
                status: 'CART'
            }
        });

        return res.redirect('/');
    } catch (error) {
        res.status(500).json({
            title: 'Error occured when emptying cart',
            message: error.message 
        });
    }
};

module.exports = {
    getAllCart,
    addToCart,
    addToProcess, 
    getAllProcess,
    addToCompleted,
    getAllCompleted,
    emptyCart,
    updateCart
};