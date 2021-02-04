// app.js
const express = require('express');
const app = express();
const api_router = require('./routes');
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const { setup } = require('./db/setup');
const body_parser = require('body-parser');

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(body_parser.json());
app.use('/', api_router);

setup();

app.listen(3000, () => console.log('\nServer running on port 3000!\n'));

