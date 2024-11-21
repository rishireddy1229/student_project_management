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

app.post('/authorizedEndPoint', verifyToken, (req, res) => {
    jwt.verify(req.token, "secret key", (error, data) => {
        if (!error) {
            res.json({ data, message: "updateEndpoint" })
        } else {
            res.status(300).send("Incorrect Token")
        }
    })
})

app.post('/login', (req, res) => {
    let user = {
        username: "CVR",
        password: "CSE"
    };

    jwt.sign({ user }, "secret key", (err, token) => {
        if (!err) {
            res.json({ token })
        }
    })
})





app.listen(3000, () => console.log("Server started at port 3000"));