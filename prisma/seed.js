const user = require('./user'); 
const products = require('./product');
const payMethod = require('./paymethod');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    for (let i of user) {
        await prisma.user.create({
            data: i
        });
    }

    for (let p of products) {
        await prisma.product.create({
            data: p
        });
    }

    for (let pm of payMethod) {
        await prisma.payMethod.create({
            data: pm
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });