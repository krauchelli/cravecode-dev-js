const bcrypt = require('bcrypt');
const saltRounds = 10;
//collection of random user data
const user = [
    {
        username: 'admin',
        email: 'admin@random.com',
        password: 'admin',
        phoneNumber: '1234567890',
        role: 'ADMIN'
    },
    {
        username: 'GitHubCopilot',
        email: 'githubcopilot@random.com',
        password: 'copilot123',
        phoneNumber: '0987654321'
    },
    {
        username: 'yama',
        email: 'user1@example.com',
        password: 'yama123',
        phoneNumber: '1111111111'
    },
    {
        username: 'kotoha',
        email: 'user2@example.com',
        password: 'kotoha123',
        phoneNumber: '2222222222'
    },
    {
        username: 'dini',
        email: 'user3@example.com',
        password: 'dini123',
        phoneNumber: '3333333333'
    },
    {
        username: 'ladya',
        email: 'user4@example.com',
        password: 'ladya123',
        phoneNumber: '4444444444'
    }
];

// hash passwords using bcrypt

user.forEach((user) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
});

module.exports = user;

module.exports = user;