'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to GitOps Platform\n 2oth Dec- k8s what is happeining-12345rt');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
