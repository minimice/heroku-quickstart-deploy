'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const TARGET = process.env.TARGET || 'World';
const NAME = process.env.NAME || 'Superman';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(`Saying hello!`);
  res.send('Hello ' + TARGET + ' this is ' + NAME + '\n');
});

app.listen(PORT, HOST);
console.log(`Heroku app running on http://${HOST}:${PORT}`);