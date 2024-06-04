const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            username: 'krauchelli',
            password: 'krauchelli123',
            // phoneNumber: '1234567890', // opsional mas
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });