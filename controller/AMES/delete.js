const { ObjectId } = require("mongodb")
const initDatabase = require("../../database")

async function deleteProject(idP){
    const db = await initDatabase()

    try{
        const test = await db.collection("AMES").deleteOne({_id: new ObjectId(idP)})
        return test
    } catch(error){
        console.error({error})
    }
}

module.exports = {deleteProject}