const initDatabase = require("../../database")

async function deleteRessource(nameRessource){
    const db = await initDatabase()
    console.log(nameRessource)

    try{
        const delRess = await db.collection("Ressources").deleteOne({ressources: nameRessource})
        return delRess
    } catch(error){
        console.error({error})
    }
}

module.exports = {deleteRessource}