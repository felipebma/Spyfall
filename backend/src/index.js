const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes');
const PORT = 3003;

const app = express();


app.use(express.json());
app.use(routes);


app.listen(PORT);