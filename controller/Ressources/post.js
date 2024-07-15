const initDatabase = require('../../database')

async function addRessource(newRessource){
    const db = await initDatabase()
    const newP = {
        "ressources": newRessource
      }

    try{
        const projects = await db.collection("Ressources").insertOne(newP)
        return projects
    } catch(error){
        console.error({error})
    }
}

module.exports = {addRessource}