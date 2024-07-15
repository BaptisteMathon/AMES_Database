const express = require('express');

const { getAllProjects } = require('../controller/AMES/get');
const {getAllUsers} = require('../controller/Users/get')
const {getAllRessources} = require('../controller/Ressources/get')

const {addProject} = require('../controller/AMES/post')
const {addRessource} = require('../controller/Ressources/post')

const {deleteProject} = require('../controller/AMES/delete')
const {deleteRessource} = require('../controller/Ressources/delete')

const { update } = require("../controller/AMES/update")
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const projects = await getAllProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/getUser', async (req, res) => {
    try{
        const users = await getAllUsers()
        res.json(users)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.get('/getRessources', async (req, res) => {
    try{
        const ressources = await getAllRessources()
        res.json(ressources)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.get('/addProject/:name', async (req, res) => {
    try{
        const nameP = await addProject(req.params.name)
        res.json(nameP)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.get('/deleteProject/:project', async (req, res) => {
    try{
        const project = await deleteProject(req.params.project)
        res.json(project)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.get('/update/:data/:child', async(req, res) => {
    try {
        const projects = await update(req.params.data, req.params.child);
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/addRessource/:ressource', async(req, res) => {
    try{
        const ressource = await addRessource(req.params.ressource)
        res.json(ressource)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.get('/deleteRessource/:ressource', async(req, res) => {
    try{
        const ressource = await deleteRessource(req.params.ressource)
        res.json(ressource)
    } catch(err){
        res.status(500).json({err: 'Internal Server Error'})
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
