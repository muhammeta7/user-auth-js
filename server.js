// app.js
const express = require('express')
const cors = require("cors");
const path = require("path")
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

// Create Express app
const app = express();

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/view/public/index.html"));
});

app.use(logger('dev'));
app.use(cors());


app.listen(PORT, () => console.log('Server running on port 3000!'))







