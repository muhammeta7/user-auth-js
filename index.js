const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const playersRouter = require("./routes/#");
// app.use("/players", playersRouter);
app.listen(port, () => console.log('Server running on port 2021!'))
