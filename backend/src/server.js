const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('MongoDB Connected')});

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => { console.log(`Server Initialized on port ${PORT}`) });

module.export = app;
