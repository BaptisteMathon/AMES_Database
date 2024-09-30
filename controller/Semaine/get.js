const initDatabase = require('../../database')

async function getSemaine(){
    const db = await initDatabase()
    try{
        const ressources = await db.collection('Semaine').find({}).toArray()
        return ressources
    } catch(err){
        console.error({err})
    }
}

module.exports = {getSemaine}