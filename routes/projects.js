const express = require('express')
const router = express.Router()
const {projects} = require('../data')

router.get('/',(req,res)=>{
    res.json(projects)
})

function setProject(req,res,next){
    const projectId = parseInt(req.params.projectId);
    req.project = projects.find(p=> p.id === projectId)
    
    if(!req.project){
        return res.status(404).send("Project not found.")
    }
    next();
}
module.exports = router