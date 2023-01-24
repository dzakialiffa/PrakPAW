const express = require('express');
const app = express();
const path = require('path');

app.listen(3000);
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"))
});