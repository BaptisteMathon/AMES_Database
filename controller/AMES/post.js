const initDatabase = require('../../database')

async function addProject(nameProject){
    const db = await initDatabase()
    const newP = {
        "name": nameProject,
        "task": [
          {
            "Name": "",
            "Charges": "0",
            "Ressources": "",
            "Début": "",
            "Fin": "",
            "Réal": "0",
            "children": []
          }
        ]
      }

    try{
        const projects = await db.collection("AMES").insertOne(newP)
        return projects
    } catch(error){
        console.error({error})
    }
}

module.exports = {addProject}