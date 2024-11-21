const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const StudentList = new mongoose.Schema({
    _id: Number,
    name: String,
    phone: Number,
    email: String
})

const Students = new mongoose.model("Student", StudentList);

// const user1 = new User({
//     _id: 1,
//     name: "Afroz",
//     phone: 123456,
//     email: "afroz@gmail.com"
// });

// user1.save();

const createStudents = async (_id, name, phone, email) => {
    try {
        const Student1 = new Students({
            _id: _id,
            name: name,
            phone: phone,
            email: email
        });

        const result = await Student1.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createUser();

// createUsers();

const readStudents = async () => {
    try {
        const result = await Students.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readStudentsById = async (_id) => {
    try {
        const result = await Students.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// // readUsers();
const updateStudents = async (_id, name, phone, email) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Students.findByIdAndUpdate({ _id }, { $set: { email: email, phone: phone, name: name, } })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// updateUser(2)

const deleteStudents = async (_id) => {
    try {
        const result = await Students.deleteOne({ _id });
        return result;
    } catch (err) {
        console.log(err);
    }
}



// deleteUser(1);
// app.listen('3000', () => console.log("server started at port 3000"))
module.exports.createStudents=createStudents;
module.exports.readStudents = readStudents;
module.exports.updateStudents= updateStudents;
module.exports.deleteStudents = deleteStudents;
module.exports.readStudentsById = readStudentsById;
