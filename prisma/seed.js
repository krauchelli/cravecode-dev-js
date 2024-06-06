const user = require('./user'); 
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    for (let i of user) {
        await prisma.user.create({
            data: i
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