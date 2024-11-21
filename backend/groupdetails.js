const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const GroupDetailsList = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    supervisor: String,
    s1Id:String,
    s2Id:String,
    s3Id:String,
    phone: String,
    email:String,
    // selected:Boolean,
    status:Boolean
})

const Groups = new mongoose.model("Group", GroupDetailsList);

// const user1 = new User({
//     _id: 1,
//     name: "Afroz",
//     phone: 123456,
//     email: "afroz@gmail.com"
// });

// user1.save();

const createGroups= async (_id, name, description, supervisor, s1Id,s2Id,s3Id, phone,email) => {
    try {
        const Groups1 = new Groups({
            _id: _id,
            name: name,
            description: description,
            supervisor: supervisor,
            s1Id:s1Id,
            s2Id:s2Id,
            s3Id:s3Id,
            phone: phone,
            email:email,
            status:false,

        });

        const result = await Groups1.save();
        // console.log(result);
    } catch (err) {
        console.log(err);
    }
}
const updateGroupProjects = async (_id, name, description, supervisor,s1Id,s2Id,s3Id,phone,email) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Groups.findByIdAndUpdate({ _id }, { $set: {name:name,description:description, supervisor:supervisor, s1Id:s1Id,s2Id:s2Id,s3Id:s3Id,phone:phone, email:email, status:true } })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// createUser();

// createUsers();

const readGroups = async () => {
    try {
        const result = await Groups.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readGroupsById = async (_id) => {
    try {
        const result = await Groups.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports.updateGroupProjects=updateGroupProjects;
module.exports.createGroups = createGroups;
module.exports.readGroups = readGroups;
module.exports.readGroupsById = readGroupsById;