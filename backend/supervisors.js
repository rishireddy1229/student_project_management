const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/testdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

const SupervisorList = new mongoose.Schema({
    _id: Number,
    name: String,
    phone: Number,
    email: String,
})

const Supervisors = new mongoose.model("Supervisors", SupervisorList);

// const user1 = new User({
//     _id: 1,
//     name: "Afroz",
//     phone: 123456,
//     email: "afroz@gmail.com"
// });

// user1.save();

const createSupervisors = async (_id, name, phone, email) => {
    try {
        const Supervisors1 = new Supervisors({
            _id: _id,
            name: name,
            phone: phone,
            email: email,
        });

        const result = await Supervisors1.save();
        // console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// createUser();

// createUsers();

const readSupervisors = async () => {
    try {
        const result = await Supervisors.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}

const readSupervisorsById = async (_id) => {
    try {
        const result = await Supervisors.find({ _id });
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// // readUsers();
const updateSupervisors = async (_id, name, phone, email) => {
    try {
        // const result = await User.updateOne({ _id }, { $set: { email: "afroz123@gmail.com" } })
        const result = await Supervisors.findByIdAndUpdate({ _id }, { $set: { email: email, phone: phone, name: name ,} })
        // console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}
// updateUser(2)

const deleteSupervisors = async (_id) => {
    try {
        const result = await Supervisors.deleteOne({ _id });
        return result;
    } catch (err) {
        console.log(err);
    }
}
// deleteUser(1);
// app.listen('3000', () => console.log("server started at port 3000"))

module.exports.createSupervisors = createSupervisors;
module.exports.readSupervisors = readSupervisors;
module.exports.updateSupervisors = updateSupervisors;
module.exports.deleteSupervisors = deleteSupervisors;
module.exports.readSupervisorsById = readSupervisorsById;