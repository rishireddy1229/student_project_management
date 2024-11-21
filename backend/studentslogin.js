const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const StudentLoginList = new mongoose.Schema({
     name: String,
    // phone: Number,
    // branch: String,
    //email: String,
    password:String,

})

const StudentLogins = new mongoose.model("StudentLogins", StudentLoginList);


const createStudentsLogin = async (name, password) => {
    try {
        const Student1login = new StudentLogins({
             name: name,
            // phone: phone,
            // branch:branch,
            //email: email,
            password:password
        });

        const result = await Student1login.save();
        // console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createUser();

// createUsers();

const readStudentsLogin = async () => {
    try {
        const result = await StudentLogins.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readStudentsLoginById = async (_id) => {
    try {
        const result = await User.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
module.exports.createStudentsLogin=createStudentsLogin;
module.exports.readStudentsLogin = readStudentsLogin;
module.exports.readStudentsLoginById=readStudentsLoginById