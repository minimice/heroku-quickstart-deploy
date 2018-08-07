'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const TARGET = process.env.TARGET || 'World';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello ' + TARGET + ' this is Superman\n');
});

app.listen(PORT, HOST);
process.stdout.write(`Heroku app running on http://${HOST}:${PORT}`);