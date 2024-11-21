const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const SupervisorLoginList = new mongoose.Schema({
     name: String,
    // phone: Number,
    // branch: String,
    //email: String,
    password:String,

})

const SupervisorLogins = new mongoose.model("SupervisorLogins", SupervisorLoginList);


const createSupervisorsLogin = async (name, password) => {
    try {
        const Supervisor1login = new SupervisorLogins({
             name: name,
            // phone: phone,
            // branch:branch,
            //email: email,
            password:password
        });

        const result = await Supervisor1login.save();
        // console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createUser();

// createUsers();

const readSupervisorsLogin = async () => {
    try {
        const result = await SupervisorLogins.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

// const readStudentsLoginById = async (_id) => {
//     try {
//         const result = await User.find({ _id });
//         // console.log(result);
//         return result;
//     } catch (err) {
//         console.log(err);
//     }
// }
module.exports.createSupervisorsLogin=createSupervisorsLogin;
module.exports.readSupervisorsLogin = readSupervisorsLogin;
// module.exports.readStudentsLoginById=readStudentsLoginById