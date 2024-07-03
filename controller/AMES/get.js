const initDatabase = require('../../database');

async function getAllProjects() {
    const db = await initDatabase();
    try {
        const projects = await db.collection('AMES').find({}).toArray();
        return projects;
    } catch (error) {
        console.error({ error });
    }
}

module.exports = { getAllProjects };
