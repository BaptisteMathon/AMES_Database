const initDatabase = require('../../database');

async function getAllUsers() {
    const db = await initDatabase();
    try {
        const users = await db.collection('users').find({}).toArray();
        return users;
    } catch (error) {
        console.error({ error });
    }
}

module.exports = { getAllUsers };
