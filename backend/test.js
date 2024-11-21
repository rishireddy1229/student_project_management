const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
    res.send("This is the root    :    " + req.params.id);
})



app.listen(3000, () => console.log("Server started at 3000"));