'use strict';

// Includes
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./build/api/routes/routes');

// Server vars
const host = '0.0.0.0';
const port = 80;

// Set up app
const app = express();
const modelPath = __dirname + '/build/api/models/';

// Connect to mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/cah_db');

// Load models
fs.readdirSync(modelPath)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(modelPath + file));

// Load routes
app.use('/api/v1', routes.configure(express));

// Start the server
module.exports.server = app.listen(port, host, function() {
  console.log('Server started on http://' + host + ':' + port);
});
