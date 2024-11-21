const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(300).send("Not authorized to access this page")
    }
}

app.post('/login', (req, res) => {
    let user = {
        name: "cvr",
        password: "cse"
    };
    jwt.sign({ user }, "secret key", (error, token) => {
        if (!error) {
            res.json({ token })
        }
        else{
            console.log(" wrong credentials. Not authorized to access this page")
        }
    })
})

app.post('/updateEndpoint', verifyToken, (req, res) => {
    jwt.verify(req.token, "secret key", (error, data) => {
        if (!error) {
            res.json({ message: "updateEndpoint" })
        } else {
            res.status(300).send("Incorrect Token")
        }
    })
})
app.listen(3000, () => console.log("server started at port 3000"))