const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const stuconnect = require('./students');
const supconnect= require('./supervisors')
const proconnect=require('./projects')
const groconnect=require('./groupdetails')
const stuLoginconnect=require('./studentslogin')
const supLoginconnect=require('./supervisorslogin')
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/readStudents', async (req, res) => {
    let result = await stuconnect.readStudents();
    res.json(result); 
})

app.post('/addStudents', async (req, res) => {
    let result = await stuconnect.createStudents(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.put('/updateStudents', async (req, res) => {
    let result = await stuconnect.updateStudents(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.delete('/deleteStudents/:_id', async (req, res) => {
    let result = await stuconnect.deleteStudents(parseInt(parseInt(req.params._id)));
    res.json({ result, message: `Record with id ${req.body._id} is deleted successfully` });
})

// Projects
app.get('/readProjects', async (req, res) => {
    let result = await proconnect.readProjects();
    res.json(result);
})

app.get('/readProjectsById/:_id', async (req, res) => {
    let result = await proconnect.readProjectsById(parseInt(req.params._id));
    res.json(result);
})


app.post('/addProjects', async (req, res) => {
    let result = await proconnect.createProjects(parseInt(req.body._id), req.body.name,
        req.body.description, req.body.supervisor)
    res.json(result);
})

app.post('/readProjectsById/:_id/apply', async (req, res) => {
    let result = await proconnect.updateProjects(parseInt(req.body._id), req.body.name,
        req.body.description, req.body.supervisor,req.body.selected,req.body.status)
    res.json(result);
})


app.put('/updateProjects', async (req, res) => {
    let result = await proconnect.updateProjects(parseInt(req.body._id), req.body.name,
    req.body.description, req.body.supervisor);
    res.json(result);
})
app.put('/chooseProjects', async (req, res) => {
    let result = await proconnect.chooseProjects(parseInt(req.body._id), req.body.name,
    req.body.description, req.body.supervisor);
    res.json(result);
})
app.put('/approveProjects', async (req, res) => {
    let result = await proconnect.approveProjects(parseInt(req.body._id), req.body.name,
    req.body.description, req.body.supervisor);
    res.json(result);
})


app.delete('/deleteProjects/:_id', async (req, res) => {
    let result = await proconnect.deleteProjects(parseInt(req.params._id));
    res.json({ result, message: `Record with id ${req.body._id} is deleted successfully` });
})

// Supervisor
app.get('/readSupervisors', async (req, res) => {
    let result = await supconnect.readSupervisors();
    res.json(result);
})

app.get('/readSupervisorsById/:_id', async (req, res) => {
    let result = await supconnect.readSupervisorsById(parseInt(req.params._id));
    res.json(result);
})


app.post('/addSupervisors', async (req, res) => {
    let result = await supconnect.createSupervisors(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.put('/updateSupervisors', async (req, res) => {
    let result = await supconnect.updateSupervisors(parseInt(req.body._id), req.body.name,
        parseInt(req.body.phone), req.body.email);
    res.json(result);
})

app.delete('/deleteSupervisors/:_id', async (req, res) => {
    let result = await supconnect.deleteSupervisors(parseInt(parseInt(req.params._id)));
    res.json({ result, message: `Record with id ${req.body._id} is deleted successfully` });
})

app.post('/addGroupDetails', async (req,res)=>{
    let result = await groconnect.createGroups(parseInt(req.body._id), req.body.name, req.body.description, req.body.supervisor,
    req.body.s1Id,req.body.s2Id,req.body.s3Id,req.body.phone, req.body.email);
    res.json(result);
})
app.get('/readGroupDetails', async (req,res)=>{
    let result = await groconnect.readGroups();
    res.json(result);
})
app.put('/updateGroupProjects', async(req,res)=>{
    let result=await groconnect.updateGroupProjects(parseInt(req.body._id),req.body.name, req.body.description, req.body.supervisor,
    req.body.s1Id,req.body.s2Id,req.body.s3Id,req.body.phone, req.body.email);
    res.json(result);
})



//STUDENTS LOGIN
app.post('/addStudentsLogin', async (req, res) => {
    // console.log(req)
    let result = await stuLoginconnect.createStudentsLogin(req.body.name,req.body.password);
    res.json(result);
})
app.get('/readStudentsLogin', async (req, res) => {
    let result = await stuLoginconnect.readStudentsLogin();
    res.json(result); 
})

//SUPERVISORS LOGIN
app.post('/addSupervisorsLogin', async (req, res) => {
    // console.log(req)
    let result = await supLoginconnect.createSupervisorsLogin(req.body.name,req.body.password);
    res.json(result);
})
app.get('/readSupervisorsLogin', async (req, res) => {
    let result = await supLoginconnect.readSupervisorsLogin();
    res.json(result); 
})

app.listen(3000, () => console.log("server started at port 3000"))