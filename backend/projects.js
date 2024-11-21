const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())

mongoose.set('strictQuery', false);
// const uri = "mongodb://0.0.0.0:27017/";
mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const projectsList = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    supervisor: String,
    selected: Boolean,
    status:Boolean
})

const Projects = new mongoose.model("Project", projectsList);

const createProjects = async (_id, name, description, supervisor) => {
    try {
        const project1 = new Projects({
            _id: _id,
            name: name,
            description: description,
            supervisor: supervisor,
            selected: false,
            status: false
        });

        const result = await project1.save();
         console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const readProjects = async () => {
    try {
        const result = await Projects.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readProjectsById = async (_id) => {
    try {
        const result = await Projects.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// // readUsers();
const updateProjects = async (_id, name, description, supervisor) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Projects.findByIdAndUpdate({ _id }, { $set: {name:name,description:description, supervisor:supervisor, selected:false,status:false } })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const deleteProjects = async ( _id )  => {
    try {
        const result = await Projects.findOneAndDelete({ _id:_id });
        return result;
    } catch (err) {
        console.log(err);
    }
}

const chooseProjects = async (_id, name, description,supervisor) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Projects.findByIdAndUpdate({ _id }, { $set: {name:name,description:description, supervisor:supervisor, selected:true,status:false } })
        // console.log(result); })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const approveProjects = async (_id, name, description,supervisor) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Projects.findByIdAndUpdate({ _id }, { $set: {name:name,description:description, supervisor:supervisor, selected:true,status:true } })
        // console.log(result); })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}




module.exports.approveProjects = approveProjects;
module.exports.chooseProjects= chooseProjects;
module.exports.createProjects = createProjects;
module.exports.readProjects = readProjects;
module.exports.updateProjects = updateProjects;
module.exports.deleteProjects = deleteProjects;
module.exports.readProjectsById = readProjectsById;