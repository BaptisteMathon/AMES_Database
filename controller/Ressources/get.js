const initDatabase = require('../../database')

async function getAllRessources(){
    const db = await initDatabase()
    try{
        const ressources = await db.collection('Ressources').find({}).toArray()
        return ressources
    } catch(err){
        console.error({err})
    }
}

module.exports = {getAllRessources}