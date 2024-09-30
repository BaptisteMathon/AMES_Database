const {ObjectId} = require('mongodb')
const initDatabase = require('../../database')

async function updateSemaine(lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche){
    const db = await initDatabase()
    try{          
        const id = { _id: new ObjectId("66cdc6460d170b346ce26c15") }
    
        const result = await db.collection('Semaine').updateOne(
            id,
            {$set: {
                "Lundi" : lundi,
                "Mardi" : mardi,
                "Mercredi" : mercredi,
                "Jeudi" : jeudi,
                "Vendredi" : vendredi,
                "Samedi": samedi,
                "Dimanche" : dimanche
            }}
        )
    
        return result
    } catch(err){
        console.error({err})
    }
}

module.exports = {updateSemaine}