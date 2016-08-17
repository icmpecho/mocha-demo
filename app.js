'use strict';
const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.status(200).json({ data: 'hello world!' });
});

module.exports = app;
