const express = require('express');
const consign = require('consign');
const app = express();
const port = 3001;
const db = require('./config/db');

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./src/api/validation.js')
    .then('./src/api')
    .then('./config/routes.js')
    .into(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});