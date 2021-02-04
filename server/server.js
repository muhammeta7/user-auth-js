// app.js
const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const api_router = require('./routes');
const cors = require("cors");
const logger = require("morgan");
const { setup } = require('./db/setup');
const body_parser = require('body-parser');
// HandleBars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
    res.render('home');
});


app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(body_parser.json());
app.use('/', api_router);

setup();

app.listen(3000, () => console.log('\nServer running on port 3000!\n'));

